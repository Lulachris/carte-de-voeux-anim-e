var animationMedium = .15;
var animationFast = .05;

//m
var selector1 = document.querySelector('#mbar-start');
var dot1 = MorphSVGPlugin.convertToPath( selector1 );
var end1 = '#mbar';

var selector2 = document.querySelector('#m-hump-one-left-start');
var dot2 = MorphSVGPlugin.convertToPath( selector2 );
var end2 = '#m-hump-one-left';

var selector3 = document.querySelector('#m-hump-one-right-start');
var dot3 = MorphSVGPlugin.convertToPath( selector3 );
var end3 = '#m-hump-one-right';

var selector4 = document.querySelector('#m-hump-two-left-start');
var dot4 = MorphSVGPlugin.convertToPath( selector4 );
var end4 = '#m-hump-two-left';

var selector5 = document.querySelector('#m-hump-two-right-start');
var dot5 = MorphSVGPlugin.convertToPath( selector5 );
var end5 = '#m-hump-two-right';

animationOne();

function animationOne(){
  TweenLite.to(dot1, animationMedium, {
    morphSVG: end1,
    onComplete: animationTwo
  });
}

function animationTwo(){
  TweenLite.to(dot2, animationMedium, {
    morphSVG: end2,
    onComplete: animationThree
  });
}

function animationThree(){
  TweenLite.to(dot3, animationMedium, {
    morphSVG: end3,
    onComplete: animationFour
  });
}

function animationFour(){
  TweenLite.to(dot4, animationMedium, {
    morphSVG: end4,
    onComplete: animationFive
  });
}

function animationFive(){
  TweenLite.to(dot5, animationMedium, {
    morphSVG: end5,
    onComplete: animationSix
  });
}

//e
var selector6 = document.querySelector('#e-line-1-start');
var dot6 = MorphSVGPlugin.convertToPath( selector6 );
var end6 = '#e-line-1';

var selector7 = document.querySelector('#e-line-2-start');
var dot7 = MorphSVGPlugin.convertToPath( selector7 );
var end7 = '#e-line-2';

var selector8 = document.querySelector('#e-line-3-start');
var dot8 = MorphSVGPlugin.convertToPath( selector8 );
var end8 = '#e-line-3';

var selector9 = document.querySelector('#e-line-4-start');
var dot9 = MorphSVGPlugin.convertToPath( selector9 );
var end9 = '#e-line-4';

var selector10 = document.querySelector('#e-line-5-start');
var dot10 = MorphSVGPlugin.convertToPath( selector10 );
var end10 = '#e-line-5';

var selector11 = document.querySelector('#e-line-6-start');
var dot11 = MorphSVGPlugin.convertToPath( selector11 );
var end11 = '#e-line-6';

function animationSix(){
  TweenLite.to(dot6, animationMedium, {
    morphSVG: end6,
    onComplete: animationSeven
  });
}

function animationSeven(){
  TweenLite.to(dot7, animationFast, {
    morphSVG: end7,
    onComplete: animationEight
  });
}

function animationEight(){
  TweenLite.to(dot8, animationFast, {
    morphSVG: end8,
    onComplete: animationNine
  });
}

function animationNine(){
  TweenLite.to(dot9, animationFast, {
    morphSVG: end9,
    onComplete: animationTen
  });
}

function animationTen(){
  TweenLite.to(dot10, animationMedium, {
    morphSVG: end10,
    onComplete: animationEleven
  });
}

function animationEleven(){
  TweenLite.to(dot11, animationMedium, {
    morphSVG: end11,
    onComplete: animationTwelve
  });
}

//m
var selector12 = document.querySelector('#m-line-1-start_1_');
var dot12 = MorphSVGPlugin.convertToPath( selector12 );
var end12 = '#m-line-1';

var selector13 = document.querySelector('#m-line-2-start');
var dot13 = MorphSVGPlugin.convertToPath( selector13 );
var end13 = '#m-line-2';

var selector14 = document.querySelector('#m-line-3-start');
var dot14 = MorphSVGPlugin.convertToPath( selector14 );
var end14 = '#m-line-3';

var selector15 = document.querySelector('#m-line-4-start');
var dot15 = MorphSVGPlugin.convertToPath( selector15 );
var end15 = '#m-line-4';

var selector16 = document.querySelector('#m-line-5-start');
var dot16 = MorphSVGPlugin.convertToPath( selector16 );
var end16 = '#m-line-5';

var selector17 = document.querySelector('#m-line-6-start');
var dot17 = MorphSVGPlugin.convertToPath( selector17 );
var end17 = '#m-line-6';

var selector18 = document.querySelector('#m-line-7-start');
var dot18 = MorphSVGPlugin.convertToPath( selector18 );
var end18 = '#m-line-7';


function animationTwelve(){
  TweenLite.to( dot12, animationMedium, {
    morphSVG: end12,
    onComplete: animationThirteen
  });
}

function animationThirteen(){
  TweenLite.to(dot13, animationMedium, {
    morphSVG: end13,
    onComplete: animationFourteen
  });
}

function animationFourteen(){
  TweenLite.to(dot14, animationFast, {
    morphSVG: end14,
    onComplete: animationFifteen
  });
}

function animationFifteen(){
  TweenLite.to(dot15, animationMedium, {
    morphSVG: end15,
    onComplete: animationSixteen
  });
}

function animationSixteen(){
  TweenLite.to(dot16, animationMedium, {
    morphSVG: end16,
    onComplete: animationSeventeen
  });
}

function animationSeventeen(){
  TweenLite.to(dot17, animationMedium, {
    morphSVG: end17,
    onComplete: animationEighteen
  });
}

function animationEighteen(){
  TweenLite.to(dot18, animationMedium, {
    morphSVG: end18,
    onComplete: animationNineteen
  });
}

//o
var selector19 = document.querySelector('#o-line-1-start');
var dot19 = MorphSVGPlugin.convertToPath( selector19 );
var end19 = '#o-line-1';

var selector20 = document.querySelector('#o-line-2-start');
var dot20 = MorphSVGPlugin.convertToPath( selector20 );
var end20 = '#o-line-2';

var selector21 = document.querySelector('#o-line-3-start');
var dot21 = MorphSVGPlugin.convertToPath( selector21 );
var end21 = '#o-line-3';

function animationNineteen(){
  TweenLite.to(dot19, animationMedium, {
    morphSVG: end19,
    onComplete: animationTwenty
  });
}

function animationTwenty(){
  TweenLite.to(dot20, animationMedium, {
    morphSVG: end20,
    onComplete: animationTwentyOne
  });
}

function animationTwentyOne(){
  TweenLite.to(dot21, animationFast, {
    morphSVG: end21,
    onComplete: animationTwentyTwo
  });
}

//r
var selector22 = document.querySelector('#r-line-1-start_7_');
var dot22 = MorphSVGPlugin.convertToPath( selector22 );
var end22 = '#r-line-1_7_';

var selector23 = document.querySelector('#r-line-2-start_7_');
var dot23 = MorphSVGPlugin.convertToPath( selector23 );
var end23 = '#r-line-2_7_';

var selector24 = document.querySelector('#r-line-3-start_7_');
var dot24 = MorphSVGPlugin.convertToPath( selector24 );
var end24 = '#r-line-3_7_';

var selector25 = document.querySelector('#r-line-4-start_7_');
var dot25 = MorphSVGPlugin.convertToPath( selector25 );
var end25 = '#r-line-4_7_';


function animationTwentyTwo(){
  TweenLite.to(dot22, animationMedium, {
    morphSVG: end22,
    onComplete: animation23
  });
}

function animation23(){
  TweenLite.to(dot23, animationFast, {
    morphSVG: end23,
    onComplete: animation24
  });
}

function animation24(){
  TweenLite.to(dot24, animationMedium, {
    morphSVG: end24,
    onComplete: animation25
  });
}

function animation25(){
  TweenLite.to(dot25, animationMedium, {
    morphSVG: end25,
    onComplete: animation26
  });
}

//i
var selector26 = document.querySelector('#i-line-1-start');
var dot26 = MorphSVGPlugin.convertToPath( selector26 );
var end26 = '#i-line-1';

var selector27 = document.querySelector('#i-line-2-start_1_');
var dot27 = MorphSVGPlugin.convertToPath( selector27 );
var end27 = '#i-line-2';

function animation26(){
  TweenLite.to(dot26, animationMedium, {
    morphSVG: end26,
    onComplete: animation27
  });
}

function animation27(){
  TweenLite.to(dot27, animationMedium, {
    morphSVG: end27,
    onComplete: animation28
  });
}

//e
var selector28 = document.querySelector('#e-line-1-start_1_');
var dot28 = MorphSVGPlugin.convertToPath( selector28 );
var end28 = '#e-line-1_1_';

var selector29 = document.querySelector('#e-line-2-start_1_');
var dot29 = MorphSVGPlugin.convertToPath( selector29 );
var end29 = '#e-line-2_1_';

var selector30 = document.querySelector('#e-line-3-start_1_');
var dot30 = MorphSVGPlugin.convertToPath( selector30 );
var end30 = '#e-line-3_1_';

var selector31 = document.querySelector('#e-line-4-start_1_');
var dot31 = MorphSVGPlugin.convertToPath( selector31 );
var end31 = '#e-line-4_1_';

var selector32 = document.querySelector('#e-line-5-start_1_');
var dot32 = MorphSVGPlugin.convertToPath( selector32 );
var end32 = '#e-line-5_1_';

function animation28(){
  TweenLite.to(dot28, animationFast, {
    morphSVG: end28,
    onComplete: animation29
  });
}

function animation29(){
  TweenLite.to(dot29, animationFast, {
    morphSVG: end29,
    onComplete: animation30
  });
}

function animation30(){
  TweenLite.to(dot30, animationFast, {
    morphSVG: end30,
    onComplete: animation31
  });
}

function animation31(){
  TweenLite.to(dot31, animationMedium, {
    morphSVG: end31,
    onComplete: animation32
  });
}

function animation32(){
  TweenLite.to(dot32, animationMedium, {
    morphSVG: end32,
    onComplete: animation33
  });
}

//s
var selector33 = document.querySelector('#s-line-1-start');
var dot33 = MorphSVGPlugin.convertToPath( selector33 );
var end33 = '#s-line-1';

var selector34 = document.querySelector('#s-line-2-start');
var dot34 = MorphSVGPlugin.convertToPath( selector34 );
var end34 = '#s-line-2';

var selector35 = document.querySelector('#s-line-3-start');
var dot35 = MorphSVGPlugin.convertToPath( selector35 );
var end35 = '#s-line-3';

function animation33(){
  TweenLite.to(dot33, animationMedium, {
    morphSVG: end33,
    onComplete: animation34
  });
}

function animation34(){
  TweenLite.to(dot34, animationFast, {
    morphSVG: end34,
    onComplete: animation35
  });
}

function animation35(){
  TweenLite.to(dot35, animationMedium, {
    morphSVG: end35,
    onComplete: animation36
  });
}

// i dot
var selector36 = document.querySelector('#i-dot-start');
var dot36 = MorphSVGPlugin.convertToPath( selector36 );
var end36 = '#i_dot';

function animation36(){
  TweenLite.to(dot36, animationMedium, {
    morphSVG: end36,
    // onComplete: animation37
  });
}
