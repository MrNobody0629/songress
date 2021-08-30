/**
 *
 * HTML5 Audio player with playlist
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */
jQuery(document).ready(function() {

    // inner variables
    var song;
    var tracker = $('#minfill');
    var volume = $('.volume');
    var songs = ["Song1.mp3","Song2.mp3","Song3.mp3","8 Parche-(Mr-Jatt.com).mp3","Songs/Billo - J Star.mp3"];
    var poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg","8-Parche-Baani-Sandhu.jpg","Album/j-Star-Billo-video-song1.jpg"];

    function initAudio(elem) {
        var url = elem.attr('Songs');
        var title = elem.text();
        var cover = elem.attr('poster');
        var artist = elem.attr('artist');

        $('#minmain .title').text(title);
        $('#minmain .artist').text(artist);
        $('#minmain #minimage').css('background-image','url(data/' + cover+')');;

        songs = new Audio('data/' + url);

        // timeupdate event listener
        songs.addEventListener('timeupdate',function (){
            var curtime = parseInt(songs.currentTime, 10);
            tracker.slider('value', curtime);
        });

        $('songs').removeClass('active');
        elem.addClass('active');
    }
    function playAudio() {
        songs.play();

        tracker.slider("option", "max", songs.duration);

        $('#minplay').addClass('hidden');
        $('#minpause').addClass('visible');
    }
    function stopAudio() {
        songs.pause();

        $('#minplay').removeClass('hidden');
        $('#minpause').removeClass('visible');
    }

    // play click
    $('#minplay').click(function (e) {
        e.preventDefault();

        playAudio();
    });

    // pause click
    $('#minpause').click(function (e) {
        e.preventDefault();

        stopAudio();
    });

    // forward click
    $('#minnext').click(function (e) {
        e.preventDefault();

        stopAudio();

        var next = $('.playlist li.active').next();
        if (next.length == 0) {
            next = $('.playlist li:first-child');
        }
        initAudio(next);
    });

    // rewind click
    $('#minpre').click(function (e) {
        e.preventDefault();

        stopAudio();

        var prev = $('.playlist li.active').prev();
        if (prev.length == 0) {
            prev = $('.playlist li:last-child');
        }
        initAudio(prev);
    });

    // show playlist
    $('.pl').click(function (e) {
        e.preventDefault();

        $('.playlist').fadeIn(300);
    });

    // playlist elements - click
    $('.playlist li').click(function () {
        stopAudio();
        initAudio($(this));
    });

    // initialization - first element in playlist
    initAudio($('.playlist li:first-child'));

    // set volume
    songs.volume = 0.8;

    // initialize the volume slider
    volume.slider({
        range: 'min',
        min: 1,
        max: 100,
        value: 80,
        start: function(event,ui) {},
        slide: function(event, ui) {
            songs.volume = ui.value / 100;
        },
        stop: function(event,ui) {},
    });

    // empty tracker slider
    tracker.slider({
        range: 'min',
        min: 0, max: 10,
        start: function(event,ui) {},
        slide: function(event, ui) {
            songs.currentTime = ui.value;
        },
        stop: function(event,ui) {}
    });
});