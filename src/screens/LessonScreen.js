import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StorageService } from '../services/StorageService';
import { getDifficultyColor } from '../utils/helpers';

const COLORS = {
  background: '#111827',
  surface: '#1f2937',
  primary: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  text: '#f3f4f6',
  textSecondary: '#9ca3af',
};

const LessonScreen = ({ navigation }) => {
  const [lessons, setLessons] = useState([]);
  const [completedLessons, setCompletedLessons] = useState({});
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  useEffect(() => {
    const fetchLessons = async () => {
      const allLessons = await StorageService.getLessons();
      const userData = await StorageService.getUserData();
      setLessons(allLessons);
      setCompletedLessons(userData.lessonsCompleted);
    };

    const unsubscribe = navigation.addListener('focus', fetchLessons);
    fetchLessons();

    return unsubscribe;
  }, [navigation]);

  const filteredLessons =
    selectedDifficulty === 'all'
      ? lessons
      : lessons.filter((lesson) => lesson.difficulty === selectedDifficulty);

  const renderLessonCard = ({ item }) => {
    const isCompleted = completedLessons[item.id];

    return (
      <TouchableOpacity
        style={styles.lessonCard}
        onPress={() => navigation.navigate('LessonDetail', { lesson: item })}
      >
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleSection}>
            <Text style={styles.lessonTitle}>{item.title}</Text>
            <Text style={styles.lessonCategory}>{item.category}</Text>
          </View>
          {isCompleted && (
            <View style={styles.completedBadge}>
              <Ionicons name="checkmark-circle" size={24} color={COLORS.success} />
            </View>
          )}
        </View>

        <Text style={styles.lessonDescription}>{item.description}</Text>

        <View style={styles.cardFooter}>
          <View
            style={[
              styles.difficultyBadge,
              {
                backgroundColor: `${getDifficultyColor(item.difficulty)}20`,
              },
            ]}
          >
            <Text
              style={[
                styles.difficultyText,
                { color: getDifficultyColor(item.difficulty) },
              ]}
            >
              {item.difficulty.charAt(0).toUpperCase() +
                item.difficulty.slice(1)}
            </Text>
          </View>
          <View style={styles.readTimeContainer}>
            <Ionicons
              name="time"
              size={14}
              color={COLORS.textSecondary}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.readTime}>{item.readTime} min</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lessons</Text>
        <Text style={styles.headerSubtitle}>
          Master critical thinking through our curated lessons
        </Text>
      </View>

      {/* Difficulty Filter */}
      <View style={styles.filterContainer}>
        {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
          <TouchableOpacity
            key={difficulty}
            style={[
              styles.filterButton,
              selectedDifficulty === difficulty && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedDifficulty(difficulty)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedDifficulty === difficulty &&
                  styles.filterButtonTextActive,
              ]}
            >
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lessons List */}
      <FlatList
        data={filteredLessons}
        keyExtractor={(item) => item.id}
        renderItem={renderLessonCard}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 15,
    gap: 10,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  filterButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  lessonCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cardTitleSection: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  lessonCategory: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '500',
  },
  completedBadge: {
    marginLeft: 10,
  },
  lessonDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 12,
    lineHeight: 19,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  readTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readTime: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
});

export default LessonScreen;
