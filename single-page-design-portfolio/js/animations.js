gsap.registerPlugin(ScrollTrigger);

gsap.from(".header", {
  y: "-100%",
  opacity: 0,
  duration: 1,
  ease: Power3.easeOut,
  scrollTrigger: ".header"
})
gsap.from(".services__content", {
  y: "-64px",
  opacity: 0,
  ease: Power1.easeOut, 
  delay: 0.3,
  scrollTrigger: ".services__content"
})
gsap.from(".services__category", {
  y: "-64px",
  opacity: 0,
  ease: Power1.easeOut, 
  delay: 0.3,
  scrollTrigger: ".services__category"
})
gsap.from(".about-us", {
  y: "-64px",
  opacity: 0,
  ease: Power1.easeOut, 
  delay: 0.3,
  scrollTrigger: ".about-us"
})
gsap.from(".my-work", {
  y: "-64px",
  opacity: 0,
  ease: Power1.easeOut, 
  delay: 0.3,
  scrollTrigger: ".my-work"
})
gsap.from(".cta", {
  y: "-64px",
  opacity: 0,
  ease: Power1.easeOut, 
  delay: 0.3,
  scrollTrigger: ".cta"
})
gsap.from(".footer", {
  y: "-64px",
  opacity: 0,
  ease: Power1.easeOut, 
  delay: 0.3,
  scrollTrigger: ".footer"
})