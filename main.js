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


function card_clicked(card_container_element) {
    var back_element = $(card_container_element).find('.back');
    $(back_element).hide();

    var front_element = $(card_container_element).find('.front img');

    var second_card_clicked = $(front_element).attr('src');
    if (first_card_clicked == null) {
        console.log('this is the 1st card clicked');
        first_card_clicked = second_card_clicked;
        var attempt = ++attempts;
        $('.attempts .value').html(attempt);
    } else {
        console.log('this is the 2nd card clicked');
        if (first_card_clicked == second_card_clicked) {
            console.log('they match');

            first_card_clicked = null;
            //counter increase here
            var x = ++match_counter;
            console.log("matches: " + x);
            var attempt = ++attempts;
            $('.attempts .value').html(attempt);

        } else {

            console.log('they do not match');
            setTimeout(function () {
                $('.back').show();
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
    var acc = (18 / attempts) * 100 + "%";
    $('.accuracy .value').html(acc);
    console.log(acc);
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