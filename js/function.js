$(document).scroll(function(){
    scrollFunction();
});

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    $("#toTop").css("display", "block").unbind().click(function(){
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        400
      );
    });
  } else {
    $("#toTop").css("display", "none");
  }
}

function openNav() {
  document.getElementById("slideCloseNavBar").style.display = "block";
}

function closeNav() {
  document.getElementById("slideCloseNavBar").style.display = "none";
}