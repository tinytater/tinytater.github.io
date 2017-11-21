/* Smooth Navbar Scrolling */

$(document).ready(function() {
    $('.clickedHome').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#home").offset().top}, 800);
    });
	
	$('.clickedDownload').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#download").offset().top}, 800);
    });
    
    $('.clickedStory').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#story").offset().top}, 800);
    });
    
    $('.clickedFeatures').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#features").offset().top}, 800);
    })
    
    $('.clickedFAQs').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#faq").offset().top}, 800);
    })
	
	$('.clickedWhoWeAre').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#whoweare").offset().top}, 800);
    });
    
    $('.clickedSupport').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#support").offset().top}, 800);
    })
});