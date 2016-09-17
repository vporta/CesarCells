//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").css('background-color', 'white');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").css('background-color', 'transparent');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).scroll(function(){
    if($(document).scrollTop()>=$(document).height()/5)
        $("#spopup").show("slow");else $("#spopup").hide("slow");
});
function closeSPopup(){
    $('#spopup').hide('slow');
}

// nav.navbar.navbar-default.navbar-fixed-top




            

                
