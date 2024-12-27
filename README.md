# FAQ Component for WordPress

A modern, accessible FAQ component for WordPress with CDN delivery and local fallback support.

## Features

- 🚀 CDN-first approach with local fallback
- 🎨 Clean, modern design
- ♿ Fully accessible
- 📱 Responsive layout
- 🔍 SEO-friendly with Schema markup
- ⌨️ Keyboard navigation support
- 🔄 Smooth animations
- 🎯 Easy integration with WordPress

## Installation

### Via CDN (Recommended)

Add to your WordPress theme's `functions.php`:

```php
// Include the FAQ assets loading function
require_once get_stylesheet_directory() . '/inc/faq-component.php';
```

### Manual Installation

1. Download the latest release
2. Copy the assets to your theme directory:
   ```
   your-theme/
   ├── assets/
   │   ├── css/
   │   │   └── faq-styles.css
   │   └── js/
   │       └── faq-script.js
   └── inc/
       └── faq-component.php
   ```

## Usage

```php
// In your template or page
echo do_shortcode('[faq]');
```

Or use the Divi Code Module and paste the HTML structure.

## Configuration

You can customize the appearance by overriding CSS variables:

```css
:root {
  --faq-text-color: #333;
  --faq-border-color: #eee;
  /* Add other variables */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (with fallbacks)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for details.

## Credits

- Icons from [Lucide](https://lucide.dev/)
- CDN hosting by [jsDelivr](https://www.jsdelivr.com/)