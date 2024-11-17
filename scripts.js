document.addEventListener('DOMContentLoaded', () => {
    const flashcards = document.querySelectorAll('.flashcard');
    const shuffleButton = document.getElementById('shuffle');

    // Função para embaralhar os flashcards
    shuffleButton.addEventListener('click', () => {
        const container = document.querySelector('.flashcard-container');
        const flashcardsArray = Array.from(flashcards);
        
        // Embaralhando os flashcards
        flashcardsArray.sort(() => Math.random() - 0.5);
        
        // Recolocando os flashcards embaralhados na tela
        flashcardsArray.forEach(flashcard => container.appendChild(flashcard));
    });

    // Função de rotação do flashcard
    flashcards.forEach(flashcard => {
        flashcard.addEventListener('click', () => {
            flashcard.style.transform = flashcard.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
        });
    });
});
