
let t1 = gsap.timeline();

t1.from(".imsrk", {
  opacity: 0,
  xPercent: -100,
  delay: 0.5,
  duration: 1,
  ease: "power1.out",
  yoyo: true,
});
t1.from(
  ".dot",
  {
    opacity: 0,
    yPercent: 100,
    delay: 0.5,
    repeatDelay: 1,
    duration: 1,
    ease: "power1.out",
  },
  0.01
);


t1.to(".dot", {
  x: 20,
  duration: 2,
  ease: "power1.out",
});

t1.to(".dot", {
  x: -10,
  duration: 0.5,
  ease: "power1.out",
});

t1.to(".imsrk", {
  opacity: 0,
  xPercent: -100,
  duration: 1,
  ease: "power1.out",
  yoyo: true,
});

t1.to(
  ".dot",
  {
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  3
);

t1.to(
  ".cover",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3
);

t1.to(
  ".cover-2",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.2
);

t1.to(
  ".cover-3",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.4
);

t1.to(
  ".cover-4",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.6
);



t1.from(".cover-5", {
  yPercent: -100,
  duration: 1,
  ease: "power1.out",
  delay: 0.4,
});

t1.from(".logo", {
  xPercent: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

t1.from(
  ".item",
  {
    xPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    stagger: {
      amount: 0.5,
      from: "left",
    },
  },
  6
);

t1.from(
  ".header-img",
  {
    xPercent: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },
  6.2
);

t1.from(
  ".heading",
  {
    xPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },
  6.2
);

t1.from(
  ".sub-heading",
  {
    xPercent: 100,
    opacity: 0,
    duration: 1.1,
    ease: "power1.out",
  },
  6.2
);

t1.from(
  ".button",
  {
    yPercent: 100,
    opacity: 0,
    duration: 2,
    ease: "bounce",
  },
  6.5
);

const body = document.querySelector("body");
const img = document.querySelector(".header-img");

window.addEventListener("mousemove", (e) => {
  var xPos = e.clientX / img.clientWidth - 0.5,
    yPos = e.clientY / img.clientHeight - 0.5;

  gsap.to(".header-img", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });

  gsap.to(".heading", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });

  gsap.to(".sub-heading", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });
  

  gsap.to(".button", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });
});
var tlMorph = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0.3})

tlMorph 
.to('.image_one', 1, {morphSVG: {shape: '.image_two'}})


// ==============================================================================

tsParticles.load("tsparticles", {
  background: {
  
   
    repeat: "no-repeat",
    size: "40%",
    position: "60% 50%"
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "bubble"
      }
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 2,
        opacity: 0,
        size: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      }
    }
  },
  particles: {
    color: { value: "#ff98a2" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: true,
      speed: 0.3
    },
    number: {
      density: {
        enable: true
      },
      value: 600
    },
    opacity: {
      animation: {
        enable: true,
        speed: 5
      },
      value: { min: 0.3, max: 0.6 }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 1
    }
  }
});






