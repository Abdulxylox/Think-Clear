export const calculateQuizScore = (answers, questions) => {
  let correct = 0;
  answers.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      correct++;
    }
  });
  return Math.round((correct / questions.length) * 100);
};

export const getStreak = (scores) => {
  const dates = Object.values(scores)
    .map((s) => s.timestamp)
    .sort()
    .reverse();
  let streak = 0;
  const today = new Date();

  for (let i = 0; i < dates.length; i++) {
    const scoreDate = new Date(dates[i]);
    const expectedDate = new Date(today);
    expectedDate.setDate(expectedDate.getDate() - i);

    if (scoreDate.toDateString() === expectedDate.toDateString()) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
};

export const getProgressPercentage = (completed, total) => {
  return total > 0 ? Math.round((completed / total) * 100) : 0;
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getDifficultyColor = (difficulty) => {
  const colors = {
    beginner: '#10b981',
    intermediate: '#f59e0b',
    advanced: '#ef4444',
  };
  return colors[difficulty] || '#6366f1';
};
