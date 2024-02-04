
function load(){
  const loader = document.querySelector("#loader")
const main = document.querySelector("#main")

let trl = gsap.timeline();
trl.to(loader,{
   opacity: 0,
   delay: 3.5
})
trl.to(loader,{
    y: "-100%",
    duration: .1,
})

trl.to(main,{
  display: "inline",
  opacity: 1
})
}

load();

var tl = gsap.timeline();

function navpanomation(){
  tl.from(".nav h6",{
    y:100,
    delay:4,
    opacity:0,
    stagger:.1
});

tl.from(".center h1",{
    x:-100,
    opacity:0,
    // delay:.5,
    stagger:.3
});

gsap.to("#main .nav",{
  scrollTrigger:{
    trigger: "#main .nav",
    scroller: "body",
    // markers: true,
    start: "bottom -7%",
    scrub: true
  },
  backgroundColor:"black"
})

};
navpanomation();




function page3animation(){
  tl.from("#page3 .video-container",{
    scrollTrigger:{
      trigger:"#page3 .video-container",
      scroller:"body",
      // markers:true,
      start:"10% 15%",
      end:"top -75%",
      scrub:5,
      pin:true
    }
  });
  
  tl.from("#page3 h1",{scrollTrigger:{
    trigger:"#page3 h1",
    x:-100,
    opacity:0,
    delay:.5,
    stagger:.3,
    start:"10% 15%",
      end:"top -70%",
    scrub:true,
    // markers:true
  }
  });
};
page3animation();


function colorChange(){
  var h = document.querySelectorAll("#page4 h1");

h.forEach(function(val){
  
   val.addEventListener("mouseenter", function(){
    val.style.color = "#fff"
    val.style.backgroundColor = "#000"
    val.style.paddingLeft = "2vw"
    val.style.fontSize = "7vw"
   });


   val.addEventListener("mouseleave", function(){
    val.style.color = "#000"
    val.style.backgroundColor = "#E5302E"
    val.style.paddingLeft = "0"
    val.style.fontSize = "6vw"
   });
})


}

colorChange()