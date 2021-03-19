var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#Text1", .5, {x:200, opacity: 0}),
tl.from("#Bild1", .5, {x:-200, opacity: 0}),
tl.from("#Text2", .5, {x:200, opacity: 0}),
tl.from("#Bild2", .5, {x:-200, opacity: 0}),
tl.from("#Text3", .5, {x:200, opacity: 0}),
tl.from("#Bild3", .5, {x:-200, opacity: 0});


const scene = new ScrollMagic.Scene({


triggerElement: "#Section_Konfiguration",
triggerHook:"onLeave",
duration: "100%"

})

.setPin("#Section_Konfiguration")
.setTween(tl)
.addTo(controller);

function updatePercentage(){

    tl.progress();
    console.log(tl.progress());
}