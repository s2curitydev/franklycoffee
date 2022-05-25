jQuery(function($){

    var ww = $(window).width();
    var mw = $(".menu_appe").width();
    
    console.log("window w"+ww+"menu w"+mw);
    $(".menu").css("height",mw);
    //$(".menu1").css("height",mw);
    
    if(ww>761){
        $(".menu1").css("height",mw);
        console.log("760보다큼");
    }
    else if(481<ww<760){
        $(".menu1").prependTo($(".sec2"));
        $(".menu1").css("height",mw-80);
        console.log("760보다 작음");
    }
    if(ww<=480){
        $(".menu1").prependTo($(".sec2"));
        $(".menu1").css("height",mw);
        console.log("완전작음");
    }

    $(window).resize(function(){  
        var ww = $(window).width();
        var mw = $(".menu_appe").width();
        
        var mw5 = ww/5;
        var mw3 = ww/3;
        var mw2 = ww/2;
        
        console.log(mw5+"//"+mw3+"//"+mw2);
        var mw55 = Math.floor(mw5);
        var mw33 = Math.floor(mw3);
        var mw22 = Math.floor(mw2);
        

        if(ww>761){
            $(".menu1").insertBefore($(".menu_spc"));
            $(".menu").css("height",mw55);
        }
        else if(480<ww<760){
            $(".menu1").prependTo($(".sec2"));
            $(".menu").css("height",mw33);
            $(".menu1").css("height",mw33-80);
        }
        if(ww<481){
            $(".menu1").prependTo($(".sec2"));
            $(".menu").css("height",mw22);
        }
        
        console.log(mw55+"//"+mw33+"//"+mw22);
        
        
    });

//    else if(640<fw<=980){
//
//    $(".slide1 img").attr("src","images/sec2_1.png");
//    $(".slide2 img").attr("src","images/sec2_2.png");
//    $(".slide3 img").attr("src","images/sec2_3.png");
//
//    var iw1 = $('.slimg1').height();
//    var imgmg1 = hh-iw1;
//    $(".slimg1").css("marginBottom",imgmg1/2);
//
//    var iw2 = $('.slimg2').width();
//    var imgmg2 = ww-iw2;
//    //$(".slimg2").css("marginLeft",imgmg2/2);
//
//    var iw3 = $('.slimg3').width();
////        var imgmg3 = ww-iw3;
////        $(".slimg3").css("marginLeft",imgmg3/2);
//
//    var sld2txt = $(".slide2 >div").width();
//    var sd2ml = ww-sld2txt;
//    $(".slide2 div").css("left", sd2ml/2);
//  }
//
//   if(fw<=640){
//        console.log("small load");
//        $(".slide1 img").attr("src","images/sec2_1m.png");
//        $(".slide2 img").attr("src","images/sec2_2m.png");
//        $(".slide3 img").attr("src","images/sec2_3m.png");
//
//        var sss = ww-240; 
//        $(".slide img").css({"left":sss/2, "marginLeft":0});
//        $(".slimg1").css("marginBottom",0);   
//        $(".slide2 div").css("left", 0);
//        $(".train").css("marginLeft","5%");
//    }
//
//    var f5w = $('.float5').width();
//    $(".float5").css("height", f5w);
//
//    
//    $(window).resize(function(){    
//            
//        var fw = $(window).width();
//        var ww = $(".w980").width();
//        var hh = $(".slide1").height();
//        
//        if(980<fw){
//            
//            console.log("large");
//            $(".slide1 img").attr("src","images/sec2_1.png");
//            $(".slide2 img").attr("src","images/sec2_2.png");
//            $(".slide3 img").attr("src","images/sec2_3.png");
//        }
//        
//        else if(640<fw<=980){ 
//            console.log("medium");
//            $(".slide1 img").attr("src","images/sec2_1.png");
//            $(".slide2 img").attr("src","images/sec2_2.png");
//            $(".slide3 img").attr("src","images/sec2_3.png");
//            
//            var iw1 = $('.slimg1').height();
//            var imgmg1 = hh-iw1;
//            $(".slimg1").css("marginBottom",imgmg1/2);
//
//            var iw2 = $('.slimg2').width();
//            var imgmg2 = ww-iw2;
//            //$(".slimg2").css("marginLeft",imgmg2/2);
//
//            var sld2txt = $(".slide2 >div").width();
//            var sd2ml = ww-sld2txt;
//            $(".slide2 div").css("left", sd2ml/2);
//                    
//            $(".slide img").css({"left":0});
//            console.log("medium end", fw);
//        }
//        
//        
//        if(fw<=640){
//            console.log("small");
//            $(".slide1 img").attr("src","images/sec2_1m.png");
//            $(".slide2 img").attr("src","images/sec2_2m.png");
//            $(".slide3 img").attr("src","images/sec2_3m.png");
//            
//            var sss = ww-240; 
//            $(".slide img").css({"left":sss/2, "marginLeft":0});
//            $(".slimg1").css("marginBottom",0);
//            $(".slide2 div").css("left", 0);
//        }
//        
//        
//        var f5w = $('.float5').width();
//        $(".float5").css("height", f5w);
//    });

   
});