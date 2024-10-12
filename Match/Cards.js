
var errors = 0;
var cardList = [
    "jjproject",
    "JL",
    "JP",
    "JP2",
    "JW",
    "YK",
    "YK1",
    "YK2",
    "YK3",
    "YK4"
]

var cardSet;
var board = [];
var rows = 4;
var columns = 5;

var card1Selected;
var card2Selected;

window.onload = function () {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);

    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);

        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".png";
            card.classList.add("card");
            card.addEventListener("click" , selectCard);
            document.getElementById("board").append(card);
        }
        board.push(row);

    }
    console.log(board);
    setTimeout(hideCards, 1000);

    function hideCards() {
        for (let r = 0; r < rows; r++) {
            for ( let c = 0; c < columns; c++) {
                let card = document.getElementById(r.toString() + "-" + c.toString());
                card.src = "G7.png";
            }
        }
    }
function selectCard() {
    if (this.src.includes("G7")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".png";
        }

        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card1Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".png";
            setTimeout(update, 1000);
        }

    }
}
}

function update() {
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "G7.png";
        card2Selected.src = "G7.png";
        errors +=1;
        document.getElementById("errors").innerText = errors;
    }

    card1Selected = null;
    card2Selected = null;
}