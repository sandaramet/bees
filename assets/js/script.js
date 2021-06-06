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
      $("#myimg").attr("src", an[i]);
      i++;
    }, 200);
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
    $(this).css("transform", `scale(calc(0.${$(this).data("count")} * 1.5 ))`);
  });
  // View an image.
  for (let i = 0; i < 10; i++) {
   let viewer =  new Viewer(document.querySelectorAll(".viewer")[i], {
      // inline: true,
      container:document.querySelectorAll(".viewer")[i],
      navbar:false,
      toolbar:false,
      title:false,
      viewed() {
        const {top, left} = $(document.querySelectorAll(".viewer")[i]).offset()
        viewer.move(0,-(top / 8));
      },
    });
  }
  // console.log(window.parent);
});
