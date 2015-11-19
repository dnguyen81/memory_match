/**
 * Created by dndeli on 10/14/2015.
 */
var first_card_clicked = null;
var second_card_clicked = null;
var card_container_one = null;
var card_container_two = null;
var total_possible_matches = 9;
var match_counter = 0;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
//card creation
var new_card_array =[];
var random_card_array=[];
var front = [

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


function randomize_array (){
  random_card_array.sort(function() {return 0.5 - Math.random()});
    console.log("This is the randomized array", random_card_array);
}
function create_card_container(){
console.log('create card container clicked');
   reset();
    for (var i =0; i<front.length; i++){

        new_card_array[i] = front[i];

     //   front.splice(i,1);
        random_card_array = front.concat(new_card_array);
       console.log("this is the random array ", random_card_array);
        randomize_array ();
    }
    //while(i <random_card_array){
    //    var random_index=Math.floor(Math.random()*(random_card_array.length));
    //    create_card_container(random_card_array[random_index]);
    //    i++;
    //}

    for (var i = 0; i < random_card_array.length; i++){
    var card_div = $('<div>').addClass('card').attr('onclick', 'card_clicked(this)');
    var front_div = $('<div>').addClass('front');
    var back_div = $('<div>').addClass('back');
    var img_front = $('<img>').attr('src', random_card_array[i]);
    var img_back = $('<img>').addClass('back').attr('src', 'images/rebel.png');
    var colsm = $('<div>').addClass('col-sm-2');
    front_div.append(img_front);
    back_div.append(img_back);
    card_div.append(front_div);
    card_div.append(back_div);
    colsm.append(card_div);
    $('#game-area').find('.row1').append(colsm);
    }

}
function card_clicked(card_container_element) {
    var back_element = $(card_container_element).find('.back');
    $(back_element).hide('slow');

    var front_element = $(card_container_element).find('.front img');
    second_card_clicked = $(front_element).attr('src');
    var attempt;
    $(card_container_element).addClass('clicked');
    if (first_card_clicked == null) {
        card_container_one = card_container_element;
        console.log('this is the 1st card clicked');
        $(card_container_one).find('.back').addClass('flipBack');
        first_card_clicked = second_card_clicked;
        attempt = ++attempts;
        $('.attempts .value').html(attempt);
      //  return second_card_clicked;
    } else {
        console.log('this is the 2nd card clicked');
        card_container_two = card_container_element;
        if (first_card_clicked == second_card_clicked) {
            console.log('they match');
            $(card_container_one).find('.back').remove();
            $(card_container_two).find('.back').remove();
            first_card_clicked = null;
            //counter increase here
            var x = ++match_counter;
            console.log("matches: " + x);
            attempt = ++attempts;
            $('.attempts .value').html(attempt);
           // $(back_element).addClass('flipBack');
        } else {

      //      $('.card').removeClass('flipBack');
            console.log('they do not match');
            setTimeout(function () {
                $(card_container_one).removeClass('clicked', 'flipBack');
                $(card_container_two).removeClass('clicked', 'flipBack');
                $('.back').show('fast');
                //$('.back, second_card_clicked').show();
                first_card_clicked = null;
                second_card_clicked = null;
                attempt = ++attempts;
                $('.attempts .value').html(attempt);
            }, 1000);
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
    if(attempts ==0){
        $('.accuracy .value').html('0%');
    }else {
    $('.accuracy .value').html(accfixed);
    }
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
    $('.col-sm-2').remove();
}

$(document).ready(function () {




});
