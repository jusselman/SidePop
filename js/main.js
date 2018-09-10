
function scrollThere(targetElement, speed) {
    $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top },
    speed,
    'swing'
  );
}


// NAV ITEMS //
$("#leftSidebar ul li a").click(function (e) {

  e.preventDefault();


  var startOfName = $(this).attr('href').indexOf("#"),

      clickRef = $(this).attr('href').slice(startOfName + 1),
      targetEl = $('a[name=' + clickRef + ']');
  // scroll there smoothly:
  scrollThere(targetEl, 400);

});



$(window).on('mousewheel', function (e) {


  var div1y = $('#panel1').offset().top,
      div2y = $('#panel2').offset().top,
      div3y = $('#panel3').offset().top,
      div4y = $('#panel4').offset().top,
      div5y = $('#panel5').offset().top,
      div6y = $('#panel6').offset().top,
      lastScrollTop = $(this).scrollTop(),
      scrollDirection,
      targetUp,
      targetDown,
      targetElement;


  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  }


  e.preventDefault();


  if (lastScrollTop === div1y) {
    targetUp = $('#panel1');
    targetDown = $('#panel2');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#panel1');
    targetDown = $('#panel3');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#panel2');
    targetDown = $('#panel4');
  } else if (lastScrollTop === div4y) {
    targetUp = $('#panel3');
    targetDown = $('#panel5');
  } else if (lastScrollTop === div5y) {
    targetUp = $('#panel4');
    targetDown = $('#panel6');
  } else if (lastScrollTop === div6y) {
    targetUp = $('#panel5');
    targetDown = $('#panel6');
  } else if (lastScrollTop < div2y) {
    targetUp = $('#panel1');
    targetDown = $('#panel2');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#panel2');
    targetDown = $('#panel3');
  } else if (lastScrollTop < div4y) {
    targetUp = $('#panel3');
    targetDown = $('#panel4');
  } else if (lastScrollTop < div5y) {
    targetUp = $('#panel4');
    targetDown = $('#panel5');
  } else if (lastScrollTop < div6y) {
    targetUp = $('#panel5');
    targetDown = $('#panel6');
  } else if (lastScrollTop > div6y) {
    targetUp = $('#panel6');
    targetDown = $('#panel6');
  } // end else if

  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;
  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if

  // scroll smoothly to the target element:
  scrollThere(targetElement, 400);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//


//--- START SHOW/HIDE SIDE PANEL EVENTS ---//
// open the sidePanel when the button is clicked/tapped:
$("#sidePanelButton").click(function (e) {
  e.preventDefault();
  $("#sidePanel").addClass("open");
  $("#mainStack").addClass("shift");
}); // end click

// close the sidePanel when the X is clicked/tapped:
$("#sidePanelClose").click(function (e) {
  e.preventDefault();
  $("#sidePanel").removeClass("open");
  $("#mainStack").removeClass("shift");
}); // end click
//--- END SHOW/HIDE SIDE PANEL EVENTS ---//
