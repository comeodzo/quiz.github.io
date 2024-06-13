const outcomes = {
    'Eau': "Tu deviens un célèbre pourfendeur de démons avec le Souffle de l'Eau !",
    'Foudre': "Avec le Souffle de la Foudre, tu survis à de nombreuses batailles !",
    'Flamme': "Le Souffle de la Flamme te mène à la gloire, mais attention aux démons puissants.",
    'Bête': "Le Souffle de la Bête te rend féroce, mais chaque combat est un défi."
};

function selectOption(breath) {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result').textContent = outcomes[breath];
    document.getElementById('result-container').style.display = 'block';
}

function restartQuiz() {
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
}