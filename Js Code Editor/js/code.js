var toggleButton = document.querySelectorAll('.toggle');
var panel = document.getElementsByClassName('.panel');

for(var i=0;i<toggleButton.length;i++){
toggleButton[i].addEventListener("mouseover", function(){
    $(this).toggleClass('buttonHover');
});
toggleButton[i].addEventListener("mouseout", function(){
    $(this).toggleClass('buttonHover');
});
}

$(document).ready(function() {
    $('.toggle').click(function(){
        $(this).toggleClass('activeClass');

        var tabId = $(this).attr("id") + "Box";

        $("#"+tabId).toggleClass('hidden');
    });

    $("#textbox").height($(window).height() - $('#topBar').height());
    $("#cssBox").height($(window).height() - $('#topBar').height());
    $("#jsBox").height($(window).height() - $('#topBar').height());

     $("panel").width($(window).width()/2);
     $(".panel").height($(window).height() - $('#topBar').height());

    $(".textarea").on('keyup change paste', function(){
        $('.panel').contents().find("html").html("<html><head><style type='text/css'>" + $("#cssBox").val() + "</style></head></body>" + $("#textbox").val() + "</head></html>" );
    });
});