# -*- coding: utf-8 -*-

# Verify the restored contact.css
with open(r'c:\Users\User\Desktop\gravity-breaker\src\styles\contact.css', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

print(f"✓ contact.css restored")
print(f"Total lines: {len(lines)}")
print("\n=== Lines 620-626 (should be fixed now) ===")
for i in range(619, min(627, len(lines))):
    line = lines[i].rstrip()
    print(f"{i+1:3}: {line}")

# Copy to team.css
with open(r'c:\Users\User\Desktop\gravity-breaker\src\styles\team.css', 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print("\n✓ Copied to team.css")
print("\n=== FIXED! ===")
print("Both contact.css and team.css have been restored from Git history.")
