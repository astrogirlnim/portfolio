# Custom Cursor System

This portfolio website features a sophisticated custom cursor system that matches the site's aesthetic and provides visual feedback for different interaction states.

## Features

### Cursor States

1. **Default State**: A subtle pink/magenta circle that follows the mouse
2. **Hover State**: Larger ring with glow effect when hovering over interactive elements
3. **Loading State**: Animated spinning cursor with pulse effect during loading operations
4. **Text State**: Vertical line cursor when hovering over text input fields

### Visual Design

- **Color Scheme**: Uses CSS custom properties that adapt to light/dark themes
  - Primary: Pink/magenta tone (HSL 340°)
  - Secondary: Shifted pink tones (HSL 320°)
  - Accent: Purple tones (HSL 300°)
- **Animations**: Smooth transitions with CSS transforms and animations
- **Blend Mode**: Uses `mix-blend-mode: difference` for visibility on all backgrounds

### Technical Implementation

#### CSS (app/globals.css)
- Custom cursor styles with CSS variables for theme support
- Disabled default cursors with `cursor: none !important`
- Keyframe animations for loading and pulse effects

#### React Component (components/retro-cursor.tsx)
- Tracks mouse position and element interactions
- Automatically detects cursor state based on element under cursor
- Handles loading states through custom events
- Provides smooth transitions and error handling

## Usage

### Automatic Behavior
The cursor automatically changes state based on the element being hovered:

- **Interactive elements**: Links, buttons, elements with `.hover-glow` class
- **Text inputs**: Text fields, textareas, contenteditable elements
- **Loading elements**: Elements with `[data-loading="true"]` or `.loading` class

### Manual Control

#### Trigger Loading State
```javascript
import { triggerLoadingState } from "@/components/retro-cursor"

// Show loading cursor for 2 seconds
triggerLoadingState()
```

#### Custom Events
```javascript
// Start loading state
document.dispatchEvent(new CustomEvent('loading-start'))

// End loading state
document.dispatchEvent(new CustomEvent('loading-end'))
```

#### CSS Classes for Elements
```html
<!-- Force hover state -->
<div class="cursor-hover">Hover cursor</div>

<!-- Force loading state -->
<div class="cursor-loading">Loading cursor</div>

<!-- Glow effect with hover cursor -->
<button class="hover-glow">Interactive button</button>
```

## Customization

### Colors
Modify cursor colors by updating CSS variables in `app/globals.css`:

```css
:root {
  --cursor-primary: 340 30% 65%;    /* Main cursor color */
  --cursor-secondary: 320 25% 60%;  /* Inner dot color */
  --cursor-accent: 300 35% 75%;     /* Loading accent */
  --cursor-glow: 340 30% 65%;       /* Glow effect color */
}
```

### Animation Timing
Adjust transition speeds in the `.custom-cursor` class:

```css
.custom-cursor {
  transition: all 0.15s ease-out; /* Modify timing here */
}
```

### States
Add new cursor states by:
1. Adding CSS classes in `globals.css`
2. Extending the `CursorState` type in `retro-cursor.tsx`
3. Adding detection logic in `updateCursorState`

## Browser Support

- Modern browsers with CSS custom properties support
- Fallback to default cursor on unsupported browsers
- Graceful degradation for mobile devices (cursor hidden)

## Performance

- Uses `passive: true` for mouse events
- Minimal DOM manipulation
- CSS-based animations for smooth performance
- Automatic cleanup of event listeners 