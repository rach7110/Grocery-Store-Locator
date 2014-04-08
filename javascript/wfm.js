// window.onload = (function(){
//   alert("Works!");
// });
$(document).ready(function() {
	// SIDEBAR: TOGGLES TO SHOW/HIDE SUB NAVIGATION ITEMS WHEN CATEGORY IS CLICKED.
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
	// ***************************************************
	// APPENDS STORE ADDRESS TO WEBPAGE WHEN LOCATION IS SELECTED FROM DROPDOWN MENU.
	$('form').on('change', 'select', function(){
    var arrayAddress = [];
    var address01 = "";
    var address02 = "";
    $('select').each(function(){
      arrayAddress = $(this.options[this.selectedIndex]).data('address');
      var arr = arrayAddress.split(',');
      address01 = arr[0];
      address02 = arr[1];
      telephone = arr[2];
      time = arr[3];
      name = $("select option:selected").text();

      if (jQuery.type(address01) === "string"){
        $('#address').append('<p><strong>' + name + '</strong></p>');  
        $('#address').append('<p>' + address01 + '</p>');
        $('#address').append('<p>' + address02 + '</p>');
        $('#address').append('<p>Phone: ' + telephone + '</p>');
        $('#address').append('<p>Time: ' + time + '</p>'); 
      } else {
        alert("Fail");
      };

    });
  });
});

