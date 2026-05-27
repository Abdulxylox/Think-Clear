# ThinkClear - Critical Thinking Mobile App

A comprehensive React Native mobile application designed to teach critical thinking, clear communication, and concise expression through interactive lessons, quizzes, and practical exercises.

## 🎯 Features

### 📚 Interactive Lessons
- Structured curriculum covering critical thinking concepts
- Multiple difficulty levels (Beginner → Intermediate → Advanced)
- Progress tracking for each lesson
- Rich content with formatted text and examples

### 🎯 Quiz System
- Multiple-choice questions with instant feedback
- Detailed explanations for correct and incorrect answers
- Score tracking and performance analytics
- Adaptive difficulty based on user performance

### 🏋️ Practical Exercises
- Interactive exercises reinforcing lesson concepts
- Various exercise types:
  - **Fallacy Identification**: Learn to spot logical fallacies
  - **Clarity Rewriting**: Improve sentence clarity and conciseness
  - **Argument Evaluation**: Analyze and evaluate arguments
- Step-by-step guidance with hints

### 📊 Progress Tracking
- Dashboard with key statistics
- Activity streaks and milestones
- Lesson completion percentage
- Quiz score history
- Achievement system

### 💾 Offline-First Design
- All data stored locally with AsyncStorage
- Works without internet connection
- Automatic data persistence

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI installed globally (`npm install -g expo-cli`)

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdulxylox/Think-Clear.git
cd think-clear

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Devices

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📁 Project Structure

```
think-clear/
├── src/
│   ├── screens/           # Screen components
│   │   ├── HomeScreen.js
│   │   ├── LessonScreen.js
│   │   ├── LessonDetailScreen.js
│   │   ├── QuizScreen.js
│   │   ├── ExerciseScreen.js
│   │   └── ProfileScreen.js
│   ├── navigation/        # Navigation configuration
│   │   └── Navigation.js
│   ├── services/          # Business logic and services
│   │   └── StorageService.js
│   ├── data/              # Static content data
│   │   └── contentData.js
│   ├── styles/            # Global styles and themes
│   │   └── theme.js
│   ├── utils/             # Utility functions
│   │   └── helpers.js
│   ├── components/        # Reusable components
│   │   ├── LessonCard.js
│   │   ├── QuizCard.js
│   │   ├── ProgressBar.js
│   │   └── StatCard.js
│   └── App.js             # Root component
├── assets/                # Images and static assets
├── app.json               # Expo configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## 📖 Content Structure

### Lessons
Each lesson includes:
- Title and description
- Category (e.g., Logic, Communication, Decision-Making)
- Difficulty level (beginner, intermediate, advanced)
- Rich content with bullet points and examples
- Associated quiz questions

### Quizzes
Each quiz contains:
- Multiple-choice questions
- Detailed explanations for each answer
- Correct answer feedback
- Score calculation

### Exercises
Each exercise provides:
- Clear instructions
- Practice scenarios
- Guided solutions
- Feedback mechanism

## 🎨 Customization

### Colors and Theme
Edit `src/styles/theme.js` to customize:
- Primary colors
- Secondary colors
- Backgrounds
- Text colors

### Adding Content
To add new lessons, quizzes, or exercises:

1. Open `src/data/contentData.js`
2. Add content following the existing structure
3. Export the new data
4. Reference in relevant screens

Example:
```javascript
const newLesson = {
  id: 'lesson-5',
  title: 'New Topic',
  category: 'Logic',
  difficulty: 'beginner',
  duration: '10 min',
  content: 'Your rich content here...',
  quizId: 'quiz-5'
};
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 📱 Mobile Platforms

### iOS
- Minimum iOS version: 13.0
- Recommended: Latest iOS version
- Device compatibility: iPhone 6s and later

### Android
- Minimum Android version: 8.0 (API level 26)
- Recommended: Android 12+
- Device compatibility: Most modern Android devices

## 🔐 Data Privacy

- All user data is stored locally on the device
- No data is sent to external servers
- Users have full control over their data
- Clear option to reset all data in settings

## 🚀 Deployment

### Build APK (Android)
```bash
eas build --platform android --local
```

### Build IPA (iOS)
```bash
eas build --platform ios --local
```

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Coding Guidelines

See [CODING_GUIDELINES.md](./CODING_GUIDELINES.md) for detailed development standards.

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Device and OS information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- React Native and Expo communities
- Critical thinking educators and researchers
- All contributors and users

## 📧 Contact

For questions or suggestions, please reach out to the project maintainers.

---

**Happy Learning! Master the art of thinking clearly.** 🧠✨
