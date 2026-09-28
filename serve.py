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
