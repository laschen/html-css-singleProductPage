$(document).ready(function(){
         
    if ($(window).width() < 690) {
          $(".menu-item").hide();
    };
    
    $(window).resize(function(){

        if($(window).width() > 689){
            $(".menu-item").show();
        } else {
            $(".menu-item").hide(); 
        }
    }); 
    
    $("#menu").on('click', function(){
       $(".menu-item").toggle(500); 
    });
    
    $(".bottom-left img").on('click', function(){
        var photo = $(this).attr("src");
        console.log(photo);
        $(".top-left img").attr("src", photo);
    });
    
    
});