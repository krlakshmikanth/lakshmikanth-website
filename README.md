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
- 📊 Analytics integration (Google Analytics & Microsoft Clarity)

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Variables and Animations)
- Vanilla JavaScript
- Google Fonts (Roboto and Roboto Mono)
- Google Analytics
- Microsoft Clarity
- GitHub Actions for CI/CD

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

### 4. Set Up Analytics
To enable analytics tracking:

1. Get your tracking IDs:
   - Google Analytics: Create a property in Google Analytics 4 and get your Measurement ID
   - Microsoft Clarity: Create a project in Clarity and get your Project ID

2. Add GitHub Secrets:
   - Go to your repository settings
   - Navigate to Secrets and Variables > Actions
   - Add two new secrets:
     - `CLARITY_ID`: Your Microsoft Clarity project ID
     - `GA_MEASUREMENT_ID`: Your Google Analytics Measurement ID

3. The GitHub Actions workflow will automatically inject these IDs during build.

### 5. Set Up Favicon and Social Share Images

1. Create an `assets` directory in your project root:
```bash
mkdir assets
```

2. Generate favicon files:
   - Create a 512x512 PNG image with your initials (e.g., "LK")
   - Use a favicon generator (like [Favicon Generator](https://favicon.io/favicon-generator/))
   - Place the generated files in the `assets` directory:
     - favicon-16x16.png
     - favicon-32x32.png
     - apple-touch-icon.png
     - android-chrome-192x192.png
     - android-chrome-512x512.png

3. Create social share image:
   - Create a 1200x630 PNG image for social media sharing
   - Include your name, title, and a professional background
   - Save as `social-share.png` in the `assets` directory

4. Update the URLs in `index.html`:
   - Replace `krlakshmikanth.github.io/lakshmikanth-website` with your actual domain
   - Update the image paths if you use different filenames

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

This portfolio template was created by [Lakshmikanth Karur Rajamani](https://github.com/krlakshmikanth). 
Feel free to fork and customize it for your own use! 
