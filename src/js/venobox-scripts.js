var test = $('.venobox').venobox();
	
// close current item clicking on .closeme
$(document).on('click', '.closeme', function(e){
    test.VBclose();
});

// go to next item in gallery clicking on .next
$(document).on('click', '.next', function(e){
    test.VBnext();
});

// go to previous item in gallery clicking on .previous
$(document).on('click', '.previous', function(e){
    test.VBprev();
});