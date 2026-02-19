
const sections = document.querySelectorAll(
  ".home, .services, .about, .plans, .testimonial",
);

const animations = {
  home: "homeAnime 1.2s ease-out forwards",
  services: "servicesAnimate 1.5s ease-out forwards",
  testimonial: "homeAnime 1.2s ease-out forwards",
  about: "homeAnime 1.5s ease-out forwards",
  plans: "servicesAnimate 1.5s ease-out forwards",
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
      
        const sectionName = [...entry.target.classList].find((cls) =>
          animations.hasOwnProperty(cls),
        );

        if (sectionName) {
          entry.target.style.animation = animations[sectionName];
          observer.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.3 }, 
);

sections.forEach((section) => observer.observe(section));
