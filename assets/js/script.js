$(document).ready(() => {
  (() => {
    const an = [
      "./assets/img/SVG/spoon/phase-1.svg",
      "./assets/img/SVG/spoon/phase-2.svg",
      "./assets/img/SVG/spoon/phase-3.svg",
      "./assets/img/SVG/spoon/phase-4.svg",
      "./assets/img/SVG/spoon/phase-3.svg",
      "./assets/img/SVG/spoon/phase-2.svg",
      "./assets/img/SVG/spoon/phase-1.svg",
    ];
    let i = 0;
    setInterval(() => {
      if (i > an.length) i = 0;
      console.log(an[i]);
      $("#myimg").attr("src", an[i]);
      i++;
    }, 300);
  })();

  (() => {
    const an = [
      "./assets/img/SVG/flying bee/1.svg",
      "./assets/img/SVG/flying bee/2.svg",
      "./assets/img/SVG/flying bee/3.svg",
      "./assets/img/SVG/flying bee/2.svg",

    ];
    let i = 0;
    setInterval(() => {
      if (i > an.length) i = 0;
      console.log(an[i]);
      // $(".flying-bee img").attr("src", an[i]);
      i++;
    }, 100);
  })();


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

  $(".graphic img").parent().addClass("viewer")
  $(".place-name").parent().parent().css("box-shadow", "none");
  $("img[data-count]").each(function () {
    console.log($(this).data("count"));
    $(this).css("transform", `scale(calc(1.${$(this).data("count")} - 0.5))`);
  });
  // View an image.
  for (let i = 0; i < 30; i++) {
    const viewer = new Viewer(document.querySelectorAll(".viewer")[i], {
      // inline: true,
      navbar:false,
      toolbar:false,
      title:false,
      viewed() {
        // viewer.zoomTo(1);
      },
    });

  }
 
});
