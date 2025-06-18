document.addEventListener('DOMContentLoaded', () => {
    Game.init(); // Denne MÅ kalle Game.init()
    loadAssets(Game.startGame); // Denne MÅ sende Game.startGame som callback
});

