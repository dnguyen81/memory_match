/**
 * Created by dndeli on 10/14/2015.
 */
var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

//card creation

/*var front = [

    "images/Assault.png",
    "images/CR90a.png",
    "images/Gladiator.png",
    "images/isd.png",
    "images/Mc30c.png",
    "images/Mc80.png",
    "images/nebulon.png",
    "images/Raider.png",
    "images/Victory.png"

];
var back = [
    "images/rebel.png"
];
var selected = [];
for (var i = 0; i < 9; i++){
    var randomInd = floor(random(front.length));
    var face = front[randomInd];
//push is repeated to give two copies of the face. Splice to remove the face from being placed again.
    selected.push(face);
    selected.push(face);
    front.splice(randomInd, 1);
}
*/

/*function newGame(){
    matches = 0;
    var output = '';
    front.front_shuffle();
    for(var i = 0; i < front.length; i++){
        output += '<div id="tile_'+i+'" onclick = "frontFlipTile(this, /''+front[i]+'\')"></div>';
    }
    document.getElementById('game-area').innerHTML = output;
}*/

function card_clicked(card_container_element) {
    var back_element = $(card_container_element).find('.back');
    $(back_element).hide('slow');

    var front_element = $(card_container_element).find('.front img');
    var second_card_clicked = $(front_element).attr('src');
    $(card_container_element).addClass('clicked');
    if (first_card_clicked == null) {
        console.log('this is the 1st card clicked');
        $(card_container_element).find('.back').addClass('flipBack');
        first_card_clicked = second_card_clicked;
        var attempt = ++attempts;
        $('.attempts .value').html(attempt);
        return second_card_clicked;
    } else {
        console.log('this is the 2nd card clicked');
        if (first_card_clicked == second_card_clicked) {
            console.log('they match');
            $(back_element).remove();
            first_card_clicked = null;
            //counter increase here
            var x = ++match_counter;
            console.log("matches: " + x);
            var attempt = ++attempts;
            $('.attempts .value').html(attempt);
            $(back_element).addClass('flipBack');
        } else {
            $('.card').removeClass('clicked');
            $(card_container_element).removeClass('flipBack');
            console.log('they do not match');
            setTimeout(function () {
                $('.back').show('fast');
                //$('.back, second_card_clicked').show();
                first_card_clicked = null;
                second_card_clicked = null;
                var attempt = ++attempts;
                $('.attempts .value').html(attempt);
            }, 2000);
        }
    }
    if (match_counter == total_possible_matches) {
        alert("Board cleared. Congratulations!!");

    }
}

function display_stats() {
    var acc = (18 / attempts) * 100;
    var accfixed = acc.toFixed(2) + "%";
    console.log(acc);
    console.log(accfixed);
    $('.accuracy .value').html(accfixed);

}
function reset() {

    var gamesplayed = ++games_played;
    $('.games-played .value').html(gamesplayed);
    console.log(gamesplayed);
    display_stats();
    accuracy = 0;
    attempts = 0;
    matches = 0;
    match_counter = 0;
    $('.back').show();
}