function handle() {

  var a = document.getElementById("input").value;


  var x = 10;
  var b = x * a

  var bust = document.getElementById("total").innerHTML = " $ " + b;

  document.getElementById("btn1").addEventListener("click", function() {
    var btn1 = 5 / 100;
    var tip = btn1 * b;
    document.getElementById("amount-tip").innerHTML = " $ " + tip;
    document.getElementById("bill").innerHTML = tip + b;

    document.getElementById("amount-tip").innerHTML = " $ " + num;



  });

  document.getElementById("btn2").addEventListener("click", function() {
    var btn2 = 10 / 100;
    var tip2 = btn2 * b;
    document.getElementById("amount-tip").innerHTML = " $ " + tip2;
    document.getElementById("bill").innerHTML = tip2 + b;
  });

  document.getElementById("btn3").addEventListener("click", function() {
    var btn3 = 15 / 100;
    var tip3 = btn3 * b;
    document.getElementById("amount-tip").innerHTML = " $ " + tip3;
    document.getElementById("bill").innerHTML = tip3 + b;
  });

  document.getElementById("btn4").addEventListener("click", function() {
    var btn4 = 25 / 100;
    var tip4 = btn4 * b;
    document.getElementById("amount-tip").innerHTML = " $ " + tip4;
    document.getElementById("bill").innerHTML = tip4 + b;
  });

  document.getElementById("btn5").addEventListener("click", function() {
    var btn5 = 50 / 100;
    var tip5 = btn5 * b;
    document.getElementById("amount-tip").innerHTML = " $ " + tip5;
    document.getElementById("bill").innerHTML = tip5 + b ;

  });

  document.getElementById("tip6").onkeyup = function() {

    myMethod()
  };

  function myMethod() {
    var number = document.getElementById("tip6");
    var num = number.value = number.value;
    document.getElementById("amount-tip").innerHTML = " $ " + num  ;
document.getElementById("bill").innerHTML = num - -b ; // i have no idea why this works and not just + but uhhh it works
    console.log(num - -b);

  };



};



var reload = document.getElementById("reload");
function reset(){
reload= location.reload();

}
