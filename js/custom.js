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
    
	$('.clickedReviews').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#reviews").offset().top}, 800);
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
	
	$('.clickedAboutUs').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#aboutus").offset().top}, 800);
    });
    
    $('.clickedContact').click(function() {
        $('html,body').animate({
    	   scrollTop: $("#contact").offset().top}, 800);
    })
});