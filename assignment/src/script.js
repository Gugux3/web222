/** Add any JavaScript you need to this file. */
window.onload = function() {
  var mouse = document.querySelector('#mouse');
  var keyboard = document.querySelector('#keyboard');
  var laptop = document.querySelector('#laptop');

  // var goback = document.querySelector("#goback");

  // goback.onclick=function(){

  //    location.replace("./index.html");

  // };

  laptop.onclick = function() {
    location.replace('./laptop.html');

    //var section = document.querySelector("#prodsec");

    // var keyboard1 = document.getElementsByClassName("product-keyboard");

    // var mouse1 = document.getElementsByClassName("product-mouse");

    // for (var i =0; i < keyboard1.length ; i++ ){

    //   keyboard1[i].innerHTML='';
    // }

    // for (var a =0; a < mouse1.length ; a++ ){

    // mouse1[a].innerHTML='';
    // }
  };

  mouse.onclick = function() {
    location.replace('./mouse.html');

    //var section = document.querySelector("#prodsec");

    // var keyboard1 = document.getElementsByClassName("product-keyboard");

    // var laptop1 = document.getElementsByClassName("product-laptop");

    // for (var i =0; i < keyboard1.length ; i++ ){
    //    keyboard1[i].innerHTML='';
    // }

    // for (var a =0; a < laptop1.length ; a++ ){
    //    laptop1[a].innerHTML='';
    // }
  };

  keyboard.onclick = function() {
    location.replace('./keyboard.html');

    //var section = document.querySelector("#prodsec");

    // var mouse1 = document.getElementsByClassName("product-mouse");

    // var laptop1 = document.getElementsByClassName("product-laptop");

    // for (var i =0; i < mouse1.length ; i++ ){
    //    mouse1[i].innerHTML='';
    // }

    // for (var a =0; a < laptop1.length ; a++ ){
    //    laptop1[a].innerHTML='';
    // }
  };
};
