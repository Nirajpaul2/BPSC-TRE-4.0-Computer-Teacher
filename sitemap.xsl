<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap — BPSC TRE 4.0 Computer Science Hub</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * {
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            background-color: #0b1120;
            color: #e2e8f0;
            margin: 0;
            padding: 2.5rem 1rem;
            line-height: 1.6;
          }
          .container {
            max-width: 980px;
            margin: 0 auto;
            background: #1e293b;
            border-radius: 12px;
            padding: 2.2rem;
            box-shadow: 0 12px 32px rgba(0,0,0,0.45);
            border: 1px solid #334155;
          }
          .header-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 1.25rem;
            border-bottom: 1px solid #334155;
            padding-bottom: 1.25rem;
          }
          h1 {
            color: #38bdf8;
            font-size: 1.65rem;
            font-weight: 800;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.6rem;
          }
          .badge-live {
            background: rgba(16, 185, 129, 0.18);
            color: #34d399;
            border: 1px solid rgba(16, 185, 129, 0.35);
            padding: 0.3rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 700;
          }
          p.desc {
            color: #94a3b8;
            font-size: 0.92rem;
            margin: 0 0 1.75rem 0;
          }
          .table-wrapper {
            overflow-x: auto;
            border-radius: 8px;
            border: 1px solid #334155;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.88rem;
            text-align: left;
          }
          th {
            background-color: #0f172a;
            color: #38bdf8;
            padding: 0.85rem 1.1rem;
            border-bottom: 2px solid #334155;
            font-weight: 700;
            white-space: nowrap;
          }
          td {
            padding: 0.85rem 1.1rem;
            border-bottom: 1px solid #334155;
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: rgba(56, 189, 248, 0.05);
          }
          a {
            color: #38bdf8;
            text-decoration: none;
            font-weight: 600;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
            color: #7dd3fc;
          }
          .priority-pill {
            display: inline-block;
            padding: 0.2rem 0.55rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.3);
          }
          .footer {
            margin-top: 1.75rem;
            padding-top: 1.25rem;
            border-top: 1px solid #334155;
            font-size: 0.82rem;
            color: #64748b;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header-row">
            <h1>🗺️ BPSC TRE 4.0 XML Sitemap</h1>
            <span class="badge-live">● Google Search Console Ready</span>
          </div>
          <p class="desc">
            This XML Sitemap informs search engines (such as Google and Bing) about the canonical URLs available for indexing on <strong>BPSC TRE 4.0 Computer Science Hub</strong> (<code>https://tre4.agiludic.com</code>).
          </p>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 45%;">URL Location</th>
                  <th style="width: 20%;">Last Modified</th>
                  <th style="width: 18%;">Change Frequency</th>
                  <th style="width: 17%;">Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}" target="_blank" rel="noopener">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <span class="priority-pill">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <div class="footer">
            <span>Verified Domain: <strong>tre4.agiludic.com</strong></span>
            <span>Includes Canonical URLs, Legal Policies &amp; Rich Schema</span>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
