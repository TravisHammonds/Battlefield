
let selectedPegClicked = false;
let moves = 0;
let selectedPeg;
let selectedPegColor;
let selectedPegId;
let openSpace = $(".open");

console.log(selectedPegClicked, moves, selectedPeg, selectedPegColor, 
    selectedPegId, openSpace);

$(document).on('click', '.peg', function () {
    selectedPeg = $(this);
    selectedPegColor = $(this).attr("title");
    selectedPegClicked = true;
    selectedPegId = selectedPeg.attr("id");
});

$(document).on('click', '.open', function () {
    if (selectedPegClicked === true) {
        makeColoredSpace(openSpace, selectedPegColor);
        addPegClass(openSpace);
        removeOpenClass(openSpace)
        makeOpen(selectedPeg);
        resetVariables();
    }
});

$(document).on('click', '#reset', function () {
    resetBoard();
});

function makeOpen(peg) {
    $(peg).removeClass("peg");
    $(peg).addClass("open");
    $(peg).attr("title", "");
}

function resetVariables() {
    selectedPegClicked = false;
    moves++;
    selectedPeg = undefined;
    selectedPegColor = undefined;
    selectedPegId = undefined;
    openSpace = $(".open");
    console.log("new variables:");
    console.log(selectedPegClicked, moves, selectedPeg, selectedPegColor, 
    selectedPegId, openSpace);
}

function resetBoard() {
    resetVariables();
    for (i=1; i<=8; i++) {
        var greenSpaceReset = $("#g"+i);
        var color = 'green';
        addPegClass(greenSpaceReset);
        removeOpenClass(greenSpaceReset);
        makeColoredSpace(greenSpaceReset, color);
    }

    for (i=1; i<=8; i++) {
        var yellowSpaceReset = $("#y"+i);
        var color = 'yellow';
        addPegClass(yellowSpaceReset);
        removeOpenClass(yellowSpaceReset);
        makeColoredSpace(yellowSpaceReset, color);
    }

    makeOpen($("#open-space")); 
}

function addPegClass(peg) {
    $(peg).addClass("peg");
}

function removeOpenClass(peg) {
    $(peg).removeClass("open");
}

function makeColoredSpace(peg, color) {
    $(peg).attr("title", color);

}

function increaseMoves() {
    
}