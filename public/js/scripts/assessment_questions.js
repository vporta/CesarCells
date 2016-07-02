
$(document).ready(function() {
var counter = 1;
var limit = 10;

var loading = $('#loadbar').hide();
$(document)
.ajaxStart(function () {
    loading.show();
}).ajaxStop(function () {
  loading.hide();
});
  
$("label.btn").on('click',function () {
  var choice = $(this).find('input:radio').val();
  // console.log(choice);
    $('#loadbar').show();
    $('#quiz').empty();

    setTimeout(function(){
         // $( "#answer" ).html(  $(this).checking(choice) );      
          $('#quiz').show();
          $('#loadbar').fadeOut();
         /* something else */
    }, 1500);
    });
//searchbar
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
});

      



