# Terminal Style Portfolio Template

A modern, interactive portfolio website with a terminal-inspired design. Built with HTML, CSS, and vanilla JavaScript, this website features a unique terminal-style interface that displays professional information in an engaging way.

## Quick Start

1. Fork this repository by clicking the "Fork" button at the top right of this page
2. Rename your forked repository to `your-name-website` (e.g., `john-doe-website`)
3. Clone your forked repository:
```bash
git clone https://github.com/YOUR_USERNAME/your-name-website.git
```
4. Navigate to the project directory:
```bash
cd your-name-website
```
5. Open `index.html` in your web browser
6. Customize the content and styling as described below

## Features

- 🖥️ Terminal-style interface with typing animation
- 🎨 Modern, responsive design
- 🌙 Dark theme optimized for readability
- ✨ Interactive hover effects and animations
- 📱 Mobile-friendly layout
- 🔗 Social media integration
- 📧 Contact information display

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Variables and Animations)
- Vanilla JavaScript
- Google Fonts (Roboto and Roboto Mono)

## Customization Guide

### 1. Update Personal Information
Edit the `fullProfile` string in the JavaScript section of the HTML file to update your information:

```javascript
const fullProfile = `
Your Name
Your Tagline
Your Location

## Summary
Your professional summary

## Experience
Your work experience...

## Education
Your education details...
`;
```

### 2. Customize Colors
Modify the colors in the `:root` section of the CSS to match your preferred color scheme:

```css
:root {
    --bg-color: #0a0a0a;        /* Background color */
    --text-color: #e0e0e0;      /* Main text color */
    --accent-color: #4CAF50;    /* Accent color */
    --terminal-green: #00ff00;  /* Terminal text color */
    --terminal-blue: #87CEFA;   /* Section title color */
}
```

### 3. Update Contact Links
Modify the contact links section in the HTML:

```html
<div class="contact-links">
    <a href="mailto:your.email@example.com">✉ Email</a>
    <a href="https://www.linkedin.com/in/your-profile" target="_blank">🔗 LinkedIn</a>
    <a href="https://blog.krlakshmikanth.com/" target="_blank">📝 Blog</a>
    <!-- Add more social links as needed -->
</div>
```

## Browser Support

The website is compatible with all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

This portfolio template was created by [Lakshmikanth Karur Rajamani](https://github.com/krlakshmikanth). Feel free to fork and customize it for your own use! 