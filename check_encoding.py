# -*- coding: utf-8 -*-
import codecs

# Try different encodings
for encoding in ['utf-8', 'utf-8-sig', 'utf-16', 'cp1252']:
    try:
        with open(r'c:\Users\User\Desktop\gravity-breaker\contact_recovered2.css', 'r', encoding=encoding) as f:
            content = f.read()
        
        lines = content.split('\n')
        print(f"\n✓ Successfully read with {encoding}")
        print(f"Total lines: {len(lines)}")
        
        if len(lines) > 625:
            print("\n=== Lines 620-626 ===")
            for i in range(619, min(627, len(lines))):
                line = lines[i].rstrip()
                print(f"{i+1:3}: {line[:100]}")
        break
    except Exception as e:
        print(f"✗ Failed with {encoding}: {e}")
