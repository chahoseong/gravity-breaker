# Common Components List

Based on the unified architecture and page requirements, the following components will be implemented as reusable UI elements.

## 1. Global Navigation & Layout
- **Header (NavBar)**
    - Logo integration
    - Navigation Links (Home, About, Team, Contact)
    - Mobile Menu Toggle (Hamburger)
- **Footer**
    - Social Media Icons
    - Office Address Info
    - Copyright text

## 2. Interface Elements (Atoms)
- **Buttons (`.btn`)**
    - `Primary Button`: Main Call-to-Action (e.g., "See Tech Specs", "Submit") - Neon Blue
    - `Secondary Button`: Alternative actions (e.g., "Learn More") - Ghost/Outline style
- **Input Fields (`.input-group`)**
    - Text Input (Name, Subject)
    - Email Input
    - Select Dropdown (Inquiry Type)
    - Textarea (Message)
    - Error visuals (Red border/Text)

## 3. Cards & Display Containers (Molecules)
- **Info Card (`.card`)**
    - Used for: News Items, Team Profiles, Core Values
    - Hover effects: Scale up, Glow border
- **Timeline Item**
    - Date marker
    - Event content
    - Connecting line styling
- **Specification Grid Item**
    - Icon/Graphic
    - Label & Value pairs

## 4. Visual Effects
- **Section Headers**
    - Standardized Title styling with gradient text
    - Subtitle styling
- **Loading Spinner**
    - Rocket/Pulse animation for async data loading simulation

## 5. Layout Wrappers
- **Container**: Center-aligned max-width wrapper
- **Grid System**: CSS Grid/Flexbox primitives for responsive layout
