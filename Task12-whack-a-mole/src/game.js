const game = new Game();
game.initialize();

function Game() {
    let holes;
    const scoreBoard = document.querySelector('.score');
    const game = document.querySelector('.game');
    const moles = document.querySelectorAll('.mole');
    const scoreCard = document.querySelector('.scores');
    const inputName = document.querySelector('#pname');
    const levelText = document.querySelector('.level');
    const timeText = document.querySelector('.time');

    const minPeepTime = 200;
    let maxPeepTime = 1000;
    const failAudio = "kick";
    const hitAudio = "hihat"
    const elementToHit = "mole";
    const gameTime = 10000;

    let players = [];
    let lastHole;
    let timeUp = false;
    let score = 0;
    let playerName = "";
    let level = 1;

    this.initialize = () => {
        game.addEventListener('click', this.bonk);
        this.createHoles();
        holes = document.querySelectorAll('.hole')
    }

    this.createHoles = () => {
        let htmlToBeInserted = '';
        [...Array(9)].forEach((_, index) => {
            htmlToBeInserted += `<div class="hole hole${index}">
                                    <div class="mole"></div>
                                </div>`;
        });
        game.innerHTML = htmlToBeInserted;
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) this.peep();
        }, time);
    }

    this.updateTime = () => {
        setTimeout(() => {
            if (!timeUp) {
                timeText.textContent = timeText.textContent - 1;
                this.updateTime();
            }
        }, 1000);
    }

    this.startGame = () => {
        playerName = (inputName.value == "") ? "Anonymous" : inputName.value;

        timeText.textContent = (gameTime / 1000);
        scoreBoard.textContent = 0;
        score = 0;
        levelText.textContent = 1;
        level = 1;

        timeUp = false;
        this.peep();
        this.updateTime();
        setTimeout(() => this.finishGame(), gameTime);
    }

    this.sortPlayers = () => {
        players.sort((player1, player2) => player1.score - player2.score);
    }

    this.finishGame = () => {
        timeUp = true;
        players.push({ 'name': playerName, 'score': score });
        this.sortPlayers();
        this.updateScores();
        alert("El juego acabo!");
    }

    this.updateScores = () => {
        scoreCard.innerHTML = "";
        players.slice(0, 5).forEach(player => {
            scoreCard.innerHTML += `<b>${player.name} ${player.score}</b><br>`;
        })
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        let audioToPlay = failAudio;
        if (e.target.className == elementToHit) {
            score++;
            e.target.classList.remove('up');
            scoreBoard.textContent = score;
            this.manageLevels();
            audioToPlay = hitAudio;
        }
        let audio = document.getElementById(audioToPlay);
        audio.play();
    }

    this.manageLevels = () => {
        if (score > 5) {
            maxPeepTime = 700;
            level++;
            levelText.textContent = level;
        }
    }
}