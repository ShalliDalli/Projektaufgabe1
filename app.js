var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();

const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();
const controller4 = new ScrollMagic.Controller();

tl.from("#Installation", .5, {x:200, opacity: 0}),
tl.from("#Text1", .5, {x:200, opacity: 0}),
tl.from("#Bild1", .5, {x:-200, opacity: 0}),
tl.from("#Bild2", .5, {x:-200, opacity:0});

tl2.from("#Text1_", .5, {x:200, opacity: 0}),
tl2.from("#Bild1_", .5, {x:-200, opacity: 0}),
tl2.from("#Text2_", .5, {x:200, opacity: 0}),
tl2.from("#Bild2_", .5, {x:-200, opacity: 0}),
tl2.from("#Text3_", .5, {x:200, opacity: 0}),
tl2.from("#Bild3_", .5, {x:-200, opacity: 0});

tl3.from("#Telefon1", .5, {x:200,opacity: 0}),
tl3.from("#Telefon2", .5, {x:-200,opacity: 0});

tl4.from("#MicroSIP_1", .5, {x:200, opacity: 0}),
tl4.from("#MicroSIP_2", .5, {x:-200, opacity: 0}),
tl4.from("#LinPhone_1", .5, {x:200, opacity: 0}),
tl4.from("#LinPhone_2", .5, {x:-200, opacity: 0});

const scene = new ScrollMagic.Scene({

triggerElement: "#Section_Konfiguration",
triggerHook:"onLeave",
duration: "100%"

})

.setPin("#Section_Konfiguration")
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({


    triggerElement: "#Section_Allgemeines",
    triggerHook:"onLeave",
    duration: "100%"
    
    })

    .setPin("#Section_Allgemeines")
.setTween(tl2)
.addTo(controller2);

const scene3 = new ScrollMagic.Scene({


triggerElement: "#Section_Telefone",
triggerHook:"onLeave",
duration:"100%"

})

.setPin("#Section_Telefone")
.setTween(tl3)
.addTo(controller3);

const scene4 = new ScrollMagic.Scene({


triggerElement: "#Section_ClientKonfiguration",
triggerHook:"onLeave",
duration:"100%"

})

.setPin("#Section_ClientKonfiguration")
.setTween(tl4)
.addTo(controller4);

var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});

t1.to(".two", 0.8, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});

t1.to(".menu", 2, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -2
});

t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();

$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function() {
     t1.reversed(!t1.reversed());
});





