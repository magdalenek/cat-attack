/*******************************************************************
 ********************** Super Cat plugin ***************************
 ***** Bugs, issues and suggestions: ms915@ic.ac.uk ****************
 ******************************************************************/

$(document).ready(function() {

  var cat = chrome.extension.getURL("images/crying.jpg");

    var myAudio = new Audio();        
    myAudio.src = "Sad-cat.mp3";
    myAudio.play(); 

	$('img').each(function(index, image){
    	$(image).attr('src', cat);
  	});
  	$('div').each(function(index, image){
    	$(image).attr('src', cat);
  	});

});




