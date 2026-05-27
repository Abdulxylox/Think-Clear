# ThinkClear - Mobile App for Critical Thinking

## Overview

ThinkClear is an interactive React Native mobile application designed to teach critical thinking, clear communication, and concise expression. Available on both iOS and Android through Expo.

## Features

### 📚 Interactive Lessons
- 4 comprehensive lessons covering:
  - Identifying Logical Fallacies
  - The Art of Clear Writing
  - Evidence Evaluation
  - Bias Recognition
- Progressive difficulty levels (Beginner → Intermediate → Advanced)
- Rich content with key points and real-world examples
- Lesson completion tracking

### 🎯 Quiz System
- Multiple-choice quizzes with detailed explanations
- Real-time scoring and progress tracking
- Review section to learn from mistakes
- Score history and performance analytics

### 🏋️ Practical Exercises
- Multiple exercise types:
  - Fallacy identification
  - Sentence rewriting for clarity
  - Source credibility evaluation
  - Argument analysis
- Guided feedback and explanations
- Progress tracking

### 📊 Progress Dashboard
- Home screen with key statistics
- Streak tracking for daily consistency
- Overall performance score
- Progress visualization
- Achievement badges

### 👤 User Profile
- Comprehensive statistics dashboard
- Achievement system with badges
- Settings and preferences
- Data reset option
- About section

## Project Structure

```
think-clear/
├── App.js                          # Main app entry point
├── package.json                    # Dependencies
├── src/
│   ├── screens/                    # Screen components
│   │   ├── HomeScreen.js          # Dashboard
│   │   ├── LessonScreen.js        # Lessons list
│   │   ├── LessonDetailScreen.js  # Lesson content
│   │   ├── QuizScreen.js          # Quiz interface
│   │   ├── ExerciseScreen.js      # Exercise interface
│   │   └── ProfileScreen.js       # User profile
│   ├── services/                   # Business logic
│   │   └── StorageService.js      # Local data management
│   ├── data/                       # Content data
│   │   └── contentData.js         # Lessons, quizzes, exercises
│   └── utils/                      # Helper functions
│       └── helpers.js             # Utility functions
└── node_modules/                   # Dependencies
```

## Installation

### Prerequisites
- Node.js 14+ and npm
- Expo CLI: `npm install -g expo-cli`
- iOS: Xcode (for iOS simulator)
- Android: Android Studio (for Android emulator)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdulxylox/Think-Clear.git
   cd think-clear
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the app**
   ```bash
   npm start
   ```

4. **Run on device/emulator**
   - **iOS**: Press `i` to open iOS simulator
   - **Android**: Press `a` to open Android emulator
   - **Web**: Press `w` to open in browser (limited features)

## Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation (bottom tabs + stack)
- **State Management**: React hooks + AsyncStorage
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons (Ionicons)
- **Storage**: AsyncStorage for local data persistence

## Key Components

### HomeScreen
Displays user dashboard with:
- Current streak and overall score
- Learning progress visualization
- Featured lesson
- Quick action buttons
- Daily tip

### LessonScreen
Shows list of lessons with:
- Difficulty filter
- Lesson cards with metadata
- Completion indicators
- Navigation to lesson details

### LessonDetailScreen
Provides:
- Full lesson content
- Key points with bullet list
- Real-world examples
- Completion button
- Quiz launch button

### QuizScreen
Features:
- Progress bar
- Multiple-choice questions
- Answer review with explanations
- Score calculation
- Retake functionality

### ExerciseScreen
Includes:
- Exercise selection modal
- Multiple exercise types
- Real-time feedback
- Completion tracking

### ProfileScreen
Shows:
- User statistics
- Achievement badges
- Settings and preferences
- About information
- Data management

## Data Structure

### User Data
```javascript
{
  userId: string,
  createdAt: ISO string,
  lessonsCompleted: { [lessonId]: boolean },
  exercisesCompleted: { [exerciseId]: boolean },
  quizScores: { [quizId]: { score: number, timestamp: ISO string } },
  currentStreak: number,
  overallScore: number,
  lastActivityDate: ISO string
}
```

### Lesson Structure
```javascript
{
  id: string,
  title: string,
  category: string,
  description: string,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  readTime: number,
  keyPoints: string[],
  fullContent: string,
  examples: { title: string, description: string }[]
}
```

## Scoring & Progress

- **Quiz Scoring**: Percentage based on correct answers
- **Overall Score**: Average of all quiz scores
- **Progress**: Lessons completed / Total lessons
- **Achievements**: Unlocked based on activity milestones
- **Streak**: Consecutive days of activity

## Customization

### Add New Lessons
Edit `src/data/contentData.js` and add to `lessonsData` array:
```javascript
{
  id: 'lesson_5',
  title: 'Your Title',
  category: 'Category',
  description: 'Description',
  difficulty: 'beginner',
  readTime: 10,
  keyPoints: [...],
  fullContent: 'Content',
  examples: [...]
}
```

### Modify Colors
Update the `COLORS` object in any screen component:
```javascript
const COLORS = {
  background: '#111827',
  surface: '#1f2937',
  primary: '#3b82f6',
  // ... more colors
};
```

### Add Achievements
Edit `ProfileScreen.js` to add new achievement conditions in the achievements section.

## Future Enhancements

- [ ] Backend integration for cloud sync
- [ ] User authentication
- [ ] Leaderboards and social features
- [ ] More content (lessons, exercises, quizzes)
- [ ] Spaced repetition system
- [ ] Offline mode improvements
- [ ] Push notifications for reminders
- [ ] Advanced analytics
- [ ] Gamification (points, levels, badges)
- [ ] Export progress reports

## API Integration Ready

The app is structured to support backend integration:
1. Replace AsyncStorage calls with API calls in StorageService.js
2. Add authentication layer
3. Implement real-time sync
4. Add user accounts and cloud storage

## Performance Tips

- App uses AsyncStorage for fast local access
- FlatList for efficient list rendering
- React Navigation for smooth transitions
- Memoization ready for optimization

## Troubleshooting

### Expo not found
```bash
npm install -g expo-cli
```

### Dependencies issue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Simulator not opening
- iOS: Ensure Xcode is installed
- Android: Ensure Android Studio emulator is running

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - Feel free to use this project for personal or commercial use.

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Include device type, OS version, and error messages

## Author

**Abdulxylox** - [GitHub Profile](https://github.com/Abdulxylox)

---

**Happy Learning! 🚀📚**
