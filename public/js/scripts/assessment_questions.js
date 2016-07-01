var quizModel = [
       {
           "question" : "Q1: Who came up with the theory of relativity?",
           // "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
           "choices" : [
                                   "Sir Isaac Newton",
                                   "Nicolaus Copernicus",
                                   "Albert Einstein",
                                   "Ralph Waldo Emmerson"
                               ],
           "correct" : "Albert Einstein",
           "explanation" : "Albert Einstein drafted the special theory of relativity in 1905.",
       },
       {
           "question" : "Q2: Who is on the two dollar bill?",
           // "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
           "choices" : [
                                   "Thomas Jefferson",
                                   "Dwight D. Eisenhower",
                                   "Benjamin Franklin",
                                   "Abraham Lincoln"
                               ],
           "correct" : "Thomas Jefferson",
           "explanation" : "The two dollar bill is seldom seen in circulation. As a result, some businesses are confused when presented with the note.",
       },
       {
           "question" : "Q3: What event began on April 12, 1861?",
           // "image" : "",
           "choices" : [
                                   "First manned flight",
                                   "California became a state",
                                   "American Civil War began",
                                   "Declaration of Independence"
                               ],
           "correct" : "American Civil War began",
           "explanation" : "South Carolina came under attack when Confederate soldiers attacked Fort Sumter. The war lasted until April 9th 1865.",
       },
 ];
    

$(document).ready(function() {


      var loading = $('#loadbar').hide();
      $(document)
      .ajaxStart(function () {
          loading.show();
      }).ajaxStop(function () {
        loading.hide();
      });
      
      $("label.btn").on('click',function () {
        var choice = $(this).find('input:radio').val();
        $('#loadbar').show();
        $('#quiz').fadeOut();
        setTimeout(function(){
             $( "#answer" ).html(  $(this).checking(choice) );      
              $('#quiz').show();
              $('#loadbar').fadeOut();
             /* something else */
        }, 1500);
      });

      $ans = 3;

      $.fn.checking = function(ck) {
          if (ck != $ans)
              return 'INCORRECT';
          else 
              return 'CORRECT';
      }; 



});

