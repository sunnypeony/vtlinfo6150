# Project Structure Plan

## 📁 Directory Structure

```
final/
├── public/
│   └── assets/              # Static resources (images, icons, etc.)
│       └── images/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── SkipLink/
│   │       ├── SkipLink.jsx
│   │       └── SkipLink.css
│   │
│   ├── pages/              # SPA page components (at least 3)
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.css
│   │   ├── AboutPage/
│   │   │   ├── AboutPage.jsx
│   │   │   └── AboutPage.css
│   │   └── ContactPage/    # Or other pages
│   │       ├── ContactPage.jsx
│   │       └── ContactPage.css
│   │
│   ├── features/           # Optional feature components (at least 5)
│   │   ├── Accordion/
│   │   │   ├── Accordion.jsx
│   │   │   └── Accordion.css
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.css
│   │   ├── Carousel/
│   │   │   ├── Carousel.jsx
│   │   │   └── Carousel.css
│   │   ├── Form/           # Complex form
│   │   │   ├── Form.jsx
│   │   │   └── Form.css
│   │   └── Gallery/        # Filter/sort gallery
│   │       ├── Gallery.jsx
│   │       └── Gallery.css
│   │
│   ├── styles/             # Global style files (multiple CSS files)
│   │   ├── variables.css   # CSS variables (colors, fonts, etc.)
│   │   ├── reset.css       # CSS reset
│   │   ├── typography.css  # Typography styles
│   │   └── layout.css      # Layout styles
│   │
│   ├── utils/              # Utility functions
│   │   └── validation.js   # Form validation utilities
│   │
│   ├── assets/             # Other resources
│   │   └── (if needed in src)
│   │
│   ├── App.jsx             # Main app component (handles routing/navigation)
│   ├── App.css             # App-level styles
│   ├── main.jsx            # Entry file
│   └── index.css           # Root styles
│
├── licenses.txt            # Image license information
├── package.json
├── vite.config.js
└── index.html
```

## 🎯 Structure Description

### components/ - Reusable Components
- **Header**: Site header (Logo, navigation, etc.)
- **Navigation**: Main navigation component
- **Footer**: Footer
- **SkipLink**: Accessibility skip link

### pages/ - SPA Pages
At least 3 page components are required, each page:
- Separate `.jsx` file
- Separate `.css` file
- Uses semantic HTML

### features/ - Optional Features
Need to implement at least 5 optional features, for example:
1. **Dropdown Navigation Menu** - Dropdown navigation menu
2. **Accordion/Tabs** - Accordion/Tabs
3. **Theme Selection** - Theme switching (light/dark)
4. **Cards/Panels** - Card/panel display
5. **Carousel** - Image carousel
6. **Gallery** - Filterable/sortable gallery
7. **Complex Form** - Complex form interactions
8. **Modal Form** - Modal form

### styles/ - Global Styles
According to requirements, CSS files need:
- **Multiple files**: Cannot have only one CSS file
- **Well organized**: Easy to find styles for corresponding elements
- **Use class selectors**: Unless it's a global default style or unique element

## ✅ Requirements Checklist

### Component Requirements
- [x] Each component in separate `.jsx` file
- [x] Component filename matches component name (MixedCase)
- [x] Each component has corresponding `.css` file

### CSS Requirements
- [x] CSS files split into multiple files
- [x] CSS files well organized
- [x] Use kebab-case or BEM naming
- [x] Semantic class names
- [x] Do not use CSS Modules or CSS-in-JS
- [x] Do not use `style` attribute

### Page Requirements
- [x] At least 3 "pages" (SPA routing)
- [x] Navigation system
- [x] At least 1 form with validation
- [x] Conditional form validation rendering

### Feature Requirements
- [x] At least 5 optional features
- [x] Responsive/adaptive design
- [x] Accessibility requirements (a11y)
