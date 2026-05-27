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

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await StorageService.getUserData();
      setUserData(data);

      const lessons = await StorageService.getLessons();
      const quizzes = await StorageService.getQuizzes();

      const completedLessons = Object.values(data.lessonsCompleted).filter(
        (v) => v
      ).length;
      const completedExercises = Object.values(data.exercisesCompleted).filter(
        (v) => v
      ).length;
      const averageScore =
        Object.values(data.quizScores).length > 0
          ? Math.round(
              Object.values(data.quizScores).reduce((a, b) => a + b, 0) /
                Object.values(data.quizScores).length
            )
          : 0;

      setStats({
        completedLessons,
        totalLessons: lessons.length,
        completedExercises,
        averageScore,
        totalQuizzes: Object.values(data.quizScores).length,
      });
    };

    fetchUserData();
  }, []);

  const handleResetProgress = () => {
    Alert.alert(
      'Reset Progress',
      'Are you sure you want to reset all your progress? This action cannot be undone.',
      [
        { text: 'Cancel', onPress: () => {} },
        {
          text: 'Reset',
          onPress: async () => {
            await StorageService.resetUserData();
            Alert.alert('Success', 'Your progress has been reset.');
          },
          style: 'destructive',
        },
      ]
    );
  };

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Ionicons name="person" size={60} color={COLORS.primary} />
        </View>
        <Text style={styles.profileName}>Welcome, Thinker!</Text>
        <Text style={styles.profileEmail}>
          Keep practicing to master critical thinking
        </Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Your Progress</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              {stats.completedLessons}/{stats.totalLessons}
            </Text>
            <Text style={styles.statLabel}>Lessons</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.completedExercises}</Text>
            <Text style={styles.statLabel}>Exercises</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.totalQuizzes}</Text>
            <Text style={styles.statLabel}>Quizzes</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.averageScore}%</Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </View>
        </View>
      </View>

      {/* Achievements Section */}
      <View style={styles.achievementsSection}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsGrid}>
          {stats.completedLessons >= 1 && (
            <View style={styles.achievementCard}>
              <Ionicons name="star" size={32} color={COLORS.warning} />
              <Text style={styles.achievementText}>First Steps</Text>
            </View>
          )}
          {stats.completedLessons >= 5 && (
            <View style={styles.achievementCard}>
              <Ionicons name="flame" size={32} color={COLORS.danger} />
              <Text style={styles.achievementText}>On Fire!</Text>
            </View>
          )}
          {stats.averageScore >= 80 && (
            <View style={styles.achievementCard}>
              <Ionicons name="trophy" size={32} color={COLORS.warning} />
              <Text style={styles.achievementText}>Top Score</Text>
            </View>
          )}
          {stats.completedExercises >= 3 && (
            <View style={styles.achievementCard}>
              <Ionicons name="bulb" size={32} color={COLORS.success} />
              <Text style={styles.achievementText}>Practitioner</Text>
            </View>
          )}
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemLeft}>
            <Ionicons
              name="notifications"
              size={20}
              color={COLORS.primary}
              style={{ marginRight: 12 }}
            />
            <Text style={styles.settingItemText}>Notifications</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemLeft}>
            <Ionicons
              name="moon"
              size={20}
              color={COLORS.primary}
              style={{ marginRight: 12 }}
            />
            <Text style={styles.settingItemText}>Dark Mode</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemLeft}>
            <Ionicons
              name="help-circle"
              size={20}
              color={COLORS.primary}
              style={{ marginRight: 12 }}
            />
            <Text style={styles.settingItemText}>Help & Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>ThinkClear</Text>
          <Text style={styles.aboutVersion}>Version 1.0.0</Text>
          <Text style={styles.aboutDescription}>
            Master the art of critical thinking, clear communication, and concise
            expression through interactive lessons, quizzes, and exercises.
          </Text>
        </View>
      </View>

      {/* Danger Zone */}
      <View style={styles.dangerZone}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetProgress}
        >
          <Ionicons name="refresh" size={20} color={COLORS.danger} />
          <Text style={styles.resetButtonText}>Reset All Progress</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingText: {
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 40,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surface,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: `${COLORS.primary}20`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  statsSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  achievementsSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.surface,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  achievementCard: {
    width: '48%',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    gap: 8,
  },
  achievementText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: '600',
    textAlign: 'center',
  },
  settingsSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.surface,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    marginBottom: 10,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingItemText: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '500',
  },
  aboutSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.surface,
  },
  aboutCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 5,
  },
  aboutVersion: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 10,
  },
  aboutDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  dangerZone: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.surface,
  },
  resetButton: {
    flexDirection: 'row',
    backgroundColor: `${COLORS.danger}10`,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.danger,
    marginBottom: 30,
    gap: 8,
  },
  resetButtonText: {
    color: COLORS.danger,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProfileScreen;
