$(".trigger span").addClass("glyphicon glyphicon-plus");
$(".questionContainer").on('click', function(e){
  // console.log('hi');
  $(this).find(".questionDescription").slideToggle("down");
  $(this).find('.trigger span').toggleClass('glyphicon glyphicon-plus').toggleClass('glyphicon glyphicon-remove');
    
});