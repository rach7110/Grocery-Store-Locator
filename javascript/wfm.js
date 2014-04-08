// window.onload = (function(){
//   alert("Works!");
// });

$(document).ready(function() {
  $('#category01 p').click(function() {
      $('#category01 .sub-nav').toggleClass('visible');
  });
  $('#category02 p').click(function() {
      $('#category02 .sub-nav').toggleClass('visible');
  });
  $('#category03 p').click(function() {
      $('#category03 .sub-nav').toggleClass('visible');
  });
  $('#category04 p').click(function() {
      $('#category04 .sub-nav').toggleClass('visible');
  });
  $('#category05 p').click(function() {
      $('#category05 .sub-nav').toggleClass('visible');
  });
});