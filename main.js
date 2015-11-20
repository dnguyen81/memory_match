/**
 * Created by dndeli on 10/14/2015.
 */




var first_card_clicked = null;
var second_card_clicked = null;
var card_container_one = null;
var card_container_two = null;
var total_possible_matches;
var match_counter = 0;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
//=============theme music integration==========//
var theme_music = true;

//============card creation arrays====================//
var new_card_array = [];
var random_card_array = [];

//============original image array==============//
var front = [];
//var front = [
//
//    "images/Assault.png",
//    "images/CR90a.png",
//    "images/Gladiator.png",
//    "images/isd.png",
//    "images/Mc30c.png",
//    "images/Mc80.png",
//    "images/nebulon.png",
//    "images/Raider.png",
//    "images/Victory.png",
//    'images/awing.png',
//    'images/bobaship.png',
//    'images/BWing.png',
//    'images/tie.png',
//    'images/falcon.png',
//    'images/gauntlet.png',
//    'images/JediFighter.png',
//    'images/tieint.png',
//    'images/xw1.png'
//];
//=======multiple back cards that randomize during game creation==========//
var back = [
    "images/rebel2.png",
    "images/imperial2.png",
    "images/mando.png",
    "images/Sith.png",
    "images/jedi.png"
];
var random_back = [];

function randomize_back () {

    back.sort(function(){
       return 0.5 - Math.random()
    });
    random_back = back[0];
}

function randomize_array() {
    random_card_array.sort(function () {
        return 0.5 - Math.random()
    });
    console.log("This is the randomized array", random_card_array);
}
function card_set1(){
    front = [
        "images/Assault.png",
        "images/CR90a.png",
        "images/Gladiator.png",
        "images/isd.png",
        "images/Mc30c.png",
        "images/Mc80.png",
        "images/nebulon.png",
        "images/Raider.png",
        "images/Victory.png"
        //'images/awing.png',
        //'images/bobaship.png',
        //'images/BWing.png',
        //'images/tie.png',
        //'images/falcon.png',
        //'images/gauntlet.png',
        //'images/JediFighter.png',
        //'images/tieint.png',
        //'images/xw1.png'
    ];
    //front.splice(9,9);
}
function card_set2(){
    front = [
        //"images/Assault.png",
        //"images/CR90a.png",
        //"images/Gladiator.png",
        //"images/isd.png",
        //"images/Mc30c.png",
        //"images/Mc80.png",
        //"images/nebulon.png",
        //"images/Raider.png",
        //"images/Victory.png",
        'images/awing.png',
        'images/bobaship.png',
        'images/BWing.png',
        'images/tie.png',
        'images/falcon.png',
        'images/gauntlet.png',
        'images/JediFighter.png',
        'images/tieint.png',
        'images/xw1.png'
    ];
    //front.splice(0,9);
}
//==========Easy board creation, 6 cards to match ============//
function easy(){
    total_possible_matches = 3;
    reset_stats();

    var gamesplayed = ++games_played;
    $('.games-played .value').html(gamesplayed);
    console.log('create card container clicked');
    game_start.play();
    $('.col-sm-2').remove();
    display_stats();
    attempts = 0;

    front.splice(0,6);
        new_card_array = front;
        random_card_array = front.concat(new_card_array);
        console.log("this is the random array ", random_card_array);
        randomize_array();

    randomize_back();
    for (var i = 0; i < random_card_array.length; i++) {
        var card_div = $('<div>').addClass('card').attr('onclick', 'card_clicked(this)');
        var front_div = $('<div>').addClass('front');
        var back_div = $('<div>').addClass('back');
        var img_front = $('<img>').attr('src', random_card_array[i]);
        var img_back = $('<img>').addClass('back').attr('src', random_back);
        var colsm = $('<div>').addClass('col-sm-2');
        front_div.append(img_front);
        back_div.append(img_back);
        card_div.append(front_div);
        card_div.append(back_div);
        colsm.append(card_div);
        $('#game-area').find('.row1').append(colsm);
    }
}

//===========medium board creation with six matches=======////////////
function medium(){
    total_possible_matches = 6;
        reset_stats();

    var gamesplayed = ++games_played;
    $('.games-played .value').html(gamesplayed);
    console.log('create card container clicked');
    game_start.play();
    $('.col-sm-2').remove();
    display_stats();
    attempts = 0;
    front.splice(0,3);
    new_card_array = front;
    random_card_array = front.concat(new_card_array);
    console.log("this is the random array ", random_card_array);
    randomize_array();

    randomize_back();
    for (var i = 0; i < random_card_array.length; i++) {
        var card_div = $('<div>').addClass('card').attr('onclick', 'card_clicked(this)');
        var front_div = $('<div>').addClass('front');
        var back_div = $('<div>').addClass('back');
        var img_front = $('<img>').attr('src', random_card_array[i]);
        var img_back = $('<img>').addClass('back').attr('src', random_back);
        var colsm = $('<div>').addClass('col-sm-2');
        front_div.append(img_front);
        back_div.append(img_back);
        card_div.append(front_div);
        card_div.append(back_div);
        colsm.append(card_div);
        $('#game-area').find('.row1').append(colsm);
    }
}

//=================Hard difficulty board creation, 9 matches, 18 cards================//
function hard() {

    total_possible_matches = 9;
    reset_stats();

    var gamesplayed = ++games_played;

    $('.games-played .value').html(gamesplayed);

    var difficult = $(this).text;
    console.log('create card container clicked');
    game_start.play();
    $('.col-sm-2').remove();
    display_stats();
    attempts = 0;
  //  difficulty(difficult);
 //   for (var i = 0; i < front.length; i++) {

        new_card_array = front;
        random_card_array = front.concat(new_card_array);
        console.log("this is the random array ", random_card_array);
        randomize_array();
  //  }
    randomize_back();
    for (var i = 0; i < random_card_array.length; i++) {
        var card_div = $('<div>').addClass('card').attr('onclick', 'card_clicked(this)');
        var front_div = $('<div>').addClass('front');
        var back_div = $('<div>').addClass('back');
        var img_front = $('<img>').attr('src', random_card_array[i]);
        var img_back = $('<img>').addClass('back').attr('src', random_back);
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
    if (card_container_one != null && card_container_two != null){
        $('.back').attr('clicked');
    }else{
        $('.back').removeAttr('clicked');
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
            laser.play();
            first_card_clicked = null;
            card_container_one = null;
            card_container_two = null;
            //counter increase here
            var x = ++match_counter;
            console.log("matches: " + x);
            attempt = ++attempts;
            $('.attempts .value').html(attempt);
        } else {

            console.log('they do not match');
            setTimeout(function () {
                $(card_container_one).removeClass('clicked', 'flipBack');
                $(card_container_two).removeClass('clicked', 'flipBack');
                $('.back').show('fast');
                first_card_clicked = null;
                second_card_clicked = null;
                card_container_one = null;
                card_container_two = null;
                attempt = ++attempts;
                $('.attempts .value').html(attempt);
            }, 700);
        }
 //   }
    }
   }
    if (match_counter == total_possible_matches) {
        game_over.play();
        alert("Board cleared. Congratulations!!");

    }
}

function display_stats() {
    if (total_possible_matches == 3){
        var acc = (6 / attempts) * 100;
    }else if (total_possible_matches == 6){
        var acc = (12 / attempts) * 100;
    }else
    var acc = (18 / attempts) * 100;
    var accfixed = acc.toFixed(2) + "%";
    console.log(acc);
    console.log(accfixed);
    if (attempts == 0) {
        $('.accuracy .value').html('0%');
    } else {
        $('.accuracy .value').html(accfixed);
    }


}
function reset_stats(){

   // attempts = 0;
    matches = 0;
    match_counter = 0;
}
function reset_button() {

    display_stats();
    reset_stats();
    $('.back').show();
    $('.col-sm-2').remove();

    //front = [
    //    "images/Assault.png",
    //    "images/CR90a.png",
    //    "images/Gladiator.png",
    //    "images/isd.png",
    //    "images/Mc30c.png",
    //    "images/Mc80.png",
    //    "images/nebulon.png",
    //    "images/Raider.png",
    //    "images/Victory.png",
    //    'images/awing.png',
    //    'images/bobaship.png',
    //    'images/BWing.png',
    //    'images/tie.png',
    //    'images/falcon.png',
    //    'images/gauntlet.png',
    //    'images/JediFighter.png',
    //    'images/tieint.png',
    //    'images/xw1.png'
    //];
}

$(document).ready(function () {
//========= Theme Music ==============//

    sw_theme.play();

    $("#theme_music").on('click', function(){
        if (theme_music === true) {
            theme_music = false;
            sw_theme.pause();
            $("#theme_music").html("Play Music")
        }else {
            sw_theme.play();
            $("#theme_music").html("Stop Music");
            theme_music = true;
        }
    });


});

//=====another attempt at difficulty, will come back to this later===========//
//function difficulty(difficult){
//    switch (difficult) {
//
//        case 'Easy':
//            front.splice(0,6);
//            new_card_array = front;
//            random_card_array = front.concat(new_card_array);
//            console.log("this is the random array ", random_card_array);
//            randomize_array();
//            break;
//        case 'Medium':
//            front.splice(0,3);
//            new_card_array = front;
//            random_card_array = front.concat(new_card_array);
//            console.log("this is the random array ", random_card_array);
//            randomize_array();
//            break;
//        case 'Hard':
//            new_card_array = front;
//            random_card_array = front.concat(new_card_array);
//            console.log("this is the random array ", random_card_array);
//            randomize_array();
//            break;
//
//    }
//}