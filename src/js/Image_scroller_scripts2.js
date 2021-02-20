$('#imgs').imageScroll({
    orientation:"left",
    speed:600,
    interval:1000,
    hoverPause:true,
    callback:function(){
      var ordinal = $(this).find("img").first().attr("src");
      <!-- console.log(ordinal); -->
      $(this).next("span").text("CallbackDisplay: hidden "+ordinal+"!");
    }
});