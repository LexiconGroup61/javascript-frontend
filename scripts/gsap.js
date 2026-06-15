const timeline = gsap.timeline();

timeline
    .to("p", {
    scale: .5,
    stagger: 0.1,
    ease: "elastic.out",
    duration: 3
})
    .to("h1", {
    x: 200,
})
    .to("div", {
    y: 200
})