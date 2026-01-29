#!/usr/bin/env python3
"""
Simple HTTP server with SPA (Single Page Application) support.
Serves index.html for all routes that don't match actual files.
"""
import http.server
import socketserver
import os

PORT = 8000

class SPAHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP request handler with SPA support."""
    
    def do_GET(self):
        """Handle GET requests with SPA routing."""
        path = self.translate_path(self.path)
        
        # If it's a SPA route (no extension and doesn't exist)
        if not os.path.exists(path) and '.' not in os.path.basename(self.path):
            self.path = '/index.html'
        elif os.path.isdir(path):
            # If path is a directory, serve index.html if exists
            index_path = os.path.join(path, 'index.html')
            if os.path.exists(index_path):
                self.path = '/index.html' if path.endswith(os.getcwd()) else self.path + '/index.html'

        return super().do_GET()

    def do_HEAD(self):
        """Handle HEAD requests with SPA routing."""
        path = self.translate_path(self.path)
        if not os.path.exists(path) and '.' not in os.path.basename(self.path):
            self.path = '/index.html'
        return super().do_HEAD()

def run_server():
    """Run the HTTP server."""
    with socketserver.TCPServer(("", PORT), SPAHTTPRequestHandler) as httpd:
        print(f"🚀 Gravity Breaker Server (SPA Mode)")
        print(f"📡 http://localhost:{PORT}/")
        print(f"✨ SPA routing enabled")
        print(f"\nPress Ctrl+C to stop\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Server stopped")

if __name__ == "__main__":
    run_server()
