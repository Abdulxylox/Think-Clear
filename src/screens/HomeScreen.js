import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StorageService } from '../services/StorageService';
import { getProgressPercentage, getDifficultyColor } from '../utils/helpers';

const COLORS = {
  background: '#111827',
  surface: '#1f2937',
  primary: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  text: '#f3f4f6',
  textSecondary: '#9ca3af',
};

const HomeScreen = ({ navigation }) => {
  const [stats, setStats] = useState({
    completedLessons: 0,
    totalLessons: 0,
    currentStreak: 0,
    overallScore: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const userData = await StorageService.getUserData();
      const lessons = await StorageService.getLessons();

      const completedLessons = Object.values(userData.lessonsCompleted).filter(
        (v) => v
      ).length;
      const totalLessons = lessons.length;
      const overallScore = userData.overallScore || 0;
      const currentStreak = userData.currentStreak || 0;

      setStats({
        completedLessons,
        totalLessons,
        currentStreak,
        overallScore,
      });
    };

    const unsubscribe = navigation.addListener('focus', fetchStats);
    fetchStats();

    return unsubscribe;
  }, [navigation]);

  const handleStartLesson = () => {
    navigation.navigate('LessonTab');
  };

  const progressPercent = getProgressPercentage(
    stats.completedLessons,
    stats.totalLessons
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome Back! 👋</Text>
        <Text style={styles.subGreeting}>
          Keep pushing your mind to think clearer
        </Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
            <Ionicons name="flame" size={28} color={COLORS.danger} />
          </View>
          <Text style={styles.statLabel}>Current Streak</Text>
          <Text style={styles.statValue}>{stats.currentStreak}</Text>
          <Text style={styles.statDays}>days</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIconContainer}>
            <Ionicons name="star" size={28} color={COLORS.warning} />
          </View>
          <Text style={styles.statLabel}>Overall Score</Text>
          <Text style={styles.statValue}>{stats.overallScore}%</Text>
          <Text style={styles.statDays}>average</Text>
        </View>
      </View>

      {/* Progress Section */}
      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Learning Progress</Text>
          <Text style={styles.progressPercentage}>
            {progressPercent}% Complete
          </Text>
        </View>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${progressPercent}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {stats.completedLessons} of {stats.totalLessons} lessons completed
        </Text>
      </View>

      {/* Featured Lesson */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Lesson</Text>
        <TouchableOpacity
          style={styles.featuredCard}
          onPress={handleStartLesson}
        >
          <View style={styles.featuredContent}>
            <View>
              <Text style={styles.featuredTitle}>
                Identifying Logical Fallacies
              </Text>
              <Text style={styles.featuredDescription}>
                Learn to spot common logical errors in arguments
              </Text>
              <View style={styles.difficultyBadge}>
                <Text style={styles.difficultyText}>Beginner</Text>
              </View>
            </View>
            <Ionicons
              name="arrow-forward"
              size={24}
              color={COLORS.primary}
              style={styles.featuredArrow}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsSection}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleStartLesson}
          >
            <Ionicons name="book" size={24} color={COLORS.primary} />
            <Text style={styles.actionButtonText}>Browse Lessons</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('ExerciseTab')}
          >
            <Ionicons name="bulb" size={24} color={COLORS.success} />
            <Text style={styles.actionButtonText}>Try Exercises</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Daily Tip</Text>
        <View style={styles.tipCard}>
          <Ionicons
            name="lightbulb"
            size={20}
            color={COLORS.warning}
            style={styles.tipIcon}
          />
          <Text style={styles.tipText}>
            Ask yourself: "Is this conclusion supported by evidence?" before
            accepting any argument.
          </Text>
        </View>
      </View>
    </ScrollView>
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
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 5,
  },
  subGreeting: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  statsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
    marginVertical: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
  },
  statDays: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 3,
  },
  progressSection: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  progressPercentage: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 15,
  },
  featuredCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  featuredContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 5,
  },
  featuredDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 10,
    maxWidth: '90%',
  },
  difficultyBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  difficultyText: {
    fontSize: 11,
    color: COLORS.success,
    fontWeight: '600',
  },
  featuredArrow: {
    marginTop: 5,
  },
  quickActionsSection: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 15,
  },
  actionButton: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    gap: 10,
  },
  actionButtonText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: '600',
    textAlign: 'center',
  },
  tipsSection: {
    paddingHorizontal: 20,
    marginVertical: 20,
    marginBottom: 40,
  },
  tipCard: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    gap: 12,
  },
  tipIcon: {
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.text,
    lineHeight: 20,
  },
});

export default HomeScreen;
