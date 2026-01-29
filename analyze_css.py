# -*- coding: utf-8 -*-
import sys

# Read the file as binary first to check for encoding issues
with open(r'c:\Users\User\Desktop\gravity-breaker\src\styles\contact.css', 'rb') as f:
    binary_content = f.read()

# Try to decode
try:
    content = binary_content.decode('utf-8')
except:
    content = binary_content.decode('utf-8', errors='replace')

lines = content.split('\n')

print(f"Total lines: {len(lines)}")
print(f"File size: {len(binary_content)} bytes")
print()

# Check lines around 624
start = 610
end = 640

for i in range(start-1, min(end, len(lines))):
    line = lines[i]
    line_num = i + 1
    
    # Show line number, length, and content (first 80 chars)
    display = line[:80] if len(line) > 80 else line
    print(f"{line_num:3} ({len(line):3} chars): {display}")
    
    # Show special characters
    if any(ord(c) < 32 and c not in '\r\n\t' for c in line):
        print(f"     WARNING: Contains control characters!")
        print(f"     Bytes: {line.encode('utf-8')[:50]}")
