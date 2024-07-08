// Sample data for quizzes
const quizzes = [
    { id: 1, title: "JavaScript Basics", description: "Test your knowledge of JavaScript basics.", questions: [] },
    { id: 2, title: "HTML & CSS", description: "Quiz on HTML and CSS fundamentals.", questions: [] }
];

// Functions to toggle between screens
function showMainMenu() {
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('play-quizzes').classList.add('hidden');
    document.getElementById('create-quiz-menu').classList.add('hidden');
    document.getElementById('new-quiz-form').classList.add('hidden');
    document.getElementById('edit-quiz-list').classList.add('hidden');
}

function showPlayQuizzes() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('play-quizzes').classList.remove('hidden');
    loadQuizList();
}

function showCreateQuizMenu() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('create-quiz-menu').classList.remove('hidden');
    document.getElementById('new-quiz-form').classList.add('hidden');
    document.getElementById('edit-quiz-list').classList.add('hidden');
}

function showNewQuizForm() {
    document.getElementById('create-quiz-menu').classList.add('hidden');
    document.getElementById('new-quiz-form').classList.remove('hidden');
}

function showEditQuizList() {
    document.getElementById('create-quiz-menu').classList.add('hidden');
    document.getElementById('edit-quiz-list').classList.remove('hidden');
    loadEditQuizList();
}

// Load quizzes for play
function loadQuizList() {
    const quizList = document.getElementById('quiz-list');
    quizList.innerHTML = '';
    quizzes.forEach(quiz => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('bg-white/[0.3]', 'p-4', 'rounded', 'shadow-lg', 'mb-4');
        quizElement.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${quiz.title}</h3>
            <p class="mb-2">${quiz.description}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Play</button>
        `;
        quizList.appendChild(quizElement);
    });
}



// Load quizzes for edit
function loadEditQuizList() {
    const editQuizList = document.getElementById('edit-quiz-list-content');
    editQuizList.innerHTML = '';
    quizzes.forEach(quiz => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
        quizElement.innerHTML = `
            <h3 class="text-xl font-bold">${quiz.title}</h3>
            <p>${quiz.description}</p>
            <button onclick="editQuiz(${quiz.id})" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2">Edit</button>
        `;
        editQuizList.appendChild(quizElement);
    });
}

// Add question to new quiz form
function addQuestion() {
    const questionsList = document.getElementById('questions-list');
    const questionElement = document.createElement('div');
    questionElement.classList.add('mb-4', 'bg-gray-200', 'p-4', 'rounded', 'shadow');
    questionElement.innerHTML = `
        <label class="block text-gray-700 text-sm font-bold mb-2">Question</label>
        <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter question">
        <label class="block text-gray-700 text-sm font-bold mb-2">Answer</label>
        <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter answer">
        <label class="block text-gray-700 text-sm font-bold mb-2">Options</label>
        <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter option 1">
        <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter option 2">
        <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter option 3">
        <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter option 4">
    `;
    questionsList.appendChild(questionElement);
}

// Edit quiz
function editQuiz(quizId) {
    const quiz = quizzes.find(q => q.id === quizId);
    document.getElementById('quiz-title').value = quiz.title;
    document.getElementById('quiz-description').value = quiz.description;
    document.getElementById('questions-list').innerHTML = '';
    quiz.questions.forEach(question => addQuestionWithValues(question));
    document.getElementById('edit-quiz-list').classList.add('hidden');
    document.getElementById('new-quiz-form').classList.remove('hidden');
}

// Add question with values
function addQuestionWithValues(question) {
    const questionsList = document.getElementById('questions-list');
    const questionElement = document.createElement('div');
    questionElement.classList.add('mb-4', 'bg-gray-200', 'p-4', 'rounded', 'shadow');
    questionElement.innerHTML = `
        <label class="block text-gray-700 text-sm font-bold mb-2">Question</label>
        <input class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" value="${question.text}">
        <label class="block text-gray-700 text-sm font-bold mb-2">Answer</label>
        <input class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" value="${question.answer}">
        <label class="block text-gray-700 text-sm font-bold mb-2">Options</label>
        ${question.options.map(option => `<input class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" type="text" value="${option}">`).join('')}
    `;
    questionsList.appendChild(questionElement);
}

// Theme toggling
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('bg-gray-800', isDarkMode);
    document.body.classList.toggle('bg-gray-100', !isDarkMode);
    document.body.classList.toggle('text-white', isDarkMode);
    document.body.classList.toggle('text-black', !isDarkMode);

    const themeButton = document.getElementById('theme-toggle');
    themeButton.textContent = isDarkMode ? 'Light' : 'Dark';
    themeButton.classList.toggle('bg-gray-700', isDarkMode);
    themeButton.classList.toggle('bg-gray-300', !isDarkMode);
    themeButton.classList.toggle('text-white', isDarkMode);
    themeButton.classList.toggle('text-navy', !isDarkMode);

    // Change background image based on theme
    document.body.style.backgroundImage = isDarkMode ? "url('quiz_background_dark.jpg')" : "url('quiz_background_light.jpg')";
}

// Initial theme setup
toggleTheme();
