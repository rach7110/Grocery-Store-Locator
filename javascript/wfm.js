// window.onload = (function(){
//   alert("Works!");
// });
$(document).ready(function() {
// *******************************************************************************
// SIDEBAR: TOGGLES TO SHOW/HIDE SUB NAVIGATION ITEMS WHEN CATEGORY IS CLICKED.
// *******************************************************************************
  $('#category01 p').click(function() {
      ('#category01 .sub-nav').toggleClass('visible');
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
// *******************************************************************************
// APPENDS STORE ADDRESS TO WEBPAGE WHEN LOCATION IS SELECTED FROM DROPDOWN MENU.
// *******************************************************************************
  $('form').on('change', 'select', function(){
    $('#address').empty();
    var arrayAddress = [];
    $('select').each(function(){
      arrayAddress = $(this.options[this.selectedIndex]).data('store');
      var arr = arrayAddress.split(',');
      info01 = arr[0];
      info02 = arr[1];
      info03 = arr[2];      
      info04 = arr[3];
      info05 = arr[4];
      name = $("select option:selected").text();
      $('#address').append('<p><strong>' + name + '</strong></p>')
      var i = 0
      while ((i < arr.length) && (arr[i].length > 0)){ //2nd validation confirms the string is not empty.
        $('#address').append('<p>' + arr[i] + '</p>');
        i ++ ;
      };
    });
  });
});