/*
 * jQuery tag system
 * By: Mohamed Mahrous [https://github.com/mmahrous] to contact me [m.mahrous.94@gmail.com]
 * Version 0.2
 * Last Modified: 03/02/2015
 *
 * Copyright 2015 Mahrous
 * You may use this project under MIT or GPL licenses.
 */

$( document ).ready(function() {

// to clear the text box form old values
$('.add-tag').click(function(){
	$('.add-tag').val("");
});


// to add the tag into a span a well formed visual tags
$('#text').keypress(function (e) {
  // e = 13 means "Enter" button
  if (e.which == 13) {
  	if(!$('.add-tag').val()){
  		alert('Plaese add something.')
  	}
  else{ $('.tagedit-list').append("<li class='tagedit-listelement tagedit-listelement-old'><span>"+$('#text').val()+"</span><a class='tagedit-close' title='Remove from list.'>x</a></li>");
	 $('.add-tag').val("");
  }}
});
// when submit the form the data will be saved into an input type text but hidden that you will use the value later in subbmision  
$(".form").submit(function(){
	var optionTexts = [];
	$(".tagedit-list span").each(function() { optionTexts.push($(this).text()) });
	var quotedCSV = optionTexts.join(', ') ;
	$('#tag').val(quotedCSV);
  alert(quotedCSV);
});

// to prevent form from being submitted when hit enter 
$('form').bind("keypress", function(e) {
  if (e.keyCode == 13) {               
    e.preventDefault();
    return false;
  }
});

// to remove a added tag
$('.tagedit-close').live('click', function() {
    $(this).closest('li').remove();
});

});