gsap.registerPlugin(ScrollTrigger)

gsap.to("nav", {
    backgroundColor: "#ffffffef",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=300",
        scrub: 0.5
    }
})

gsap.to("#sticker", {
    y: -40,
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=500",
        scrub: 0.5
    }
})

gsap.to("#site-banner", {
    y: 60,
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=800",
        scrub: 0.5
    }
})

gsap.to("h2", {
    y: -60,
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "h1",
        start: "top top",
        end: "+=400",
        scrub: false
    }
})