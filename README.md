# 🚗 Hydrogen Motor - Educational Website

## 📝 Description
Educational web platform about hydrogen engines with integrated chatbot. The site offers:
- Interactive hydrogen engine interface
- Specialized Chatbot (Qwen model)
- Consumption calculator
- Educational games about fuel cells

## 🛠️ Prerequisites
- Node.js v18.19.1 or higher
- OpenRouter API key (for chatbot)
- Modern web browser

## 🚀 Installation and Launch

### Simple Method (Recommended)
1. Double-click on `setup_and_launch.bat`
2. Follow on-screen instructions
3. Enter your OpenRouter API key when prompted

### Manual Method
```bash
# Install dependencies
npm install express cors axios dotenv

# Create .env file with your key
echo OPENROUTER_API_KEY=your-api-key > .env

# Launch server
node js/server.js
```

## 📋 Features

### 🤖 Intelligent Chatbot (Qwen)
- Real-time assistance
- Specialized in hydrogen engines
- Intuitive interface

### 🔄 Interactive Engine
- Component visualization
- Clickable areas
- Detailed explanations

### 📊 Consumption Calculator
- Gasoline vs hydrogen comparison
- Cost estimation
- Custom vehicle profiles

### 🎮 Educational Section
- Drag & drop game
- Explanation cards
- Educational content

## 📁 Project Structure
```
Hydrogen_Motor/
├── assets/
│   └── img/           # Images and resources
├── css/              # Styles
├── js/               # Scripts
│   ├── server.js     # Chatbot backend
│   ├── chatbot.js    # Chatbot interface
│   └── calculator.js # Calculator logic
├── *.html           # Site pages
└── setup_and_launch.bat # Launch script
```

## 🔧 Technologies Used
- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express
- API: OpenRouter (Qwen model)
- Dependencies: axios, cors, dotenv

## 👥 Authors
- Marcel Brian
- Pablo Ferrera

## 📄 License
© 2025 EFREI Paris - All rights reserved

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the project
2. Create a branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request