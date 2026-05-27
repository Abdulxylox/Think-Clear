export const lessonsData = [
  {
    id: 'lesson_1',
    title: 'Identifying Logical Fallacies',
    category: 'Logic & Reasoning',
    description: 'Learn to spot common logical errors in arguments',
    difficulty: 'beginner',
    readTime: 8,
    keyPoints: [
      'Ad Hominem: Attacking the person instead of the argument',
      'Straw Man: Misrepresenting an argument to make it easier to refute',
      'Appeal to Authority: Using authority as evidence without proper reasoning',
      'Circular Reasoning: Using the conclusion as a premise',
    ],
    fullContent:
      'Logical fallacies are flaws in reasoning that make an argument invalid. Understanding these common errors helps you think more critically and construct stronger arguments. There are dozens of named fallacies, but they all share the characteristic of being logically unsound. Learning to recognize them in everyday conversation, media, and academic writing is a crucial skill for clear thinking.',
    examples: [
      {
        title: 'Ad Hominem Example',
        description:
          '"You\'re too young to understand this." This attacks the person rather than their argument.',
      },
      {
        title: 'Straw Man Example',
        description:
          'Person A: "We should have stricter environmental regulations." Person B: "So you want to shut down all factories?" This misrepresents A\'s position.',
      },
    ],
  },
  {
    id: 'lesson_2',
    title: 'The Art of Clear Writing',
    category: 'Communication',
    description: 'Master techniques for writing clearly and concisely',
    difficulty: 'beginner',
    readTime: 10,
    keyPoints: [
      'Use active voice instead of passive voice',
      'Eliminate unnecessary words and jargon',
      'Use concrete examples instead of abstract concepts',
      'Organize ideas logically with clear transitions',
    ],
    fullContent:
      'Clear writing is the foundation of clear thinking. When you write clearly, your ideas become more organized and easier for others to understand. The process of writing forces you to clarify your thoughts and identify gaps in your reasoning. Good writing is simple, direct, and focused on the reader\'s needs.',
    examples: [
      {
        title: 'Active vs Passive',
        description:
          'Passive: "The report was completed by the team." Active: "The team completed the report."',
      },
    ],
  },
  {
    id: 'lesson_3',
    title: 'Evidence Evaluation',
    category: 'Critical Thinking',
    description: 'Learn how to assess the quality and relevance of evidence',
    difficulty: 'intermediate',
    readTime: 12,
    keyPoints: [
      'Distinguish between opinion and fact',
      'Evaluate source credibility',
      'Recognize bias and potential conflicts of interest',
      'Understand correlation vs causation',
    ],
    fullContent:
      'In our information-rich world, the ability to evaluate evidence is more important than ever. Not all evidence is created equal. Understanding what makes evidence strong or weak, and learning to question the sources and methodology behind claims, is essential for making informed decisions.',
    examples: [
      {
        title: 'Source Credibility',
        description:
          'A peer-reviewed scientific study is more credible than a random blog post making similar claims.',
      },
    ],
  },
  {
    id: 'lesson_4',
    title: 'Bias Recognition',
    category: 'Critical Thinking',
    description: 'Understand and recognize your own biases and those of others',
    difficulty: 'intermediate',
    readTime: 10,
    keyPoints: [
      'Confirmation bias: Seeking information that confirms existing beliefs',
      'Availability heuristic: Overweighting easily recalled information',
      'Anchoring bias: Over-relying on the first piece of information',
      'Cognitive dissonance: Difficulty accepting contradictory information',
    ],
    fullContent:
      'All humans have biases. These are mental shortcuts that helped our ancestors survive but can hinder clear thinking today. Awareness of your own biases and the biases of those around you is the first step to mitigating their effects on your reasoning and decisions.',
    examples: [
      {
        title: 'Confirmation Bias',
        description:
          'If you believe coffee is healthy, you might remember studies supporting this while forgetting ones suggesting the opposite.',
      },
    ],
  },
];

export const quizzesData = [
  {
    id: 'quiz_1',
    lessonId: 'lesson_1',
    title: 'Logical Fallacies Quiz',
    description: 'Test your understanding of common logical fallacies',
    questions: [
      {
        id: 'q1',
        question: 'What is an Ad Hominem fallacy?',
        options: [
          'Attacking the person instead of their argument',
          'Using the same word in two different ways',
          'Making an unfounded generalization',
          'Appealing to majority opinion',
        ],
        correct: 0,
        explanation:
          'Ad Hominem means "to the person." It\'s a fallacy where you attack the person making the argument rather than the argument itself.',
      },
      {
        id: 'q2',
        question: 'Which of these is a Straw Man fallacy?',
        options: [
          'Using emotional language to persuade',
          'Misrepresenting someone\'s argument to make it easier to refute',
          'Refusing to accept evidence',
          'Making a hasty generalization',
        ],
        correct: 1,
        explanation:
          'A Straw Man is when you misrepresent the opponent\'s position and then attack your misrepresentation.',
      },
      {
        id: 'q3',
        question: 'What is Circular Reasoning?',
        options: [
          'Making arguments go in circles repeatedly',
          'Using the conclusion as a premise to support itself',
          'Arguing in a circle around a topic',
          'Making too many points at once',
        ],
        correct: 1,
        explanation:
          'Circular reasoning assumes the conclusion in the premise, creating a logical loop that doesn\'t provide real evidence.',
      },
    ],
  },
  {
    id: 'quiz_2',
    lessonId: 'lesson_2',
    title: 'Clear Writing Quiz',
    description: 'Assess your knowledge of clear writing principles',
    questions: [
      {
        id: 'q1',
        question: 'Which sentence is clearer?',
        options: [
          'The decision was made by the committee regarding the proposal.',
          'The committee made a decision regarding the proposal.',
          'The committee decided on the proposal.',
          'Both B and C',
        ],
        correct: 3,
        explanation:
          'Both B and C are clear, but C is even more concise. Prefer active voice and minimize words.',
      },
      {
        id: 'q2',
        question: 'What should you do with jargon in writing?',
        options: [
          'Use it to show expertise',
          'Eliminate it unless necessary for your audience',
          'Use it whenever possible',
          'Use it only in technical writing',
        ],
        correct: 1,
        explanation:
          'Clear writing minimizes jargon. Use it only when necessary and always explain it for your audience.',
      },
    ],
  },
];

export const exercisesData = [
  {
    id: 'exercise_1',
    title: 'Identify the Fallacy',
    description: 'Spot the logical fallacy in the argument',
    type: 'multiple-choice',
    prompt:
      'Argument: "You can\'t trust John\'s opinion on climate change because he works for an oil company." What fallacy is this?',
    options: [
      'Ad Hominem - attacks John rather than his argument',
      'Appeal to Authority - uses John\'s position as evidence',
      'This is valid reasoning - his bias is relevant',
      'Straw Man - misrepresents John\'s position',
    ],
    correct: 0,
    feedback:
      'Correct! While John\'s potential bias is worth noting, dismissing his argument solely because of who he works for is an Ad Hominem fallacy. You should evaluate the argument on its merits.',
  },
  {
    id: 'exercise_2',
    title: 'Rewrite for Clarity',
    description: 'Rewrite the sentence to be clearer and more concise',
    type: 'short-answer',
    prompt:
      'Rewrite this sentence using active voice and eliminating unnecessary words: "It was determined by the research team that the results were not what was expected by them."',
    feedback:
      'Great attempt! A concise version could be: "The research team found that the results were unexpected." This uses active voice and removes redundancy.',
  },
  {
    id: 'exercise_3',
    title: 'Evaluate the Source',
    description: 'Determine the credibility of the evidence',
    type: 'multiple-choice',
    prompt:
      'Which source is most credible for evaluating the health effects of sugar?',
    options: [
      'A blog post by someone who quit sugar',
      'A peer-reviewed study published in a medical journal',
      'A comment on social media from a friend',
      'An article from a candy company website',
    ],
    correct: 1,
    feedback:
      'Correct! Peer-reviewed studies in credible journals are the most reliable sources for scientific claims. They undergo rigorous scrutiny by experts in the field.',
  },
];
