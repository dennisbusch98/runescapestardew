const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

let canvas = null;
let ctx = null;

let lastTime = 0;
const FPS = 60;
const framerateInterval = 1000 / FPS;

//place holder for player object
let player = null;

const Game = {
    gameRunning: false,

    init: function() {
        console.log("gameState.init() called");
        console.log("gamestarting...");
        canvas = document.getElementById("gameCanvas");
        ctx = canvas.getContext("2d");

        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        
        console.log("game canvas initialized, ready for assets loading");

    },

    gameLoop: function(timestamp) {
        if (Game.gameRunning) {
            requestAnimationFrame(Game.gameLoop);
        }

        const deltaTime = timestamp - lastTime;

        if (deltaTime >= framerateInterval) {
            lastTime = timestamp - (deltaTime % framerateInterval); 
            Game.update(deltaTime);

            Game.draw();
        }

    }, 
    
    update: function(deltaTime) {

    },
    draw: function() {
        ctx.fillStyle = "#7a7a7a";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    },

    startGame: function() {
        if (!Game.gameRunning) {
            console.log("game.startGame() called");
            Game.gameRunning = true;
            console.log("game started, starting game loop");
            requestAnimationFrame(Game.gameLoop);

        }  else {
            console.log("game already running, cannot start again");
        }
    },

    stopGame: function() {
        if (Game.gameRunning) {
            console.log("game.stopGame() called");
            Game.gameRunning = false;
            console.log("game stopped");
        }
    }

};

