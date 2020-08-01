$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });

  // ----------scrolling -------------------------
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 50) {
      $(".sticky").addClass("addSticky");
    } else {
      $(".sticky").removeClass("addSticky");
    }
  });
  var typed = new Typed(".element", {
    strings: ["Bhartendu", "a full stack developer", "programmer", "learner"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });
  // progress bar
  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function (direction) {
      var progress_bar = document.querySelectorAll(".progress-bar");
      progress_bar[0].setAttribute("style", "width:95%;transition:1s all");
      progress_bar[1].setAttribute("style", "width:90%;transition:1.5s all");
      progress_bar[2].setAttribute("style", "width:70%;transition:1.75s all");
      progress_bar[3].setAttribute("style", "width:90%;transition:2s all");
      progress_bar[4].setAttribute("style", "width:85%;transition:2.25s all");
      progress_bar[5].setAttribute("style", "width:80%;transition:2.5s all");
    },
    offset: "90%",
    // offset is important here
  });

  //   var progress_bar = document.querySelectorAll(".progress-bar");
  //   progress_bar[0].setAttribute("style", "width:95%;transition:1s all");
  //   progress_bar[1].setAttribute("style", "width:90%;transition:1.5s all");
  //   progress_bar[2].setAttribute("style", "width:70%;transition:1.75s all");
  //   progress_bar[3].setAttribute("style", "width:90%;transition:2s all");
  //   progress_bar[4].setAttribute("style", "width:85%;transition:2.25s all");
  //   progress_bar[5].setAttribute("style", "width:80%;transition:2.5s all");

  //------------------------------
  //owl carousel

  var feedbackSlider = $(".feedback-slider");
  feedbackSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    responsive: {
      // breakpoint from 767 up
      767: {
        nav: true,
        dots: false,
      },
    },
  });

  feedbackSlider.on("translate.owl.carousel", function () {
    $(".feedback-slider-item h3")
      .removeClass("animated fadeIn")
      .css("opacity", "0");
    $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
      .removeClass("animated zoomIn")
      .css("opacity", "0");
  });

  feedbackSlider.on("translated.owl.carousel", function () {
    $(".feedback-slider-item h3")
      .addClass("animated fadeIn")
      .css("opacity", "1");
    $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
      .addClass("animated zoomIn")
      .css("opacity", "1");
  });
  feedbackSlider.on("changed.owl.carousel", function (property) {
    var current = property.item.index;
    var prevThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("img")
      .attr("src");
    var nextThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("img")
      .attr("src");
    var prevRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("span")
      .attr("data-rating");
    var nextRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("span")
      .attr("data-rating");
    $(".thumb-prev").find("img").attr("src", prevThumb);
    $(".thumb-next").find("img").attr("src", nextThumb);
    $(".thumb-prev")
      .find("span")
      .next()
      .html(prevRating + '<i class="fa fa-star"></i>');
    $(".thumb-next")
      .find("span")
      .next()
      .html(nextRating + '<i class="fa fa-star"></i>');
  });
  $(".thumb-next").on("click", function () {
    feedbackSlider.trigger("next.owl.carousel", [300]);
    return false;
  });
  $(".thumb-prev").on("click", function () {
    feedbackSlider.trigger("prev.owl.carousel", [300]);
    return false;
  });
});
