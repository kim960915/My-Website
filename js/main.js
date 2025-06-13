// ✅ Home 타이핑 효과
const content = "Hello, I’m MIJI!!";
const text = document.querySelector(".title h1");
let textIdx = 0;

function typing() {
  let txt = content[textIdx++];
  text.innerHTML += txt;
  if (textIdx > content.length) {
    text.textContent = "";
    textIdx = 0;
  }
}
setInterval(typing, 200);

// ✅ 스크롤 애니메이션
const aboutCard = document.querySelector(".about_profile");
const goalCard1 = document.querySelector(".goal_detail_1");
const goalCard2 = document.querySelector(".goal_detail_2");
const goalCard3 = document.querySelector(".goal_detail_3");
const contactTitle = document.querySelector("#contact .category h2");
const contactLink = document.querySelector("#contact .link ul");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (aboutCard) {
    if (scrollY < 400) {
      aboutCard.style.animation = "about_backslide 0.5s ease-out forwards";
    } else {
      aboutCard.style.animation = "about_slide 0.5s ease-out";
    }
  }

  if (goalCard1 && goalCard2 && goalCard3) {
    if (scrollY > 1950) {
      goalCard1.style.animation = "show 0.3s linear forwards";
      goalCard2.style.animation = "show 0.8s linear forwards";
      goalCard3.style.animation = "show 1.2s linear forwards";
    } else {
      goalCard1.style.animation = "out 0.3s linear forwards";
      goalCard2.style.animation = "out 0.8s linear forwards";
      goalCard3.style.animation = "out 1.2s linear forwards";
    }
  }

  if (contactTitle && contactLink) {
    if (scrollY > 2500) {
      contactTitle.style.animation = "grow 0.8s linear";
      contactLink.style.animation = "grow 0.8s linear";
    } else {
      contactTitle.style.animation = "grow-out 0.5s linear";
      contactLink.style.animation = "grow-out 0.5s linear";
    }
  }
});

// ✅ 슬라이드 공통 초기화 함수
function initSlide(sectionSelector) {
  const slides = document.querySelector(`${sectionSelector} .slides`);
  const slide = document.querySelectorAll(`${sectionSelector} .slides li`);
  const prevBtn = document.querySelector(`${sectionSelector} .prev`);
  const nextBtn = document.querySelector(`${sectionSelector} .next`);

  if (!slides || !slide.length || !prevBtn || !nextBtn) return;

  const slideCount = slide.length;
  const slideWidth = 300;
  const slideMargin = 30;
  const visibleSlides = 3;
  let currentIdx = 0;

  slides.style.width =
    (slideWidth + slideMargin) * slideCount - slideMargin + "px";

  function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + "px";
    currentIdx = num;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIdx < slideCount - visibleSlides) {
      moveSlide(currentIdx + 1);
    } else {
      moveSlide(0);
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIdx > 0) {
      moveSlide(currentIdx - 1);
    } else {
      moveSlide(slideCount - visibleSlides);
    }
  });
}

// ✅ 슬라이드 섹션 초기화 실행
document.addEventListener("DOMContentLoaded", function () {
  initSlide("#doing");
  initSlide("#future");
});
