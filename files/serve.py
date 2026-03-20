import http.server
import socketserver
import sys

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.jsx': 'application/javascript',
    '.js': 'application/javascript',
})

print(f"Starting server on port {PORT} with JSX support...")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
