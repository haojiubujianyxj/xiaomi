/**
 * Created by acer on 2016/8/8.
 */
$(function(){
    var gouBox = $(".gouBox");
    var car = $(".topRight .car");
    //var car = document.getElementsByClassName("car");
    // ת��dom���󷽷���car��0����
    /*car.get(0).addEventListener("mousemove",function(){
        alert(1)
    })*/
    /*car.on("hover",function(){
        //gouBox.slideDown(100);
        alert(1)
    })*/
    var carTimer = null;
    var carTimer2 = null;
    car.mouseenter(function(){
        clearTimeout(carTimer2);
        carTimer = setTimeout(function(){
            gouBox.stop().slideDown(200);
        },100)
    })
    // �������뿪�ͽ����ʱ��������ʱ���������뿪�ͽ����ʱ�������ʱ��
    car.mouseleave(function(){
        clearTimeout(carTimer);
        carTimer2 = setTimeout(function(){
            gouBox.stop(true,true).slideUp(300);
        },200)

    })


    var slide = $(".logo .slide");
    var logoLis = $(".logo li");
    slide.hide();
    logoLis.eq(7).prevAll()
        .on("mouseenter",function(){
        clearTimeout(carTimer2);
        carTimer = setTimeout(function(){
            slide.stop().slideDown(150);
        },200)
    })

    $(".nav ul").mouseleave(function(){
        clearTimeout(carTimer);
        carTimer2 = setTimeout(function(){
            slide.stop().slideUp(150);
        },200)
    })

    logoLis.eq(7).mouseenter(function(){
        slide.slideUp(100);
        console.log(10)
    })

















})