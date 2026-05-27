import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StorageService } from '../services/StorageService';
import { calculateQuizScore } from '../utils/helpers';

const COLORS = {
  background: '#111827',
  surface: '#1f2937',
  primary: '#3b82f6',
  success: '#10b981',
  danger: '#ef4444',
  warning: '#f59e0b',
  text: '#f3f4f6',
  textSecondary: '#9ca3af',
};

const QuizScreen = ({ route, navigation }) => {
  const { quiz } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (selectedIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedIndex;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = async () => {
    const finalScore = calculateQuizScore(answers, quiz.questions);
    setScore(finalScore);
    setShowResults(true);
    await StorageService.saveQuizScore(quiz.id, finalScore);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.resultsContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Score Display */}
          <View style={styles.scoreSection}>
            <View
              style={[
                styles.scoreCircle,
                {
                  backgroundColor:
                    score >= 70 ? `${COLORS.success}20` : `${COLORS.warning}20`,
                },
              ]}
            >
              <Text
                style={[
                  styles.scoreText,
                  { color: score >= 70 ? COLORS.success : COLORS.warning },
                ]}
              >
                {score}%
              </Text>
            </View>
            <Text style={styles.resultTitle}>
              {score >= 70 ? 'Great Job! 🎉' : 'Good Effort! 💪'}
            </Text>
            <Text style={styles.resultMessage}>
              {score >= 90
                ? 'Outstanding performance!'
                : score >= 70
                ? 'You passed! Review weak areas and try again.'
                : 'Keep practicing to improve your score!'}
            </Text>
          </View>

          {/* Answer Review */}
          <View style={styles.reviewSection}>
            <Text style={styles.reviewTitle}>Review Your Answers</Text>
            {quiz.questions.map((question, index) => {
              const selectedAnswerIndex = answers[index];
              const isCorrect =
                selectedAnswerIndex === question.correct;

              return (
                <View key={index} style={styles.reviewCard}>
                  <View
                    style={[
                      styles.questionNumber,
                      {
                        backgroundColor: isCorrect
                          ? `${COLORS.success}20`
                          : `${COLORS.danger}20`,
                      },
                    ]}
                  >
                    <Ionicons
                      name={isCorrect ? 'checkmark' : 'close'}
                      size={20}
                      color={isCorrect ? COLORS.success : COLORS.danger}
                    />
                  </View>
                  <View style={styles.reviewContent}>
                    <Text style={styles.questionText}>
                      {index + 1}. {question.question}
                    </Text>
                    <Text style={styles.answerText}>
                      Your answer:{' '}
                      <Text style={{ color: COLORS.text }}>
                        {question.options[selectedAnswerIndex]}
                      </Text>
                    </Text>
                    {!isCorrect && (
                      <Text style={styles.correctAnswerText}>
                        Correct answer:{' '}
                        <Text style={{ color: COLORS.success }}>
                          {question.options[question.correct]}
                        </Text>
                      </Text>
                    )}
                    {question.explanation && (
                      <Text style={styles.explanationText}>
                        {question.explanation}
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonSecondaryText}>Back to Lesson</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleRetakeQuiz}
          >
            <Ionicons name="refresh" size={20} color="#fff" />
            <Text style={styles.buttonPrimaryText}>Retake Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const question = quiz.questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressSection}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          Question {currentQuestion + 1} of {quiz.questions.length}
        </Text>
      </View>

      {/* Question */}
      <ScrollView
        style={styles.questionContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.questionText}>{question.question}</Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === index && styles.optionButtonSelected,
              ]}
              onPress={() => handleSelectAnswer(index)}
            >
              <View
                style={[
                  styles.optionRadio,
                  selectedAnswer === index && styles.optionRadioSelected,
                ]}
              >
                {selectedAnswer === index && (
                  <View style={styles.optionRadioDot} />
                )}
              </View>
              <Text
                style={[
                  styles.optionText,
                  selectedAnswer === index && styles.optionTextSelected,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentQuestion === 0 && styles.navButtonDisabled,
          ]}
          onPress={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <Ionicons name="chevron-back" size={20} color={COLORS.text} />
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            styles.navButtonPrimary,
            selectedAnswer === undefined && styles.navButtonDisabled,
          ]}
          onPress={handleNextQuestion}
          disabled={selectedAnswer === undefined}
        >
          <Text style={styles.navButtonPrimaryText}>
            {currentQuestion === quiz.questions.length - 1
              ? 'Submit'
              : 'Next'}
          </Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  progressSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  questionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 25,
    lineHeight: 26,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionButtonSelected: {
    borderColor: COLORS.primary,
    backgroundColor: `${COLORS.primary}10`,
  },
  optionRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.textSecondary,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionRadioSelected: {
    borderColor: COLORS.primary,
  },
  optionRadioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  optionTextSelected: {
    color: COLORS.text,
    fontWeight: '600',
  },
  navigationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
  },
  navButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    color: COLORS.text,
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 5,
  },
  navButtonPrimary: {
    backgroundColor: COLORS.primary,
  },
  navButtonPrimaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginRight: 5,
  },
  // Results Styles
  resultsContainer: {
    flex: 1,
  },
  scoreSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: '700',
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },
  resultMessage: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  reviewSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 15,
  },
  reviewCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  questionNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  questionReviewText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 6,
  },
  answerText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  correctAnswerText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  explanationText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontStyle: 'italic',
    marginTop: 6,
    lineHeight: 18,
  },
  actionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
  },
  buttonPrimary: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 8,
  },
  buttonSecondary: {
    flex: 1,
    backgroundColor: COLORS.surface,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: COLORS.text,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default QuizScreen;
