(() => {
  //console.log("IIFE Fired");
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");


  const infoBoxes = [
    //#blue
    { 
      title: "BATTERY",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
      image: "images/copperinsulation.jpg"
    },
    //#
    //#red
    { 
      title: "SPEAKER",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
      image: "images/copperinsulation.jpg"
    },
    //#
      //#yellow
      { 
        title: "BATTERY LIGHT",
        text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
        image: "images/copperinsulation.jpg"
      },
      //#
          //#green
    { 
      title: "VOLUME CONTROL",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
      image: "images/copperinsulation.jpg"
    },
    //#
        //#white
        { 
          title: "MULTI-FUNCTION SURFACE",
          text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
          image: "images/copperinsulation.jpg"
        }
        //#
  ];

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{

      
    let selected = document.querySelector(`#hotspot-${index+1}`);
       h2 = document.createElement('h2');
       h2.textContent = infoBox.title
      p = document.createElement('p');
      p.textContent = infoBox.text;
      console.log(selected);
      console.log(infoBox.title);
      console.log(infoBox.text);

      selected.appendChild(h2);
      selected.appendChild(p);

    })  
  }
  loadInfo();

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`),
    circle = document.querySelector(".st1"),
    logo = document.querySelector(".cls-1");
    const logoPathData = logo.getAttribute("d");
    logo.setAttribute("d", logoPathData);

    var tl = new TimelineMax({Delay:0.3});
    // MorphSVGPlugin.convertToPath("circle");

    // tl.play(circle);
    tl.to(circle, .6, {morphSVG:logoPathData});
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    // console.log(this.slot);
    // console.log(`#${this.slot}`);
    let selected = document.querySelectorAll(`#${this.slot}`),
    circle = document.querySelector(".st1");
    const originalPathData = circle.getAttribute("data-original");
    circle.setAttribute("data-original", originalPathData);


    var tl2 = new TimelineMax({Delay:0.3});
    tl2.to(circle, .6, {morphSVG:originalPathData});
    // tl.seek(0);
    // tl.pause();
    
 
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });


})();
