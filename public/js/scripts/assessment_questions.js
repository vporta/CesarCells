
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
    console.log('choice');
      $('#loadbar').show();
      $('#quiz').fadeOut();

      setTimeout(function(){
           // $( "#answer" ).html(  $(this).checking(choice) );      
            $('#quiz').show();
            $('#loadbar').fadeOut();
           /* something else */
      }, 1500);
  });

  //dashboard
  $('[data-toggle="offcanvas"]').click(function(){
        $("#navigation").toggleClass("hidden-xs");
  });
});



      



