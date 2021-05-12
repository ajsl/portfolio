const debounce = (fn) => {
  let frame;

  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();

let toggleMenu = () => {
  let navBtns = document.getElementById("navItems");
  let toggleUp = document.getElementById("expandMenuUp");
  let toggleDown = document.getElementById("expandMenuDown");
  const hide = "hide-element-mobile";
  const show = "show-element-mobile";

  if (navBtns.classList.contains(hide)) {
    navBtns.classList.add(show);
    navBtns.classList.remove(hide);
    toggleDown.classList.add(hide);
    toggleDown.classList.remove(show);
    toggleUp.classList.add(show);
    toggleUp.classList.remove(hide);
  } else {
    navBtns.classList.add(hide);
    navBtns.classList.remove(show);
    toggleDown.classList.add(show);
    toggleDown.classList.remove(hide);
    toggleUp.classList.add(hide);
    toggleUp.classList.remove(show);
  }
};
