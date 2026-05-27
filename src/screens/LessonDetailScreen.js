import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StorageService } from '../services/StorageService';
import { getDifficultyColor } from '../utils/helpers';

const COLORS = {
  background: '#111827',
  surface: '#1f2937',
  primary: '#3b82f6',
  success: '#10b981',
  text: '#f3f4f6',
  textSecondary: '#9ca3af',
};

const LessonDetailScreen = ({ route, navigation }) => {
  const { lesson } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasQuiz, setHasQuiz] = useState(false);

  useEffect(() => {
    const checkLessonStatus = async () => {
      const userData = await StorageService.getUserData();
      setIsCompleted(userData.lessonsCompleted[lesson.id] || false);
    };
    checkLessonStatus();
  }, [lesson.id]);

  useEffect(() => {
    const checkQuiz = async () => {
      const quizzes = await StorageService.getQuizzes();
      const lessonQuiz = quizzes.find((q) => q.lessonId === lesson.id);
      setHasQuiz(!!lessonQuiz);
    };
    checkQuiz();
  }, [lesson.id]);

  const handleMarkAsCompleted = async () => {
    await StorageService.markLessonComplete(lesson.id);
    setIsCompleted(true);
    Alert.alert('Success', 'Lesson marked as completed!');
  };

  const handleStartQuiz = async () => {
    const quizzes = await StorageService.getQuizzes();
    const lessonQuiz = quizzes.find((q) => q.lessonId === lesson.id);
    if (lessonQuiz) {
      navigation.navigate('Quiz', { quiz: lessonQuiz });
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Lesson Header */}
      <View style={styles.lessonHeader}>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        <Text style={styles.lessonCategory}>{lesson.category}</Text>

        <View style={styles.metadataContainer}>
          <View style={styles.metadataItem}>
            <Ionicons
              name="time"
              size={16}
              color={COLORS.textSecondary}
              style={{ marginRight: 6 }}
            />
            <Text style={styles.metadataText}>{lesson.readTime} min read</Text>
          </View>
          <View
            style={[
              styles.difficultyBadge,
              {
                backgroundColor: `${getDifficultyColor(lesson.difficulty)}20`,
              },
            ]}
          >
            <Text
              style={[
                styles.difficultyText,
                { color: getDifficultyColor(lesson.difficulty) },
              ]}
            >
              {lesson.difficulty.charAt(0).toUpperCase() +
                lesson.difficulty.slice(1)}
            </Text>
          </View>
        </View>
      </View>

      {/* Completion Status */}
      {isCompleted && (
        <View style={styles.completionBanner}>
          <Ionicons
            name="checkmark-circle"
            size={20}
            color={COLORS.success}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.completionText}>Lesson Completed</Text>
        </View>
      )}

      {/* Lesson Content */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.contentText}>{lesson.description}</Text>
      </View>

      {/* Key Points */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Key Points</Text>
        {lesson.keyPoints?.map((point, index) => (
          <View key={index} style={styles.bulletPoint}>
            <View style={styles.bulletCircle} />
            <Text style={styles.bulletText}>{point}</Text>
          </View>
        ))}
      </View>

      {/* Full Content */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Full Content</Text>
        <Text style={styles.contentText}>{lesson.fullContent}</Text>
      </View>

      {/* Examples */}
      {lesson.examples && lesson.examples.length > 0 && (
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Examples</Text>
          {lesson.examples.map((example, index) => (
            <View key={index} style={styles.exampleCard}>
              <Text style={styles.exampleTitle}>{example.title}</Text>
              <Text style={styles.exampleText}>{example.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        {!isCompleted && (
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleMarkAsCompleted}
          >
            <Ionicons name="checkmark" size={20} color="#fff" />
            <Text style={styles.buttonPrimaryText}>
              Mark as Completed
            </Text>
          </TouchableOpacity>
        )}

        {hasQuiz && (
          <TouchableOpacity
            style={[styles.buttonSecondary, !isCompleted && { marginTop: 12 }]}
            onPress={handleStartQuiz}
          >
            <Ionicons name="help-circle" size={20} color={COLORS.primary} />
            <Text style={styles.buttonSecondaryText}>
              Take the Quiz
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  lessonHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surface,
  },
  lessonTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 5,
  },
  lessonCategory: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 12,
  },
  metadataContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metadataText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: '600',
  },
  completionBanner: {
    flexDirection: 'row',
    backgroundColor: `${COLORS.success}20`,
    marginHorizontal: 20,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  completionText: {
    color: COLORS.success,
    fontWeight: '600',
    fontSize: 14,
  },
  contentSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surface,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  bulletCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginRight: 12,
    marginTop: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  exampleCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
  },
  exampleTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  exampleText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonPrimary: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  buttonSecondary: {
    flexDirection: 'row',
    backgroundColor: `${COLORS.primary}10`,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonSecondaryText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default LessonDetailScreen;
