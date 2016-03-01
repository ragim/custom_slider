var images = ["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.png","../images/5.jpg","../images/5.jpg"];
var slider_width = 1000;
var slider_height = slider_width/4;
var slider_speed = 600;
var slider_count = images.length;
var slide_pictures_count = 1;
var displayed_images_count = 3;
var content_item_width = 100/displayed_images_count-1;
var counter = slider_count-displayed_images_count;
$(document).ready(function () {
   $("#slider").css("width",slider_width+"px");
   $("#slider").css("height",slider_height+"px");
    for(var i =0; i<slider_count;i++)
    {

        $("#content").append("<div style='width:"+content_item_width+ "%; margin-right: 1%; background: pink; display: inline-block'>"+i+"</div>");
        }
    $("#content div").css("height",slider_height);

    $("#left_button").click(function () {
        var to_move = slide_pictures_count*content_item_width+1;
        console.log(counter);
        if(counter<slider_count-displayed_images_count)
        {
            $("#content").animate({
                'left':'+='+to_move+'%'
            },slider_speed);
            counter++;
        }
    });

    $("#right_button").click(function () {
        var to_move = slide_pictures_count*content_item_width+1;
        console.log(counter);
        if(counter>0){
            $("#content").animate({
                'left':'-='+to_move+'%'
            },slider_speed);
            counter--;
        }
    });



});