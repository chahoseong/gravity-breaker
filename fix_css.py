# -*- coding: utf-8 -*-

# Read the damaged file
with open(r'c:\Users\User\Desktop\gravity-breaker\src\styles\contact.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Show problematic area
lines = content.split('\n')

with open(r'c:\Users\User\Desktop\gravity-breaker\css_debug.txt', 'w', encoding='utf-8') as f:
    f.write(f"Total lines: {len(lines)}\n\n")
    f.write("=== Lines 610-640 ===\n")
    for i in range(609, min(640, len(lines))):
        f.write(f"{i+1:3}: {lines[i]}\n")

print("Debug output saved to css_debug.txt")
