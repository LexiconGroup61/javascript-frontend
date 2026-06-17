gsap.registerPlugin(MorphSVGPlugin);
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

gsap.to("#bug", {
    morphSVG: "#bank",
    duration: 2,
    delay: 1,
    type: "rotational",
    map: "complex",
    repeat: -1,
    yoyo: true});

gsap.to("#curve", {
    attr: {
        d: "M.16,146.7C171.78,160.21,240.7-43.84,390.7,11.56c150,55.41,157.96,107.82,285.14,135.14"
    },
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "elastic"
})