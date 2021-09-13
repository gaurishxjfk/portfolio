  var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 55,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    
  });
  var typed = new Typed("#typedd", {
    stringsElement: '#typed-string',
    typeSpeed: 50,
    backSpeed: 55,
    backDelay: 2200,
    startDelay: 1000,
    loop: true,
    
  });

  function myFunctionabt() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIVwork");
    var z = document.getElementById("myDIVhire");
    var p = document.getElementById("myDIVcli");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      p.style.display = "none";

    } 
     else {
      x.style.display = "none";
    } 
  } 
  function myFunctionwrk() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIVwork");
    var z = document.getElementById("myDIVhire");
    var p = document.getElementById("myDIVcli");
    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      p.style.display = "none";
    } else {
      y.style.display = "none";
    } 
  } 
  function myFunctionhire() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIVwork");
    var z = document.getElementById("myDIVhire");
    var p = document.getElementById("myDIVcli");

    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      p.style.display = "none";
    } 
     else {
      z.style.display = "none";
    } 
  } 
  function myFunctioncli() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIVwork");
    var z = document.getElementById("myDIVhire");
    var p = document.getElementById("myDIVcli");
    if (p.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      p.style.display = "block";
    } else {
      p.style.display = "none";
    } 
  } 

  