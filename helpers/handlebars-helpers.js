Handlebars.registerHelper("title", function(fn) {
  $('h1').html(fn(this));
 
  return "";
});
