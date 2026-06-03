// Content Data
const lessonsData = [
    {
        id: 'lesson_1',
        title: 'Identifying Logical Fallacies',
        category: 'Critical Thinking',
        description: 'Learn to spot common logical errors in arguments and reasoning.',
        difficulty: 'beginner',
        readTime: 8,
        keyPoints: [
            'Ad Hominem: Attacking the person instead of their argument',
            'Straw Man: Misrepresenting someone\'s argument to make it easier to attack',
            'Appeal to Authority: Using someone\'s authority as evidence without proper reasoning',
            'Circular Reasoning: Using the conclusion as evidence for itself',
            'False Dilemma: Presenting only two options when more exist'
        ],
        fullContent: `Logical fallacies are errors in reasoning that undermine the validity of an argument. They are common in debates, advertisements, and everyday conversations.

Common Types of Logical Fallacies:

1. Ad Hominem - This fallacy attacks the person making the argument rather than the argument itself. For example: "You can't trust John's opinion on climate change because he's not a scientist."

2. Straw Man Fallacy - This involves misrepresenting an opponent's argument to make it easier to refute. For example, if someone argues "We should have stricter regulations on pollution," a straw man response might be: "He wants to shut down all factories!"

3. Appeal to Authority - Using an authority figure's opinion as evidence, even when they may not be an expert in the field. For example: "This famous actor says this vitamin supplement works, so it must be true."

4. Circular Reasoning - Using the conclusion as evidence for itself. For example: "The Bible is true because it says so in the Bible."

5. False Dilemma - Presenting only two extreme options when other alternatives exist. For example: "Either you support this policy completely, or you don't care about the environment at all."

Understanding these fallacies helps you evaluate arguments critically and construct stronger reasoning in your own arguments.`,
        examples: [
            {
                title: 'Real-world Example: Ad Hominem',
                description: 'During a political debate, instead of addressing a candidate\'s policy proposal, an opponent says "You\'re too inexperienced to understand economics." This attacks the person rather than evaluating the actual policy.'
            },
            {
                title: 'Real-world Example: False Dilemma',
                description: 'A company claims "Either buy our product or accept inferior quality." In reality, there are many other product options available that offer good quality at different price points.'
            }
        ]
    },
    {
        id: 'lesson_2',
        title: 'The Art of Clear Writing',
        category: 'Communication',
        description: 'Master the principles of writing clearly and concisely.',
        difficulty: 'beginner',
        readTime: 10,
        keyPoints: [
            'Use simple, direct language - avoid unnecessary jargon',
            'One main idea per paragraph',
            'Use active voice instead of passive voice',
            'Eliminate redundancy and wordiness',
            'Use concrete examples and specific details'
        ],
        fullContent: `Clear writing is essential for effective communication. Whether you're writing emails, reports, or essays, these principles will help your message resonate.

Principles of Clear Writing:

1. Simplicity - Use simple words and short sentences. Instead of "utilize," use "use." Instead of "in the event that," use "if."

2. Directness - Get to the point quickly. Avoid unnecessary introductions and transitions. Lead with your main idea.

3. Active Voice - Use active voice (the subject performs the action) rather than passive voice. 
   - Passive: "The report was prepared by the marketing team."
   - Active: "The marketing team prepared the report."

4. Eliminate Redundancy - Remove words that repeat the same idea.
   - Redundant: "The final conclusion is that we must take action."
   - Clear: "We must take action."

5. Be Specific - Use concrete details instead of vague generalizations.
   - Vague: "The project was delayed due to unforeseen circumstances."
   - Specific: "The project was delayed because two team members fell ill."

6. Know Your Audience - Adjust your language and detail level to match your readers' knowledge and needs.

7. Edit Ruthlessly - Cut unnecessary words, simplify sentences, and reorganize for better flow.`,
        examples: [
            {
                title: 'Clarity Improvement Example',
                description: 'Before: "It is important to note that the implementation of new software systems necessitates comprehensive training initiatives." After: "Users need training to use the new software."'
            },
            {
                title: 'Active vs Passive',
                description: 'Passive: "Mistakes were made in the calculation." Active: "We made mistakes in the calculation." The active version is clearer and shows responsibility.'
            }
        ]
    },
    {
        id: 'lesson_3',
        title: 'Evidence Evaluation',
        category: 'Research Skills',
        description: 'Learn to assess the quality and reliability of evidence.',
        difficulty: 'intermediate',
        readTime: 12,
        keyPoints: [
            'Check the source credibility and expertise',
            'Look for peer review and publication in reputable outlets',
            'Consider potential biases and conflicts of interest',
            'Evaluate sample size and methodology',
            'Distinguish between correlation and causation'
        ],
        fullContent: `Not all evidence is created equal. Learning to evaluate evidence critically is crucial for making informed decisions and forming valid arguments.

Key Criteria for Evaluating Evidence:

1. Source Credibility - Who is presenting this evidence? Are they an expert in their field? Do they have relevant credentials and experience?

2. Publication Method - Was the evidence published in a peer-reviewed journal? Peer review means other experts have checked the work for accuracy and methodology.

3. Bias and Conflicts of Interest - Does the source have financial or personal interests that might influence their conclusions? A tobacco company's research on smoking safety should be viewed with skepticism.

4. Sample Size and Methodology - How many subjects or data points were studied? Was the study designed properly? Small, poorly-designed studies should be weighted less heavily.

5. Corroboration - Can other credible sources confirm these findings? If one study contradicts many others, be cautious about accepting it.

6. Correlation vs Causation - Just because two things occur together doesn't mean one causes the other. Ice cream sales and drowning deaths are correlated (both increase in summer), but ice cream doesn't cause drowning.

7. Recency - How old is the evidence? In rapidly changing fields, newer evidence is often more relevant.

8. Primary vs Secondary Sources - Primary sources (original research) are generally more reliable than secondary sources (someone reporting on research).`,
        examples: [
            {
                title: 'Evaluating Health Claims',
                description: 'A supplement company claims their product helps weight loss. The evidence: a study on their own website with 20 volunteers, no control group, and conflict of interest. Compare this with a peer-reviewed study of 500 people published in a medical journal.'
            },
            {
                title: 'Correlation vs Causation',
                description: 'A study shows people who drink coffee live longer. This doesn\'t mean coffee causes longevity. More likely, people who can afford regular coffee also have better access to healthcare.'
            }
        ]
    },
    {
        id: 'lesson_4',
        title: 'Bias Recognition',
        category: 'Critical Thinking',
        description: 'Understand and identify various types of bias.',
        difficulty: 'advanced',
        readTime: 15,
        keyPoints: [
            'Cognitive biases affect how we process information',
            'Confirmation bias: seeking information that confirms existing beliefs',
            'Selection bias: non-random sampling leading to skewed results',
            'Availability heuristic: judging likelihood by how easily examples come to mind',
            'Be aware of your own biases and actively work against them'
        ],
        fullContent: `Bias is an inherent part of human thinking. Understanding different types of bias helps us think more rationally and make better decisions.

Types of Biases:

1. Confirmation Bias - The tendency to search for and interpret information in a way that confirms your preexisting beliefs. A person might read only news sources that align with their political views.

2. Selection Bias - The bias that results from non-random selection of data. For example, a survey conducted only at a beach will be biased toward people who like beaches.

3. Availability Heuristic - We judge the likelihood or frequency of events based on how easily examples come to mind. After hearing about plane crashes, people might overestimate the danger of flying.

4. Anchoring Bias - The tendency to rely too heavily on the first piece of information offered. If a product is marked down from $100 to $50, the original price anchors our perception of the deal.

5. Groupthink - The desire for harmony in a group leads to irrational or dysfunctional decision-making. Everyone agrees without critical analysis.

6. Attribution Bias - When others make mistakes, we blame their character. When we make mistakes, we blame circumstances. "He failed because he's lazy. I failed because the test was hard."

7. Recency Bias - We give more weight to recent events than older ones. Recent stock market losses might overinfluence investment decisions compared to long-term trends.

8. Implicit Bias - Unconscious attitudes or stereotypes about groups of people that affect decisions and behavior.

Recognizing Biases in Yourself and Others:

- Actively seek out opposing viewpoints
- Question your assumptions
- Look for evidence that contradicts your beliefs
- Be aware of emotional reactions to information
- Consider alternative explanations
- Ask others to point out your biases`,
        examples: [
            {
                title: 'Confirmation Bias in Media',
                description: 'Someone believes a certain politician is dishonest. They see news stories about the politician\'s scandals but ignore stories about achievements. They\'re selectively processing information to confirm their existing belief.'
            },
            {
                title: 'Attribution Bias',
                description: 'A colleague arrives late and says "traffic was terrible." You think "they\'re always late." But when you\'re late, you say "traffic was terrible." This is attribution bias - different explanations for the same behavior.'
            }
        ]
    }
];

const quizzesData = {
    lesson_1: [
        {
            id: 'quiz_1_1',
            question: 'Which logical fallacy involves attacking the person rather than their argument?',
            options: ['Straw Man', 'Ad Hominem', 'Appeal to Authority', 'Circular Reasoning'],
            correct: 1,
            explanation: 'Ad Hominem attacks the person making the argument rather than evaluating the argument itself.'
        },
        {
            id: 'quiz_1_2',
            question: 'What is a false dilemma?',
            options: [
                'Using the conclusion as evidence',
                'Presenting only two extreme options when others exist',
                'Misrepresenting an opponent\'s argument',
                'Using authority as evidence'
            ],
            correct: 1,
            explanation: 'A false dilemma presents only two options when many alternatives actually exist.'
        },
        {
            id: 'quiz_1_3',
            question: 'Which fallacy uses circular reasoning?',
            options: [
                'The Bible is true because it says so in the Bible',
                'You\'re wrong because you\'re not an expert',
                'Either agree with me or you don\'t care',
                'He said it, so it must be true'
            ],
            correct: 0,
            explanation: 'This is circular reasoning - using the conclusion as evidence for itself.'
        }
    ],
    lesson_2: [
        {
            id: 'quiz_2_1',
            question: 'Which sentence uses active voice?',
            options: [
                'The report was prepared by the team',
                'The team prepared the report',
                'It was decided that the report would be prepared',
                'The team\'s report preparation was completed'
            ],
            correct: 1,
            explanation: 'Active voice has the subject performing the action. "The team prepared the report" is active.'
        },
        {
            id: 'quiz_2_2',
            question: 'How many main ideas should each paragraph contain?',
            options: ['Two or three', 'As many as possible', 'One main idea', 'It depends on the length'],
            correct: 2,
            explanation: 'Clear writing typically has one main idea per paragraph, making it easier for readers to follow.'
        }
    ],
    lesson_3: [
        {
            id: 'quiz_3_1',
            question: 'What is the most reliable type of evidence?',
            options: [
                'A blog post by someone interested in the topic',
                'A peer-reviewed study in a reputable journal',
                'A claim by a celebrity',
                'Something you heard from a friend'
            ],
            correct: 1,
            explanation: 'Peer-reviewed studies are vetted by experts and published in reputable journals.'
        },
        {
            id: 'quiz_3_2',
            question: 'Which is an example of correlation but not causation?',
            options: [
                'Smoking causes cancer',
                'Ice cream sales and drowning rates both increase in summer',
                'Exercise improves health',
                'Water is necessary for life'
            ],
            correct: 1,
            explanation: 'Both increase in summer, but ice cream doesn\'t cause drowning. Summer weather causes both.'
        }
    ],
    lesson_4: [
        {
            id: 'quiz_4_1',
            question: 'What is confirmation bias?',
            options: [
                'Being biased against new ideas',
                'Seeking information that confirms existing beliefs',
                'Being unwilling to change your mind',
                'Trusting your first impression'
            ],
            correct: 1,
            explanation: 'Confirmation bias is actively seeking out information that supports what you already believe.'
        }
    ]
};

const exercisesData = [
    {
        id: 'exercise_1',
        title: 'Spot the Fallacy',
        type: 'fallacy_identification',
        description: 'Identify which logical fallacy is present in each argument.',
        difficulty: 'beginner'
    },
    {
        id: 'exercise_2',
        title: 'Rewrite for Clarity',
        type: 'sentence_rewriting',
        description: 'Rewrite sentences using clear, concise language.',
        difficulty: 'beginner'
    },
    {
        id: 'exercise_3',
        title: 'Evaluate Sources',
        type: 'source_credibility',
        description: 'Assess the credibility of various sources.',
        difficulty: 'intermediate'
    },
    {
        id: 'exercise_4',
        title: 'Identify Biases',
        type: 'bias_identification',
        description: 'Recognize different types of bias in statements and arguments.',
        difficulty: 'advanced'
    }
];

const dailyTips = [
    'Always question your assumptions and look for evidence.',
    'Clear writing is the result of clear thinking. Revise ruthlessly.',
    'Check your sources before believing extraordinary claims.',
    'Your first interpretation might be biased. Consider other perspectives.',
    'Ask "Why?" multiple times to understand the root of an issue.',
    'Peer review exists because even experts make mistakes.',
    'Correlation does not imply causation - always dig deeper.',
    'Strong arguments rest on multiple types of evidence.',
    'Admit when you don\'t know something - it\'s the start of learning.',
    'Good critical thinking requires intellectual humility.'
];

const achievements = [
    { id: 'first_lesson', name: 'First Step', icon: '📚', condition: 'Complete 1 lesson' },
    { id: 'lesson_master', name: 'Lesson Master', icon: '🏆', condition: 'Complete all lessons' },
    { id: 'quiz_streak_5', name: 'Quiz Enthusiast', icon: '🔥', condition: 'Score 5 perfect quizzes' },
    { id: 'perfect_score', name: 'Perfect Score', icon: '💯', condition: 'Score 100% on a quiz' },
    { id: 'exercise_complete', name: 'Practitioner', icon: '💪', condition: 'Complete 3 exercises' },
    { id: 'week_streak', name: 'Consistent Learner', icon: '⏰', condition: '7-day streak' }
];

const pricingPlans = {
    monthly: { price: 1, duration: 'month' },
    '6months': { price: 5, duration: '6 months' },
    yearly: { price: 10, duration: 'year' }
};

// User Management
class UserManager {
    constructor() {
        this.initializeUsers();
    }

    initializeUsers() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify({}));
        }
        if (!localStorage.getItem('currentUser')) {
            localStorage.setItem('currentUser', null);
        }
    }

    createUser(name, email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        
        if (users[email]) {
            return { success: false, message: 'Email already registered' };
        }

        users[email] = {
            name: name,
            email: email,
            password: password,
            createdAt: new Date().toISOString(),
            isPremium: false,
            premiumExpiry: null,
            lessonsCompleted: {},
            exercisesCompleted: {},
            quizScores: {},
            currentStreak: 0,
            overallScore: 0,
            lastActivityDate: null
        };

        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: 'Account created successfully' };
    }

    authenticate(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        
        if (!users[email]) {
            return { success: false, message: 'Email not found' };
        }

        if (users[email].password !== password) {
            return { success: false, message: 'Incorrect password' };
        }

        localStorage.setItem('currentUser', email);
        return { success: true, message: 'Logged in successfully', user: users[email] };
    }

    getCurrentUser() {
        const email = localStorage.getItem('currentUser');
        if (!email) return null;

        const users = JSON.parse(localStorage.getItem('users') || '{}');
        return users[email] || null;
    }

    logout() {
        localStorage.setItem('currentUser', null);
    }

    updateUserData(email, updates) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[email]) {
            users[email] = { ...users[email], ...updates };
            localStorage.setItem('users', JSON.stringify(users));
            
            if (email === localStorage.getItem('currentUser')) {
                updateDashboard();
            }
            
            return true;
        }
        return false;
    }

    purchasePremium(email, plan) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (!users[email]) return false;

        const expiryDate = new Date();
        if (plan === 'monthly') {
            expiryDate.setMonth(expiryDate.getMonth() + 1);
        } else if (plan === '6months') {
            expiryDate.setMonth(expiryDate.getMonth() + 6);
        } else if (plan === 'yearly') {
            expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        }

        users[email].isPremium = true;
        users[email].premiumExpiry = expiryDate.toISOString();
        localStorage.setItem('users', JSON.stringify(users));

        return true;
    }
}

const userManager = new UserManager();

// Storage Management
class StorageManager {
    constructor() {}

    getUserData(email) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        return users[email] || null;
    }

    completeLesson(email, lessonId) {
        const userData = this.getUserData(email);
        if (userData) {
            userData.lessonsCompleted[lessonId] = true;
            userData.lastActivityDate = new Date().toISOString();
            userManager.updateUserData(email, userData);
        }
    }

    recordQuizScore(email, quizId, score) {
        const userData = this.getUserData(email);
        if (userData) {
            userData.quizScores[quizId] = {
                score: score,
                timestamp: new Date().toISOString()
            };

            const scores = Object.values(userData.quizScores).map(q => q.score);
            userData.overallScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
            userData.lastActivityDate = new Date().toISOString();

            userManager.updateUserData(email, userData);
        }
    }

    resetData(email) {
        if (confirm('Are you sure you want to reset all your data? This cannot be undone.')) {
            const userData = this.getUserData(email);
            if (userData) {
                userData.lessonsCompleted = {};
                userData.exercisesCompleted = {};
                userData.quizScores = {};
                userData.currentStreak = 0;
                userData.overallScore = 0;
                userManager.updateUserData(email, userData);
                alert('Your data has been reset.');
                return true;
            }
        }
        return false;
    }

    exportData(email) {
        const userData = this.getUserData(email);
        if (userData) {
            const dataStr = JSON.stringify(userData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'think-clear-progress.json';
            link.click();
            alert('Your progress data has been downloaded!');
        }
    }
}

const storage = new StorageManager();

// Authentication Functions
function toggleSignUp() {
    const signInForm = document.getElementById('authForm');
    const signUpForm = document.getElementById('signUpForm');
    
    if (signUpForm.style.display === 'none') {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    } else {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    }
}

function authenticate() {
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;

    if (!email || !password) {
        alert('Please enter email and password');
        return;
    }

    const result = userManager.authenticate(email, password);
    if (result.success) {
        document.getElementById('authScreen').classList.remove('active');
        document.getElementById('navbar').style.display = 'block';
        document.getElementById('homeScreen').classList.add('active');
        updateDashboard();
    } else {
        alert(result.message);
    }
}

function createAccount() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPass').value;
    const confirmPass = document.getElementById('signUpConfirm').value;

    if (!name || !email || !password || !confirmPass) {
        alert('Please fill all fields');
        return;
    }

    if (password !== confirmPass) {
        alert('Passwords do not match');
        return;
    }

    const result = userManager.createUser(name, email, password);
    if (result.success) {
        alert(result.message);
        toggleSignUp();
        document.getElementById('authEmail').value = email;
        document.getElementById('authPassword').value = password;
    } else {
        alert(result.message);
    }
}

function logout() {
    userManager.logout();
    document.getElementById('authScreen').classList.add('active');
    document.getElementById('navbar').style.display = 'none';
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('authEmail').value = '';
    document.getElementById('authPassword').value = '';
    alert('Logged out successfully');
}

// Screen Navigation
function showScreen(screenName) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    const targetScreen = document.getElementById(screenName + 'Screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        if (screenName === 'lessons') {
            loadLessons();
        } else if (screenName === 'exercises') {
            loadExercises();
        } else if (screenName === 'profile') {
            loadProfile();
        } else if (screenName === 'premium') {
            loadPremium();
        }
    }
    
    window.scrollTo(0, 0);
}

// Update Dashboard
function updateDashboard() {
    const currentUser = userManager.getCurrentUser();
    if (!currentUser) return;

    const lessonsCompleted = Object.values(currentUser.lessonsCompleted).filter(v => v).length;
    const quizzes = Object.values(currentUser.quizScores);
    
    document.getElementById('streakValue').textContent = currentUser.currentStreak + ' days';
    document.getElementById('scoreValue').textContent = currentUser.overallScore + '%';
    document.getElementById('lessonsValue').textContent = lessonsCompleted + '/4';
    document.getElementById('exercisesValue').textContent = quizzes.length;
    
    const tipIndex = Math.floor(Math.random() * dailyTips.length);
    document.getElementById('dailyTip').textContent = dailyTips[tipIndex];
}

// Load Lessons
function loadLessons(difficulty = 'all') {
    const grid = document.getElementById('lessonsGrid');
    const currentUser = userManager.getCurrentUser();
    
    let filteredLessons = lessonsData;
    if (difficulty !== 'all') {
        filteredLessons = lessonsData.filter(l => l.difficulty === difficulty);
    }
    
    grid.innerHTML = filteredLessons.map(lesson => {
        const isCompleted = currentUser && currentUser.lessonsCompleted[lesson.id];
        return `
            <div class="lesson-card" onclick="showLessonDetail('${lesson.id}')">
                <div class="lesson-header">
                    <div class="lesson-icon">📚</div>
                    <span class="difficulty-badge difficulty-${lesson.difficulty}">${lesson.difficulty}</span>
                </div>
                <h3 class="lesson-title">${lesson.title}</h3>
                <p class="lesson-description">${lesson.description}</p>
                <div class="lesson-meta">
                    <span>⏱️ ${lesson.readTime} min</span>
                    <div class="completion-indicator ${isCompleted ? 'completed' : 'pending'}">
                        ${isCompleted ? '✓' : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter lessons
function filterLessons(difficulty) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadLessons(difficulty);
}

// Show Lesson Detail
function showLessonDetail(lessonId) {
    const lesson = lessonsData.find(l => l.id === lessonId);
    if (!lesson) return;
    
    const detailContent = `
        <h2>${lesson.title}</h2>
        <span class="difficulty-badge difficulty-${lesson.difficulty}">${lesson.difficulty}</span>
        
        <div class="lesson-section">
            <h3>Overview</h3>
            <p>${lesson.description}</p>
        </div>
        
        <div class="lesson-section">
            <h3>Key Points</h3>
            <ul class="key-points">
                ${lesson.keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
        
        <div class="lesson-section">
            <h3>Full Content</h3>
            <p>${lesson.fullContent.split('\n\n').map(p => `<p>${p}</p>`).join('')}</p>
        </div>
        
        <div class="lesson-section">
            <h3>Real-world Examples</h3>
            ${lesson.examples.map(ex => `
                <div class="example-box">
                    <strong>${ex.title}</strong>
                    <p>${ex.description}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="action-buttons">
            <button class="btn btn-primary" onclick="completeLesson('${lesson.id}'); showQuiz('${lesson.id}')">
                <i class="fas fa-check"></i> Complete & Take Quiz
            </button>
            <button class="btn btn-secondary" onclick="showScreen('lessons')">
                <i class="fas fa-arrow-left"></i> Back to Lessons
            </button>
        </div>
    `;
    
    document.getElementById('lessonContent').innerHTML = detailContent;
    showScreen('lessonDetail');
}

// Complete Lesson
function completeLesson(lessonId) {
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        storage.completeLesson(currentUser.email, lessonId);
        alert('Lesson completed! 🎉');
    }
}

// Show Quiz
function showQuiz(lessonId) {
    const quiz = quizzesData[lessonId];
    if (!quiz || quiz.length === 0) return;
    
    window.currentQuiz = {
        lessonId: lessonId,
        questions: quiz,
        currentQuestion: 0,
        score: 0,
        answers: []
    };
    
    displayQuizQuestion();
    showScreen('quiz');
}

// Display Quiz Question
function displayQuizQuestion() {
    const quiz = window.currentQuiz;
    const question = quiz.questions[quiz.currentQuestion];
    const progress = ((quiz.currentQuestion + 1) / quiz.questions.length) * 100;
    
    const quizHTML = `
        <div class="quiz-progress">
            <div class="quiz-progress-bar" style="width: ${progress}%"></div>
        </div>
        
        <div class="quiz-question">
            <h3>Question ${quiz.currentQuestion + 1} of ${quiz.questions.length}</h3>
            <p class="quiz-question-text">${question.question}</p>
            
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('quizContent').innerHTML = quizHTML;
}

// Select Answer
function selectAnswer(index) {
    const quiz = window.currentQuiz;
    const question = quiz.questions[quiz.currentQuestion];
    
    const options = document.querySelectorAll('.quiz-option');
    options[index].classList.add('selected');
    
    if (index === question.correct) {
        quiz.score++;
        options[index].classList.add('correct');
    } else {
        options[index].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    const explanationHTML = `
        <div style="margin-top: 1.5rem; padding: 1rem; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.3);">
            <strong>Explanation:</strong> ${question.explanation}
        </div>
        <button class="btn btn-primary" style="margin-top: 1.5rem; width: 100%;" onclick="nextQuizQuestion()">
            ${quiz.currentQuestion + 1 === quiz.questions.length ? 'See Results' : 'Next Question'}
        </button>
    `;
    
    document.querySelector('.quiz-question').innerHTML += explanationHTML;
    
    options.forEach(opt => opt.style.pointerEvents = 'none');
}

// Next Quiz Question
function nextQuizQuestion() {
    const quiz = window.currentQuiz;
    
    if (quiz.currentQuestion + 1 < quiz.questions.length) {
        quiz.currentQuestion++;
        displayQuizQuestion();
    } else {
        showQuizResults();
    }
}

// Show Quiz Results
function showQuizResults() {
    const quiz = window.currentQuiz;
    const totalQuestions = quiz.questions.length;
    const percentage = Math.round((quiz.score / totalQuestions) * 100);
    
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        storage.recordQuizScore(currentUser.email, 'quiz_' + quiz.lessonId, percentage);
    }
    
    const resultHTML = `
        <div class="quiz-result">
            <h2>Quiz Complete! 🎉</h2>
            <div class="quiz-score">${percentage}%</div>
            <p class="quiz-feedback">
                You got ${quiz.score} out of ${totalQuestions} correct.
                ${percentage === 100 ? '🌟 Perfect Score!' : percentage >= 80 ? '👏 Great job!' : percentage >= 60 ? '✅ Good effort!' : '📚 Keep learning!'}
            </p>
            
            <div class="action-buttons">
                <button class="btn btn-primary" onclick="showScreen('lessons')">
                    <i class="fas fa-book"></i> Back to Lessons
                </button>
                <button class="btn btn-secondary" onclick="showQuiz('${quiz.lessonId}')">
                    <i class="fas fa-redo"></i> Retake Quiz
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('quizContent').innerHTML = resultHTML;
}

// Load Exercises
function loadExercises() {
    const grid = document.getElementById('exercisesGrid');
    
    grid.innerHTML = exercisesData.map(exercise => `
        <div class="exercise-card" onclick="startExercise('${exercise.id}')">
            <div class="lesson-header">
                <div class="lesson-icon">💪</div>
                <span class="difficulty-badge difficulty-${exercise.difficulty}">${exercise.difficulty}</span>
            </div>
            <h3 class="lesson-title">${exercise.title}</h3>
            <p class="lesson-description">${exercise.description}</p>
            <div class="lesson-meta">
                <span>Type: ${exercise.type.replace('_', ' ')}</span>
            </div>
        </div>
    `).join('');
}

// Start Exercise
function startExercise(exerciseId) {
    const exercise = exercisesData.find(e => e.id === exerciseId);
    alert(`🎯 Exercise: ${exercise.title}\n\n${exercise.description}\n\nClick OK to start practicing!`);
}

// Load Premium
function loadPremium() {
    const currentUser = userManager.getCurrentUser();
    if (currentUser && currentUser.isPremium) {
        const expiryDate = new Date(currentUser.premiumExpiry);
        alert(`✨ You are a Premium Member!\nYour subscription expires on: ${expiryDate.toDateString()}`);
    }
}

// Purchase Plan
function purchasePlan(plan) {
    const currentUser = userManager.getCurrentUser();
    if (!currentUser) return;

    const planInfo = pricingPlans[plan];
    const confirmed = confirm(`Upgrade to Premium?\nPlan: ${plan}\nPrice: $${planInfo.price}/${planInfo.duration}\n\nClick OK to proceed to payment.`);
    
    if (confirmed) {
        userManager.purchasePremium(currentUser.email, plan);
        alert('✨ Welcome to Premium! 🎉\n\nYour subscription is now active. Enjoy unlimited access to all premium features!');
        updateDashboard();
    }
}

// Load Profile
function loadProfile() {
    const currentUser = userManager.getCurrentUser();
    if (!currentUser) return;

    const lessonsCompleted = Object.values(currentUser.lessonsCompleted).filter(v => v).length;
    const quizzes = Object.values(currentUser.quizScores);
    
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userEmail').textContent = currentUser.email;
    
    const statusEl = document.getElementById('userStatus');
    if (currentUser.isPremium) {
        statusEl.textContent = '✨ Premium Member';
        statusEl.classList.add('premium');
    } else {
        statusEl.textContent = 'Free Member';
        statusEl.classList.remove('premium');
    }
    
    document.getElementById('totalQuizzes').textContent = quizzes.length;
    document.getElementById('avgScore').textContent = currentUser.overallScore + '%';
    document.getElementById('completedLessons').textContent = lessonsCompleted + '/4';
    document.getElementById('currentStreak').textContent = currentUser.currentStreak + ' days';
    
    const achievementGrid = document.getElementById('achievementGrid');
    achievementGrid.innerHTML = achievements.map(ach => {
        const isUnlocked = checkAchievementUnlocked(ach.id, currentUser);
        return `
            <div class="achievement-badge ${isUnlocked ? 'unlocked' : ''}">
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
            </div>
        `;
    }).join('');
}

// Check Achievement Unlocked
function checkAchievementUnlocked(achievementId, userData) {
    const lessonsCompleted = Object.values(userData.lessonsCompleted).filter(v => v).length;
    const quizzesCompleted = Object.keys(userData.quizScores).length;
    const perfectQuizzes = Object.values(userData.quizScores).filter(q => q.score === 100).length;
    
    const conditions = {
        'first_lesson': lessonsCompleted >= 1,
        'lesson_master': lessonsCompleted === 4,
        'quiz_streak_5': perfectQuizzes >= 5,
        'perfect_score': perfectQuizzes >= 1,
        'exercise_complete': quizzesCompleted >= 3,
        'week_streak': userData.currentStreak >= 7
    };
    
    return conditions[achievementId] || false;
}

// Reset Data
function resetData() {
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        storage.resetData(currentUser.email);
        showScreen('home');
    }
}

// Export Data
function exportData() {
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        storage.exportData(currentUser.email);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    userManager.initializeUsers();
    const currentUser = userManager.getCurrentUser();
    
    if (currentUser) {
        document.getElementById('authScreen').classList.remove('active');
        document.getElementById('navbar').style.display = 'block';
        document.getElementById('homeScreen').classList.add('active');
        updateDashboard();
    } else {
        document.getElementById('authScreen').classList.add('active');
        document.getElementById('navbar').style.display = 'none';
    }
});
