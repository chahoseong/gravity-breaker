# -*- coding: utf-8 -*-

# Read the recovered file with correct encoding
with open(r'c:\Users\User\Desktop\gravity-breaker\contact_recovered2.css', 'r', encoding='utf-16') as f:
    content = f.read()

# Write to both contact.css and team.css with UTF-8 encoding
for target in ['contact.css', 'team.css']:
    target_path = rf'c:\Users\User\Desktop\gravity-breaker\src\styles\{target}'
    with open(target_path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)
    print(f"✓ Updated {target}")

# Verify
lines = content.split('\n')
print(f"\n✓ Total lines: {len(lines)}")
print("\n=== Verification: Lines 620-626 ===")
for i in range(619, min(627, len(lines))):
    line = lines[i].rstrip()
    print(f"{i+1:3}: {line}")
