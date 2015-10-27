/**
 * Created by dndeli on 10/14/2015.
 */




var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;

function card_clicked(card_container_element) {
    var back_element = $(card_container_element).find('.back');
    $(back_element).hide();
    //console.log(card_container_element , "Card contains");
    var front_element = $(card_container_element).find('.front img');

    var second_card_clicked = $(front_element).attr('src');
    // console.log($(front_element).attr('front_src')+"front element type");
    //console.log(front_element,  "front element contains");
    if (first_card_clicked == null) {
        console.log('this is the 1st card clicked');
        first_card_clicked = second_card_clicked;
    //    console.log(" 1st card " + first_card_clicked);
    } else {
        console.log('this is the 2nd card clicked');
        if (first_card_clicked == second_card_clicked) {
            console.log('they match');

            first_card_clicked = null;
            //counter increase here
            var x = ++match_counter;
            console.log("matches: " + x);



        } else {

            console.log('they do not match');
            setTimeout(function () {
                first_card_clicked = null;
                second_card_clicked = null;
                $('.back').show();
            }, 2000);
        }
    }
}