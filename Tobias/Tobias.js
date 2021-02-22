$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

$('.group1-btn').click(function(){
    $('nav ul .group1-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});

$('.group2-btn').click(function(){
    $('nav ul .group2-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});

$('.group3-btn').click(function(){
    $('nav ul .group3-show').toggleClass("show2");
    $('nav ul .third').toggleClass("rotate");
});

$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});