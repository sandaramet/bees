$(document).ready(() => {
  (() => {
    const path = {
      curviness: 1,
      autoRotate: true,
      values: [{ x: 650, y: 200 }],
    };

    const t = new TimelineLite();
    t.add(
      TweenLite.to(".flying-bee", 1, {
        bezier: path,
        ease: Power1.easeInOut,
      })
    );
  })();
  (() => {
    const path = {
      curviness: 1,
      autoRotate: true,
      values: [{ x: 618, y: 69 }],
    };

    const t = new TimelineLite();
    t.add(
      TweenLite.to(".flying-bee-s12", 1, {
        bezier: path,
        ease: Power1.easeInOut,
      })
    );
  })()(() => {
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

  $(".graphic img").parent().addClass("viewer");
  $(".place-name").parent().parent().css("box-shadow", "none");
  $("img[data-count]").each(function () {
    $(this).css("transform", `scale(calc(0.${$(this).data("count")} * 1.5 ))`);
  });
  // View an image.
  for (let i = 0; i < document.querySelectorAll(".viewer").length; i++) {
    let viewer = new Viewer(document.querySelectorAll(".viewer")[i], {
      // inline: true,
      navbar: false,
      toolbar: false,
      title: false,
    });
  }
  // console.log(window.parent);
  const effect = [
    "fade-up",
    "fade-down",
    "fade-right",
    "fade-left",
    "zoom-in",
    "zoom-out",
    "slide-up",
    "flip-up",
    "flip-down",
    "flip-right",
    "flip-left",
  ];

  $("section:not(.full)").each(function () {
    $(this).attr(
      "data-aos",
      effect[Math.floor(Math.random() * effect.length + 1)]
    );
  });
  AOS.refresh();

  AOS.init();
});
