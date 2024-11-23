// Nav smooth scroll
(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const navLinks = document.querySelectorAll("#mainHead menu li a");

  function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {
      duration: 1.5,
      ease: "back.out(.5)",
      scrollTo: { y: `${selectedLink}`, offsetY: 120 },
    });
  }

  // gsap.to(".expand", {
  //   ScrollTrigger: {
  //     trigger: ".expand",
  //     start: "top center",
  //     end: "bottom center",

  //     markers: true,
  //     scrub: 1,
  //     toggleActions: "start restart none end",
  //   },
  //   x: -20,
  //   // x: -20,
  //   // tranform: 10,
  //   ease: "power1.in",
  //   duration: 2,
  // });

  navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
  });
})();

// AR Hotspots
(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  let annotate = document.querySelector(`#HotspotAnnotation`);

  const pathDataArray = [
    "M2 20A18 18 0 1 0 38 20A18 18 0 1 0 2 20 z",

    "M15.488,8.887c.024-.021.066-.062.066-.062l-.331.321s.059-.059.265-.255ZM27.532,54.6c.048.01.072.014.069.01s-.314-.1-.834-.265a3.43,3.43,0,0,0,.762.259ZM15.64,47.8c.179.176.334.321.472.445-.469-.431-.731-.7-.724-.693Zm37.825.31a28.256,28.256,0,0,1-2.358,1.965,28.808,28.808,0,0,1-3.5,2.21,29.66,29.66,0,0,1-3.538,1.579,3.443,3.443,0,0,0,.41-.107c-.762.293-1.148.424-1.934.659a3.446,3.446,0,0,1-.393.124c-.1.024-.176.041-.228.052a22.831,22.831,0,0,1-4.231.81c-1.752.193-3.348-1.124-4.007-3.214-.621-1.969-1.138-3.534-1.672-5.134s-1.09-3.234-1.848-5.489c-1.81-.083-3.141-.186-4.451-.31s-2.607-.265-4.282-.5c.3,2.121.59,3.648.9,5.138s.655,2.941,1.179,4.762a6.5,6.5,0,0,0,3.255,3.686A30.868,30.868,0,0,1,23.26,53a28.657,28.657,0,0,1-4.172-2.376,28.234,28.234,0,0,1-2.976-2.376c.838.741,1.028.421.3-.793a34.94,34.94,0,0,1-2.641-5.486,37.306,37.306,0,0,1-1.6-5.431,39.092,39.092,0,0,1-.765-5.4,40.1,40.1,0,0,1-.021-5.462,39.3,39.3,0,0,1,.728-5.413,37.361,37.361,0,0,1,1.558-5.455,34.784,34.784,0,0,1,2.6-5.517c.814-1.39-.731-.476-.731-.476a41.9,41.9,0,0,1,3.576-2.91A30.964,30.964,0,0,1,24.4,2.991,17.561,17.561,0,0,1,27.232,2a.972.972,0,0,1-.172.072,6.374,6.374,0,0,0-3.555,3.81c-.614,2.141-1.048,4.055-1.407,5.9s-.638,3.62-.879,5.589-.445,4.138-.565,6.82c1.486-.066,2.631-.11,3.786-.148s2.321-.072,3.907-.107a11.177,11.177,0,0,0,4.407-3.255,12.915,12.915,0,0,0,2.627-5.248c.5-2.065.879-3.724,1.207-5.227s.61-2.862.872-4.265.514-2.858.738-4.482a23.214,23.214,0,0,1,3.686.71s.079.017.355.086c.031.007.093.028.093.028s-.376-.1-.428-.107c.276.072.41.11.683.19-.086-.031-.255-.083-.255-.083A35.23,35.23,0,0,1,46.61,3.8a26.6,26.6,0,0,1,4.962,3,23.945,23.945,0,0,1,2.193,1.91s-.034-.034-.107-.1c-1.031-.979-1.265-.7-.49.583a34.25,34.25,0,0,1,2.676,5.5,36.508,36.508,0,0,1,1.61,5.448,38.73,38.73,0,0,1,.762,5.413,40.248,40.248,0,0,1,0,5.472,38.256,38.256,0,0,1-.765,5.41,37.025,37.025,0,0,1-1.614,5.444,34.219,34.219,0,0,1-2.676,5.493c-.738,1.221-.552,1.527.3.755ZM30.091,23.9c2.552-.041,4.751-.052,6.762-.045s3.851.028,5.793.066,3.986.1,6.348.19c-.121-2.624-.324-4.741-.565-6.672s-.517-3.669-.872-5.475-.783-3.682-1.39-5.786a6.575,6.575,0,0,0-2.586-3.3,3.842,3.842,0,0,0-3.086,1.514,9.679,9.679,0,0,0-1.983,4.455c-.252,1.286-.465,2.286-.69,3.3s-.459,2.048-.793,3.462a12.257,12.257,0,0,1-2.572,5.11A11.1,11.1,0,0,1,30.087,23.9Zm-9.454.824h0v0Zm9.175,15.782c-.762-2.272-1.341-4.024-1.91-5.789s-1.131-3.548-1.824-5.941a5.729,5.729,0,0,0-2.817-3.614c-1.069.031-1.6.045-2.645.083,0-.169.007-.252.014-.421h0c-.076,2.017-.076,3.748-.045,5.334s.1,3.038.21,4.572.259,3.158.507,5.044c1.634.21,2.9.338,4.176.445s2.572.2,4.334.283Zm16.278,10.1c.634-2.165,1.1-4.2,1.486-6.155s.669-3.838.9-5.769.4-3.917.51-6.124c.052-1.1.09-2.258.1-3.493s0-2.541-.048-3.907c-2.052-.059-3.82-.1-5.493-.124s-3.258-.045-4.993-.052-3.634-.01-5.882.007A6.025,6.025,0,0,1,36,28.9c.376,1.276.724,2.458,1.048,3.572s.624,2.152.907,3.141c.562,1.979,1.052,3.755,1.5,5.479s.852,3.389,1.221,5.11.71,3.5.962,5.372c.19,1.407.914,2.245,1.89,2.324a6.642,6.642,0,0,0,2.565-3.283Zm7.375-2.5c.152-.138.321-.3.521-.5a.781.781,0,0,0,.059-.059C54.051,47.549,53.841,47.763,53.465,48.115Zm-5.017,3.741a22.963,22.963,0,0,1-3.969,1.9c.059-.021.117-.038.179-.062a23.159,23.159,0,0,0,3.789-1.838 z",
  ];

  const hotspotHovers = document.querySelectorAll(".hotspotHover");

  const allMorphingPaths = [];
  const infoBoxes = [
    //#blue
    {
      title: "BATTERY",
      text: "With a long-lasting battery, these earbuds provide hours of playback time, making them perfect for extended use during workouts, commutes, or daily activities.",
      image: "images/battery.png",
    },
    //#
    //#red
    {
      title: "SPEAKER",
      text: "The high-quality speaker delivers crisp and immersive sound, ensuring you can enjoy your favorite music with exceptional clarity.",
      image: "images/speakers.png",
    },
    //#
    //#green
    {
      title: "VOLUME CONTROL",
      text: "The rotating controls allow you to adjust the volume effortlessly by simply turning on the adjustable pearl, giving you complete control over your audio experience.",
      image: "images/volume.png",
    },
    //#
    //#white
    {
      title: "MULTI-FUNCTION SURFACE",
      text: "The multi-touch surface enables various functions like play, pause, skip tracks, answer calls, and activate voice assistants, all at your fingertips, making these earbuds intuitive and easy to use.",
      image: "images/touch.png",
    },
    //#
    {
      title: "SILICONE EARBUD",
      text: "Soft, flexible attachments designed to fit snugly in the ear, providing comfort and a secure fit. Made from durable, hypoallergenic silicone, they help create a seal that enhances sound quality and passive noise isolation. These tips come in various sizes to accommodate different ear shapes, ensuring a comfortable listening experience for extended periods.",
      image: "images/earbud.png",
    },
  ];

  let currentIndex = 0;
  const nextIndex = currentIndex + 1;
  const fromPath = pathDataArray[currentIndex];
  const toPath = pathDataArray[nextIndex];

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function showInfo(event) {
    const hotspotIndex = Array.from(hotspots).indexOf(event.currentTarget);
    const annotate = document.querySelector("#HotspotAnnotation");

    annotate.innerHTML = "";
    const infoBox = infoBoxes[hotspotIndex];

    const h2 = document.createElement("h2");
    h2.textContent = infoBox.title;
    const img = document.createElement("img");
    img.src = infoBox.image;
    const p = document.createElement("p");
    p.textContent = infoBox.text;

    annotate.appendChild(h2);
    annotate.appendChild(img);

    annotate.appendChild(p);

    gsap.to(annotate, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    gsap.to(annotate, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspotHovers.forEach((hotspotHover) => {
    const morphingPaths = hotspotHover.querySelectorAll(".morphingPath");
    allMorphingPaths.push(morphingPaths);
    hotspotHover.addEventListener("mouseover", () => {
      var tl = new TimelineMax({ Delay: 0.3 });
      tl.to(morphingPaths, 0.6, { morphSVG: toPath });
    });

    hotspotHover.addEventListener("mouseout", () => {
      var tl2 = new TimelineMax({ Delay: 0.3 });
      tl2.to(morphingPaths, 0.6, { morphSVG: fromPath });
    });
  });

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
// X - Ray;
(() => {
  const div = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    console.log(slider.value);

    //   div.style.width = slider.value + "%";
    div.style.width = `${slider.value}%`;
  }

  slider.addEventListener("input", moveDivisor);
})();
