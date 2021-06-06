$(document).ready(() => {
  animateInScroll();
  animateInScroll( [
	"./assets/img/SVG/flying bee/1.svg",
	"./assets/img/SVG/flying bee/2.svg",
	"./assets/img/SVG/flying bee/3.svg",
	"./assets/img/SVG/flying bee/2.svg",
	"./assets/img/SVG/flying bee/1.svg",
  ],
  className = ".flying-bee img");
  function animateInScroll(
    arr = [
      "./assets/img/SVG/spoon/phase-1.svg",
      "./assets/img/SVG/spoon/phase-2.svg",
      "./assets/img/SVG/spoon/phase-3.svg",
      "./assets/img/SVG/spoon/phase-4.svg",
      "./assets/img/SVG/spoon/phase-3.svg",
      "./assets/img/SVG/spoon/phase-2.svg",
      "./assets/img/SVG/spoon/phase-1.svg",
    ],
    className = "#myimg",
	duration = 2000
  ) {
    // define images
    var images = arr;

    var obj = { curImg: 0 };

    // create tween
    var tween = TweenMax.to(obj, 10, {
      curImg: images.length - 1, // animate propery curImg to number of images
      roundProps: "curImg", // only integers so it can be used as an array index
      repeat: 5, // repeat 3 times
      immediateRender: true, // load first image automatically
      // ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        $(className).attr("src", images[obj.curImg]); // set the image source
      },
    });

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: duration,
    })
      .setTween(tween)
      .addTo(controller);
  }

  $(".place-name").parent().parent().css("box-shadow", "none");
  $($(".place-name").parent().find("img")).css("border-radius", "8px");


//   var controller = new ScrollMagic.Controller();

//   // build scene
//   var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
// 				  // trigger a velocity opaticy animation
// 				  .setVelocity("section", {opacity: 1}, {duration: 400})
// 				  .addIndicators() // add indicators (requires plugin)
// 				  .addTo(controller);
});
