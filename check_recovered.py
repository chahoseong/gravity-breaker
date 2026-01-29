# -*- coding: utf-8 -*-

# Check the recovered file
with open(r'c:\Users\User\Desktop\gravity-breaker\contact_recovered.css', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

print(f"Recovered file - Total lines: {len(lines)}")
print("\n=== Lines 620-630 ===")
for i in range(619, min(631, len(lines))):
    print(f"{i+1:3}: {lines[i]}")

# Check if it looks valid
if len(lines) > 620:
    print("\n✓ File looks valid!")
    print(f"Line 624: {lines[623]}")
else:
    print("\n✗ File might still be damaged")
