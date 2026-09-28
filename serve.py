#!/usr/bin/env python3
"""
Custom Web Server for BPSC TRE 4.0 Computer Teacher Portal
Automatically finds a guaranteed unique free port so it never conflicts
with your existing development ports (3000, 5000, 8000, 8080, etc.).
"""

import http.server
import socketserver
import socket
import os
import sys

# Target a dedicated unique port range for Computer Teacher (default: 8540)
DEFAULT_PORT = 8540
HOST = '127.0.0.1'

def is_port_free(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind((HOST, port))
            return True
        except OSError:
            return False

def find_available_port(start_port=DEFAULT_PORT, max_attempts=50):
    for port in range(start_port, start_port + max_attempts):
        if is_port_free(port):
            return port
    # Fallback: ask OS to assign an ephemeral free port
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, 0))
        return s.getsockname()[1]

def run_server():
    # Ensure working directory is the project directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    selected_port = find_available_port(DEFAULT_PORT)

    class QuietHTTPHandler(http.server.SimpleHTTPRequestHandler):
        def end_headers(self):
            # Add cache-control to prevent stale cache during R&D edits
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            super().end_headers()

        def do_GET(self):
            import json
            analytics_db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'analytics_db.json')
            payments_db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'payments_db.json')

            if self.path.startswith('/api/analytics-summary'):
                try:
                    analytics = {}
                    if os.path.exists(analytics_db_path):
                        try:
                            with open(analytics_db_path, 'r') as f:
                                analytics = json.load(f)
                        except Exception:
                            analytics = {}

                    payments = []
                    if os.path.exists(payments_db_path):
                        try:
                            with open(payments_db_path, 'r') as f:
                                payments = json.load(f)
                        except Exception:
                            payments = []

                    sessions = analytics.get('sessions', {})
                    screen_counts = analytics.get('screen_counts', {})
                    exit_counts = analytics.get('exit_counts', {})

                    total_sessions = len(sessions)
                    visitors_set = set(s.get('visitor_id') for s in sessions.values() if s.get('visitor_id'))
                    unique_visitors = len(visitors_set) if visitors_set else total_sessions

                    # Duration calculation
                    durations = [s.get('duration_seconds', 0) for s in sessions.values() if s.get('duration_seconds', 0) > 0]
                    avg_duration = round(sum(durations) / len(durations)) if durations else 0

                    # Funnel calculations
                    paywall_views = sum(1 for s in sessions.values() if s.get('paywall_viewed'))
                    paid_count = len(payments)
                    conv_rate = round((paid_count / total_sessions * 100), 1) if total_sessions > 0 else 0

                    summary = {
                        'success': True,
                        'total_visitors': unique_visitors,
                        'total_sessions': total_sessions,
                        'avg_duration_seconds': avg_duration,
                        'screen_counts': screen_counts,
                        'exit_counts': exit_counts,
                        'funnel': {
                            'total_sessions': total_sessions,
                            'paywall_views': paywall_views,
                            'paid_count': paid_count,
                            'conversion_rate': conv_rate
                        },
                        'recent_sessions': list(sessions.values())[-10:][::-1]
                    }

                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps(summary).encode('utf-8'))
                    return
                except Exception as e:
                    self.send_response(500)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                    return

            super().do_GET()

        def do_POST(self):
            import json
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length).decode('utf-8')
            db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'payments_db.json')
            analytics_db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'analytics_db.json')

            def load_db():
                if os.path.exists(db_path):
                    try:
                        with open(db_path, 'r') as f:
                            return json.load(f)
                    except Exception:
                        return []
                return []

            def save_db(data):
                with open(db_path, 'w') as f:
                    json.dump(data, f, indent=2)

            def load_analytics():
                if os.path.exists(analytics_db_path):
                    try:
                        with open(analytics_db_path, 'r') as f:
                            return json.load(f)
                    except Exception:
                        pass
                return {'sessions': {}, 'screen_counts': {}, 'exit_counts': {}}

            def save_analytics(data):
                with open(analytics_db_path, 'w') as f:
                    json.dump(data, f, indent=2)

            if self.path == '/api/record-payment':
                try:
                    payload = json.loads(post_body)
                    db = load_db()
                    existing = next((r for r in db if r.get('payment_id') == payload.get('payment_id')), None)
                    if not existing:
                        db.append(payload)
                        save_db(db)
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': True, 'payment_id': payload.get('payment_id')}).encode('utf-8'))
                    return
                except Exception as e:
                    self.send_response(500)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                    return

            elif self.path == '/api/restore-payment':
                try:
                    payload = json.loads(post_body)
                    query = str(payload.get('query', '')).strip().lower()
                    db = load_db()
                    matched = None
                    for r in db:
                        r_pay_id = str(r.get('payment_id', '')).strip().lower()
                        r_phone = str(r.get('phone', '')).strip()
                        if query == r_pay_id or (len(query) >= 10 and query in r_phone):
                            matched = r
                            break
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    if matched:
                        self.wfile.write(json.dumps({'success': True, 'record': matched}).encode('utf-8'))
                    else:
                        self.wfile.write(json.dumps({'success': False, 'message': 'No payment record found for this Payment ID or Phone Number.'}).encode('utf-8'))
                    return
                except Exception as e:
                    self.send_response(500)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                    return

            elif self.path == '/api/track-event':
                try:
                    payload = json.loads(post_body)
                    data = load_analytics()
                    sess_id = payload.get('session_id') or 'anon_session'
                    event_type = payload.get('event', 'screen_view')
                    screen_title = payload.get('screen_title', 'Dashboard')

                    if sess_id not in data['sessions']:
                        data['sessions'][sess_id] = {
                            'session_id': sess_id,
                            'visitor_id': payload.get('visitor_id', 'anon'),
                            'start_time': payload.get('timestamp'),
                            'device': payload.get('device', 'Desktop'),
                            'referrer': payload.get('referrer', 'Direct'),
                            'screens_visited': [],
                            'last_screen': screen_title,
                            'exit_screen': screen_title,
                            'duration_seconds': 0,
                            'paywall_viewed': False
                        }

                    sess = data['sessions'][sess_id]
                    if screen_title not in sess['screens_visited']:
                        sess['screens_visited'].append(screen_title)
                    sess['last_screen'] = screen_title
                    sess['exit_screen'] = screen_title

                    if event_type == 'paywall_view' or payload.get('screen') == 'tab-paywall':
                        sess['paywall_viewed'] = True

                    if event_type in ('screen_view', 'session_start'):
                        data['screen_counts'][screen_title] = data['screen_counts'].get(screen_title, 0) + 1

                    save_analytics(data)
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': True}).encode('utf-8'))
                    return
                except Exception as e:
                    self.send_response(500)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                    return

            elif self.path == '/api/track-exit':
                try:
                    payload = json.loads(post_body)
                    data = load_analytics()
                    sess_id = payload.get('session_id')
                    exit_screen = payload.get('exit_screen_title') or payload.get('exit_screen', 'Dashboard')
                    duration = int(payload.get('duration_seconds', 0))

                    if sess_id and sess_id in data['sessions']:
                        data['sessions'][sess_id]['exit_screen'] = exit_screen
                        data['sessions'][sess_id]['duration_seconds'] = duration

                    data['exit_counts'][exit_screen] = data['exit_counts'].get(exit_screen, 0) + 1
                    save_analytics(data)

                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': True}).encode('utf-8'))
                    return
                except Exception as e:
                    self.send_response(500)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                    return

            elif self.path == '/api/reset-analytics':
                try:
                    initial_data = {'sessions': {}, 'screen_counts': {}, 'exit_counts': {}}
                    save_analytics(initial_data)
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': True, 'message': 'Analytics reset successfully.'}).encode('utf-8'))
                    return
                except Exception as e:
                    self.send_response(500)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                    return

            self.send_response(404)
            self.end_headers()

    with socketserver.TCPServer((HOST, selected_port), QuietHTTPHandler) as httpd:
        print("\n" + "="*65)
        print("  🎯 BPSC TRE 4.0 Computer Teacher — Master Portal Live!")
        print(f"  🔗 URL: http://localhost:{selected_port}")
        print(f"  🔒 Dedicated Unique Port: {selected_port} (No conflict with common ports)")
        print("="*65 + "\n")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server gracefully...")
            httpd.server_close()

if __name__ == '__main__':
    run_server()
