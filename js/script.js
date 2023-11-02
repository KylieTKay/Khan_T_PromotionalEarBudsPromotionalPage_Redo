

(() => {

  const infoBoxes = [
    { 

    }
  ]
var tl = new TimelineMax({Delay:0.3})

MorphSVGPlugin.convertToPath("circle");

circle.addEventListener("mouseover", () => {
  tl.play();
  tl.to("#circle", .6, {morphSVG:"#LogoHotSpot"});
});

circle.addEventListener("mouseout", () => {
  tl.seek(0);
  tl.pause();
});

})();
