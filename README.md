#Uranus: Web-Based 3D Modeler
Uranus is an open-source, web-based 3D modeling prototype built with JavaScript and Three.js. The project aims to provide users with an accessible foundation for creating, editing, and viewing 3D models directly in their browser. Designed for rapid prototyping, demos, and future expansion into a full-featured modeling tool.

Features
Renders interactive 3D objects (cube demo by default)
Simple UI for basic model manipulation
Expandable architecture for geometries, controls, and import/export support
Responsive design, works in any modern browser
Getting Started
Clone the repository
git clone https://github.com/Crabsquid936/Uranus.git
cd Uranus
Install dependencies
npm install
Start development server
npm start
Open your browser at http://localhost:3000 to view the app.
Project Structure
Uranus/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── main.js             # Entry point, initializes scene
│   ├── renderer.js         # Rendering logic (Three.js)
│   ├── model.js            # Model data structures
│   ├── ui.js               # UI controls
├── assets/
│   └── models/             # Sample 3D models
├── package.json            # npm dependencies/scripts
├── README.md               # Project documentation
├── LICENSE                 # License information
└── .gitignore              # Ignore node_modules/etc.
Contributing
Pull requests are welcome! If you have suggestions for features or fixes, feel free to open an issue or submit a PR. For major changes, please open an issue first to discuss what you’d like to change.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Future Plans / TODO
Support for importing/exporting common 3D model formats
Add basic transformation tools (move, scale, rotate)
Implement additional geometric primitives
UI/UX improvements for advanced user controls
Model saving and sharing functionality
