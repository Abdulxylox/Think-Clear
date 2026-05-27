import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
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

const ExerciseScreen = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseAnswers, setExerciseAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const fetchExercises = async () => {
      const allExercises = await StorageService.getExercises();
      setExercises(allExercises);
    };

    const unsubscribe = navigation.addListener('focus', fetchExercises);
    fetchExercises();

    return unsubscribe;
  }, [navigation]);

  const handleOpenExercise = (exercise) => {
    setSelectedExercise(exercise);
    setExerciseAnswers({});
    setShowFeedback(false);
    setModalVisible(true);
  };

  const handleSubmitExercise = async () => {
    if (selectedExercise.type === 'short-answer') {
      if (!exerciseAnswers[selectedExercise.id]) {
        Alert.alert('Required', 'Please provide an answer');
        return;
      }
    } else if (selectedExercise.type === 'multiple-choice') {
      if (exerciseAnswers[selectedExercise.id] === undefined) {
        Alert.alert('Required', 'Please select an option');
        return;
      }
    }

    setShowFeedback(true);
    await StorageService.saveExerciseCompletion(selectedExercise.id);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedExercise(null);
  };

  const renderExerciseContent = () => {
    if (!selectedExercise) return null;

    switch (selectedExercise.type) {
      case 'short-answer':
        return (
          <View style={styles.exerciseContent}>
            <Text style={styles.exercisePrompt}>
              {selectedExercise.prompt}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type your answer here..."
              placeholderTextColor={COLORS.textSecondary}
              multiline
              numberOfLines={6}
              value={exerciseAnswers[selectedExercise.id] || ''}
              onChangeText={(text) =>
                setExerciseAnswers({ ...exerciseAnswers, [selectedExercise.id]: text })
              }
              editable={!showFeedback}
            />
          </View>
        );

      case 'multiple-choice':
        return (
          <View style={styles.exerciseContent}>
            <Text style={styles.exercisePrompt}>
              {selectedExercise.prompt}
            </Text>
            <View style={styles.optionsContainer}>
              {selectedExercise.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.exerciseOption,
                    exerciseAnswers[selectedExercise.id] === index &&
                      styles.exerciseOptionSelected,
                  ]}
                  onPress={() =>
                    !showFeedback &&
                    setExerciseAnswers({
                      ...exerciseAnswers,
                      [selectedExercise.id]: index,
                    })
                  }
                >
                  <View
                    style={[
                      styles.exerciseRadio,
                      exerciseAnswers[selectedExercise.id] === index &&
                        styles.exerciseRadioSelected,
                    ]}
                  >
                    {exerciseAnswers[selectedExercise.id] === index && (
                      <View style={styles.exerciseRadioDot} />
                    )}
                  </View>
                  <Text style={styles.exerciseOptionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exercises</Text>
        <Text style={styles.headerSubtitle}>
          Practice your critical thinking skills
        </Text>
      </View>

      {/* Exercises List */}
      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {exercises.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            style={styles.exerciseCard}
            onPress={() => handleOpenExercise(exercise)}
          >
            <View style={styles.cardContent}>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
              <Text style={styles.exerciseDescription}>
                {exercise.description}
              </Text>
              <View style={styles.cardFooter}>
                <View
                  style={[
                    styles.typeBadge,
                    {
                      backgroundColor: `${COLORS.warning}20`,
                    },
                  ]}
                >
                  <Text style={{ color: COLORS.warning, fontSize: 11, fontWeight: '600' }}>
                    {exercise.type === 'short-answer'
                      ? 'Writing'
                      : 'Multiple Choice'}
                  </Text>
                </View>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color={COLORS.primary}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Exercise Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {selectedExercise?.title}
              </Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>

            {/* Exercise Content */}
            <ScrollView
              style={styles.modalBody}
              showsVerticalScrollIndicator={false}
            >
              {renderExerciseContent()}

              {/* Feedback */}
              {showFeedback && (
                <View
                  style={[
                    styles.feedbackContainer,
                    {
                      backgroundColor: `${COLORS.success}20`,
                      borderColor: COLORS.success,
                    },
                  ]}
                >
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={COLORS.success}
                    style={{ marginRight: 10 }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.feedbackTitle,
                        { color: COLORS.success },
                      ]}
                    >
                      Great!
                    </Text>
                    <Text style={styles.feedbackText}>
                      {selectedExercise?.feedback}
                    </Text>
                  </View>
                </View>
              )}
            </ScrollView>

            {/* Modal Actions */}
            <View style={styles.modalActions}>
              {!showFeedback ? (
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleSubmitExercise}
                >
                  <Ionicons name="checkmark" size={20} color="#fff" />
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.submitButtonText}>Done</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
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
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  exerciseCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.warning,
  },
  cardContent: {
    gap: 8,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  exerciseDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 19,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '90%',
    paddingTop: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surface,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    flex: 1,
  },
  modalBody: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  exerciseContent: {
    gap: 15,
  },
  exercisePrompt: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    lineHeight: 24,
  },
  textInput: {
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    color: COLORS.text,
    padding: 15,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    fontSize: 14,
  },
  optionsContainer: {
    gap: 10,
  },
  exerciseOption: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  exerciseOptionSelected: {
    borderColor: COLORS.primary,
    backgroundColor: `${COLORS.primary}10`,
  },
  exerciseRadio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: COLORS.textSecondary,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseRadioSelected: {
    borderColor: COLORS.primary,
  },
  exerciseRadioDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
  },
  exerciseOptionText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  feedbackContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    alignItems: 'flex-start',
  },
  feedbackTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },
  feedbackText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  modalActions: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.surface,
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

function TextInput(props) {
  const { TextInput: RNTextInput } = require('react-native');
  return <RNTextInput {...props} />;
}

export default ExerciseScreen;
