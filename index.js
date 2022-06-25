let selectedPegClicked = false;
let moves = 0;
let selectedPeg;
let selectedPegColor;
let selectedPegId;
let openSpace = $(".open");
let timer = $("#timer");
let timerInterval;
let gameStart = false;

$(document).on('click', "#new-game", function(){
    gameStart = true;
    resetTimer();
    startTimer();
});

$(document).on('click', '.peg', function () {
    if (gameStart === true) {
    selectedPeg = $(this);
    selectedPegColor = convertPegColor();
    selectedPegClicked = true;
    selectedPegId = selectedPeg.attr("id");
    }
});

$(document).on('click', '.open', function () {
    if (selectedPegClicked === true) {
        makeColoredSpace(openSpace, selectedPegColor);
        addPegClass(openSpace);
        removeOpenClass(openSpace)
        makeOpen(selectedPeg);
        nextSequence();
        increaseMoves();
    }
});

$(document).on('click', '#reset', function () {
    resetBoard();
});

function makeOpen(peg) {
    $(peg).removeClass("peg");
    $(peg).addClass("open");
    $(peg).removeClass(selectedPegColor);
}

function nextSequence() {
    selectedPegClicked = false;
    selectedPeg = undefined;
    selectedPegColor = undefined;
    selectedPegId = undefined;
    openSpace = $(".open");
    console.log("new variables:");
    console.log(selectedPegClicked, moves, selectedPeg, selectedPegColor,
        selectedPegId, openSpace);
}

function resetBoard() {
    resetTimer();
    resetMoves();
    for (i = 1; i <= 8; i++) {
        var topSpaceReset = $("#t" + i);
        topSpaceReset.removeClass('yellow');
        addPegClass(topSpaceReset);
        removeOpenClass(topSpaceReset);
        makeColoredSpace(topSpaceReset, 'green');
    }

    for (i = 1; i <= 8; i++) {
        var bottomSpaceReset = $("#b" + i);
        bottomSpaceReset.removeClass('green');
        addPegClass(bottomSpaceReset);
        removeOpenClass(bottomSpaceReset);
        makeColoredSpace(bottomSpaceReset, 'yellow');
    }

    makeOpen($("#middle-space"));
    nextSequence();
    resetTimer();
    startTimer();

}

function addPegClass(peg) {
    $(peg).addClass("peg");
}

function removeOpenClass(peg) {
    $(peg).removeClass("open");
}

function makeColoredSpace(peg, color) {
    $(peg).addClass(color);
}

function increaseMoves() {
    moves++;
    $("#moves").text("Moves: " + moves);
}

function resetMoves() {
    moves = 0;
    $("#moves").text("Moves: " + moves);
}

//Timer
function startTimer() {
    var sec = 0;

    function pad(val) {
        return val > 9 ? val : "0" + val;
    }
    timerInterval = setInterval(function () {
        $("#seconds").html(pad(++sec % 60));
        $("#minutes").html(pad(parseInt(sec / 60, 10)));
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    $("#seconds").html("00");
    $("#minutes").html("00");
}

function convertPegColor() {
    let colorRGB = $(selectedPeg).css("color");

    if (colorRGB === 'rgb(0, 100, 0)') {
        return 'green'; 
    } else 
    if (colorRGB === 'rgb(255, 255, 0)') {
        return 'yellow';
    }
}

