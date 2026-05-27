import AsyncStorage from '@react-native-async-storage/async-storage';
import { lessonsData, quizzesData, exercisesData } from '../data/contentData';

const STORAGE_KEYS = {
  USER_DATA: 'user_data',
  LESSONS: 'lessons',
  QUIZZES: 'quizzes',
  EXERCISES: 'exercises',
};

export const StorageService = {
  // Initialize user data
  initializeUser: async () => {
    try {
      const existingUser = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      if (!existingUser) {
        const initialUserData = {
          userId: Date.now().toString(),
          createdAt: new Date().toISOString(),
          lessonsCompleted: {},
          exercisesCompleted: {},
          quizScores: {},
          currentStreak: 0,
          overallScore: 0,
          lastActivityDate: null,
        };
        await AsyncStorage.setItem(
          STORAGE_KEYS.USER_DATA,
          JSON.stringify(initialUserData)
        );
      }
      await AsyncStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessonsData));
      await AsyncStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(quizzesData));
      await AsyncStorage.setItem(STORAGE_KEYS.EXERCISES, JSON.stringify(exercisesData));
    } catch (error) {
      console.error('Error initializing user:', error);
    }
  },

  // Get user data
  getUserData: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  // Get lessons
  getLessons: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.LESSONS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting lessons:', error);
      return [];
    }
  },

  // Get quizzes
  getQuizzes: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.QUIZZES);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting quizzes:', error);
      return [];
    }
  },

  // Get exercises
  getExercises: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.EXERCISES);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting exercises:', error);
      return [];
    }
  },

  // Mark lesson complete
  markLessonComplete: async (lessonId) => {
    try {
      const userData = await StorageService.getUserData();
      userData.lessonsCompleted[lessonId] = true;
      userData.lastActivityDate = new Date().toISOString();
      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_DATA,
        JSON.stringify(userData)
      );
    } catch (error) {
      console.error('Error marking lesson complete:', error);
    }
  },

  // Save quiz score
  saveQuizScore: async (quizId, score) => {
    try {
      const userData = await StorageService.getUserData();
      userData.quizScores[quizId] = {
        score,
        timestamp: new Date().toISOString(),
      };
      // Calculate overall score
      const scores = Object.values(userData.quizScores).map(s => s.score);
      userData.overallScore = Math.round(
        scores.reduce((a, b) => a + b, 0) / scores.length
      );
      userData.lastActivityDate = new Date().toISOString();
      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_DATA,
        JSON.stringify(userData)
      );
    } catch (error) {
      console.error('Error saving quiz score:', error);
    }
  },

  // Save exercise completion
  saveExerciseCompletion: async (exerciseId) => {
    try {
      const userData = await StorageService.getUserData();
      userData.exercisesCompleted[exerciseId] = true;
      userData.lastActivityDate = new Date().toISOString();
      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_DATA,
        JSON.stringify(userData)
      );
    } catch (error) {
      console.error('Error saving exercise completion:', error);
    }
  },

  // Reset user data
  resetUserData: async () => {
    try {
      const initialUserData = {
        userId: Date.now().toString(),
        createdAt: new Date().toISOString(),
        lessonsCompleted: {},
        exercisesCompleted: {},
        quizScores: {},
        currentStreak: 0,
        overallScore: 0,
        lastActivityDate: null,
      };
      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_DATA,
        JSON.stringify(initialUserData)
      );
    } catch (error) {
      console.error('Error resetting user data:', error);
    }
  },
};
