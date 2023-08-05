function text1(){
  document.getElementById("bCCover1").style.display = "block";
  document.getElementById("bCCover2").style.display = "none";
  $("#btn1").css("background-color", "#B5ABAB");
  $("#btn2").css("background-color", "white");
  $("#btn1").hover(function(){
    $(this).css("background-color", "grey");
  });
  $("#btn2").hover(function(){
    $(this).css("background-color", "grey");
  });
  $("#btn2").mouseleave(function(){
    $(this).css("background-color", "white");
  });
  
}

function text2(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("bCCover2").style.display = "block";
  document.getElementById("bCCover1").style.display = "none";
  $("#btn2").css("background-color", "#B5ABAB");
  $("#btn1").css("background-color", "white");
  $("#btn1").hover(function(){
    $(this).css("background-color", "grey");
  });
  $("#btn1").mouseleave(function(){
    $(this).css("background-color", "white");
  });
  $("#btn2").hover(function(){
    $(this).css("background-color", "grey");
  });
}