
const yellowPiece = $(".yellow-piece");

const greenPiece = $(".green-piece");

const openSpace = $("#open-space");

$("i").click(function () {
    let selectedPeg = $(this);
    let selectID = $(selectedPeg).attr('id');
    let selectClass = $(selectedPeg).attr('class');
    $('#open-space').click(function () {
        let openSpace = $(this);
        let openID = $(openSpace).attr('id');
        let openClass = $(openSpace).attr('class');
        $(openSpace).attr('id', selectID);
        $(openSpace).attr('class', selectClass);
        $(selectedPeg).attr('id', openID);
        $(selectedPeg).attr('class', openClass);
    }); 
});

// $('#g1').click(function () {
//     $(this).css('color', 'red');
// });
