# Professional Resume React Application

![Resume Screenshot](./screenshot.png)

A modern, responsive resume/CV application built with React that features a professional layout with a profile picture in the top-left corner.

## Features

- **Professional Design**: Clean, modern layout with proper spacing and typography
- **Profile Picture**: Circular profile image in the top-left corner
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Well-Organized Sections**:
  - Contact information with icons
  - Professional summary
  - Work experience with achievements
  - Education background
  - Technical skills with categorized tags
  - Project highlights
  - Language proficiency
- **Print-Friendly**: CSS optimized for printing to PDF

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/resume-app.git
cd resume-app
```

2. Install dependencies:
```bash
npm install
```

3. Add your profile image:
- Place your image file in `src/components/` (e.g., `profile.jpg`)
- Update the import in `Resume.jsx` to reference your image:
```jsx
import profileImage from './profile.jpg';
```

## Customization

1. **Personal Information**:
   - Update the personal details in `Resume.jsx` (name, title, contact info)
   - Modify the professional summary text

2. **Experience & Education**:
   - Edit the `experience` and `education` arrays in `Resume.jsx`
   - Add or remove items as needed

3. **Skills & Projects**:
   - Update the skills tags in the skills section
   - Modify the projects list with your own projects

4. **Styling**:
   - Colors can be changed in `Resume.css` by modifying the CSS variables
   - Font sizes and spacing can be adjusted in the CSS file

## Running the Application

Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Printing to PDF

1. Open the resume in your browser
2. Use the browser's print function (Ctrl+P or Cmd+P)
3. Select "Save as PDF" as the destination
4. Adjust margins and scale as needed

## Dependencies

- React 18+
- Font Awesome (for icons)
- Google Fonts (Roboto and Open Sans)

## Folder Structure

```
resume-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Resume.jsx
│   │   ├── Resume.css
│   │   └── profile.jpg (your profile image)
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## License

This project is open source and available under the [MIT License](./LICENSE).