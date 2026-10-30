#!/usr/bin/env python3
"""
Automated SEO Audit & Verification Script
Audits Technical SEO, On-Page SEO, Images, Structured Data, and Keyword Coverage.
"""

import os
import sys
import re
import json
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

class DetailedHTMLAudit(HTMLParser):
    def __init__(self, filename):
        super().__init__()
        self.filename = filename
        self.title = ""
        self.in_title = False
        self.metas = {}
        self.og = {}
        self.twitter = {}
        self.canonical = ""
        self.headings = []
        self.cur_heading = None
        self.cur_heading_text = ""
        self.images = []
        self.scripts_in_head = []
        self.in_head = False
        self.json_lds = []
        self.cur_script_type = None
        self.cur_script_content = ""

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        if tag == "head":
            self.in_head = True
        elif tag == "title":
            self.in_title = True
        elif tag == "meta":
            if "name" in attr_dict and "content" in attr_dict:
                name = attr_dict["name"].lower()
                self.metas[name] = attr_dict["content"]
                if name.startswith("twitter:"):
                    self.twitter[name] = attr_dict["content"]
            elif "property" in attr_dict and "content" in attr_dict:
                prop = attr_dict["property"].lower()
                if prop.startswith("og:"):
                    self.og[prop] = attr_dict["content"]
        elif tag == "link":
            if attr_dict.get("rel") == "canonical":
                self.canonical = attr_dict.get("href", "")
        elif tag in ["h1", "h2", "h3", "h4", "h5", "h6"]:
            self.cur_heading = tag
            self.cur_heading_text = ""
        elif tag == "img":
            self.images.append({
                "src": attr_dict.get("src", ""),
                "alt": attr_dict.get("alt"),
                "width": attr_dict.get("width"),
                "height": attr_dict.get("height"),
                "loading": attr_dict.get("loading")
            })
        elif tag == "script":
            self.cur_script_type = attr_dict.get("type", "")
            self.cur_script_content = ""
            if self.in_head and "src" in attr_dict:
                # Check if async or defer
                is_async = "async" in attr_dict
                is_defer = "defer" in attr_dict
                self.scripts_in_head.append({
                    "src": attr_dict["src"],
                    "async": is_async,
                    "defer": is_defer
                })

    def handle_endtag(self, tag):
        if tag == "head":
            self.in_head = False
        elif tag == "title":
            self.in_title = False
        elif tag in ["h1", "h2", "h3", "h4", "h5", "h6"]:
            self.headings.append((self.cur_heading, self.cur_heading_text.strip()))
            self.cur_heading = None
        elif tag == "script":
            if self.cur_script_type == "application/ld+json":
                try:
                    data = json.loads(self.cur_script_content)
                    self.json_lds.append(data)
                except Exception as e:
                    self.json_lds.append({"error": str(e)})
            self.cur_script_type = None

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        elif self.cur_heading:
            self.cur_heading_text += data
        elif self.cur_script_type == "application/ld+json":
            self.cur_script_content += data

def run_audit():
    print("=" * 70)
    print("  🚀 AUTOMATED SEO AUDIT FOR https://tre4.agiludic.com")
    print("=" * 70)
    
    passed_checks = 0
    warning_checks = 0
    failed_checks = 0

    def record(status, category, message):
        nonlocal passed_checks, warning_checks, failed_checks
        symbol = "✅ PASS" if status == "PASS" else ("⚠️ WARN" if status == "WARN" else "❌ FAIL")
        if status == "PASS": passed_checks += 1
        elif status == "WARN": warning_checks += 1
        else: failed_checks += 1
        print(f"[{symbol}] [{category}] {message}")

    # 1. Technical SEO: robots.txt
    if os.path.exists("robots.txt"):
        r_txt = open("robots.txt").read()
        if "User-agent:" in r_txt and "Allow: /" in r_txt:
            record("PASS", "Technical SEO", "robots.txt exists and permits search bot crawling.")
        else:
            record("FAIL", "Technical SEO", "robots.txt missing User-agent or Allow directives.")
        if "Sitemap: https://tre4.agiludic.com/sitemap.xml" in r_txt:
            record("PASS", "Technical SEO", "robots.txt contains correct canonical Sitemap URL.")
        else:
            record("WARN", "Technical SEO", "robots.txt does not link to canonical sitemap.xml.")
    else:
        record("FAIL", "Technical SEO", "robots.txt not found in root.")

    # 2. Technical SEO: sitemap.xml & sitemap.xsl
    if os.path.exists("sitemap.xml"):
        try:
            tree = ET.parse("sitemap.xml")
            root = tree.getroot()
            record("PASS", "Technical SEO", "sitemap.xml is valid, well-formed XML.")
            sitemap_txt = open("sitemap.xml").read()
            if "xml-stylesheet" in sitemap_txt:
                record("PASS", "Technical SEO", "sitemap.xml has XSLT stylesheet linked for clean rendering.")
            else:
                record("WARN", "Technical SEO", "sitemap.xml lacks XSL stylesheet (shows raw browser XML warning).")
            if "image:image" in sitemap_txt:
                record("PASS", "Technical SEO", "sitemap.xml contains Google Image Schema tags.")
            else:
                record("WARN", "Technical SEO", "sitemap.xml lacks Google Image tags for rich snippet search.")
        except Exception as e:
            record("FAIL", "Technical SEO", f"sitemap.xml parsing error: {e}")
    else:
        record("FAIL", "Technical SEO", "sitemap.xml not found.")

    # 3. HTML Pages Audit
    html_files = ["index.html", "privacy.html", "terms.html"]
    for hf in html_files:
        if not os.path.exists(hf):
            record("FAIL", "HTML Files", f"Missing {hf}")
            continue
        
        parser = DetailedHTMLAudit(hf)
        parser.feed(open(hf).read())

        # Title
        title_len = len(parser.title.strip())
        if 40 <= title_len <= 85:
            record("PASS", f"{hf} Title", f"Optimal title length ({title_len} chars): '{parser.title.strip()[:50]}...'")
        else:
            record("WARN", f"{hf} Title", f"Title length ({title_len} chars) outside optimal 40-85 range.")

        # Meta Description
        desc = parser.metas.get("description", "")
        desc_len = len(desc.strip())
        if 110 <= desc_len <= 175:
            record("PASS", f"{hf} Meta Desc", f"Optimal description length ({desc_len} chars).")
        elif desc_len > 175:
            record("WARN", f"{hf} Meta Desc", f"Description too long ({desc_len} chars > 175 chars), risks SERP truncation.")
        elif desc_len > 0:
            record("WARN", f"{hf} Meta Desc", f"Description short ({desc_len} chars < 110 chars).")
        else:
            record("FAIL", f"{hf} Meta Desc", "Meta description tag missing!")

        # Canonical
        if parser.canonical.startswith("https://tre4.agiludic.com"):
            record("PASS", f"{hf} Canonical", f"Valid canonical URL: {parser.canonical}")
        else:
            record("FAIL", f"{hf} Canonical", f"Missing or invalid canonical URL in {hf}")

        # Headings
        h1_list = [h for h, txt in parser.headings if h == "h1"]
        if len(h1_list) == 1:
            record("PASS", f"{hf} H1", f"Exactly 1 H1 heading present.")
        elif len(h1_list) == 0:
            record("FAIL", f"{hf} H1", "Missing H1 heading!")
        else:
            record("WARN", f"{hf} H1", f"Multiple ({len(h1_list)}) H1 headings found.")

        # Check for skipped heading levels
        levels = [int(h[1]) for h, _ in parser.headings]
        skipped = False
        for i in range(len(levels) - 1):
            if levels[i+1] > levels[i] + 1:
                skipped = True
                break
        if skipped:
            record("WARN", f"{hf} Headings", f"Heading level skipped in hierarchy (e.g. h1 directly to h3).")
        else:
            record("PASS", f"{hf} Headings", f"Heading hierarchy is consistent and does not skip levels.")

        # Images
        missing_alt = [img for img in parser.images if not img.get("alt") or img.get("alt").strip() == ""]
        missing_dims = [img for img in parser.images if not img.get("width") or not img.get("height")]
        if not missing_alt:
            record("PASS", f"{hf} Image Alt", f"All {len(parser.images)} images have descriptive alt text.")
        else:
            record("FAIL", f"{hf} Image Alt", f"{len(missing_alt)} images missing alt text.")
        
        if not missing_dims:
            record("PASS", f"{hf} Image Dims", f"All {len(parser.images)} images have width & height to prevent CLS.")
        else:
            record("WARN", f"{hf} Image Dims", f"{len(missing_dims)} images missing width/height attributes (risk of Layout Shift).")

        # Render-blocking scripts in <head>
        blocking = [s for s in parser.scripts_in_head if not s["async"] and not s["defer"]]
        if not blocking:
            record("PASS", f"{hf} Scripts", "No render-blocking external scripts found in <head>.")
        else:
            record("WARN", f"{hf} Scripts", f"{len(blocking)} render-blocking script(s) in <head>: {[b['src'] for b in blocking]}")

        # Structured Data
        if hf == "index.html":
            if parser.json_lds:
                types_found = set()
                for j in parser.json_lds:
                    if "@graph" in j:
                        for item in j["@graph"]:
                            types_found.add(item.get("@type"))
                    elif "@type" in j:
                        types_found.add(j.get("@type"))
                
                req_types = ["WebSite", "Course", "Quiz", "FAQPage"]
                recommended_types = ["EducationalOrganization", "BreadcrumbList"]
                
                missing_req = [t for t in req_types if t not in types_found]
                missing_rec = [t for t in recommended_types if t not in types_found]
                
                if not missing_req:
                    record("PASS", "index.html Schema", f"All required schemas present: {list(types_found)}")
                else:
                    record("FAIL", "index.html Schema", f"Missing schemas: {missing_req}")
                
                if not missing_rec:
                    record("PASS", "index.html Schema", f"All recommended schemas (Org, Breadcrumbs) present.")
                else:
                    record("WARN", "index.html Schema", f"Recommended schemas missing: {missing_rec}")
            else:
                record("FAIL", "index.html Schema", "No JSON-LD structured data found in index.html!")

    # 4. Target Keyword Presence Check
    index_content = open("index.html").read().lower()
    target_keywords = [
        "bpsc tre 4.0 computer science",
        "bpsc computer teacher pyq",
        "bpsc tre mock test",
        "computer science practice questions"
    ]
    print("\n--- TARGET KEYWORD COVERAGE CHECK ---")
    for kw in target_keywords:
        cnt = index_content.count(kw)
        if cnt >= 2:
            record("PASS", "Keyword Coverage", f"Target keyword '{kw}' found {cnt} times.")
        elif cnt == 1:
            record("WARN", "Keyword Coverage", f"Target keyword '{kw}' found only 1 time.")
        else:
            record("FAIL", "Keyword Coverage", f"Target keyword '{kw}' NOT FOUND in page content!")

    print("\n" + "=" * 70)
    print(f"  📊 AUDIT SUMMARY: {passed_checks} PASSED | {warning_checks} WARNINGS | {failed_checks} FAILED")
    print("=" * 70)

if __name__ == "__main__":
    run_audit()
