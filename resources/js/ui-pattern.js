const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

// 기본 a 태그 클릭 이벤트 방지
const preventDefaultAnchor = () => {
  const $links = getAll('a[href="#"]');
  $links.forEach((link) => {
    link.addEventListener("click", (e) => e.preventDefault());
  });
};

// GNB 메뉴 기능
const navBar = () => {
  const $gnblis = getAll("#header .nav .gnb > li");

  $gnblis.forEach((li, idx) => {
    const submenu = li.querySelector("ul");

    li.addEventListener("mouseenter", () => {
      // 모든 서브메뉴 닫기
      $gnblis.forEach((otherLi) => {
        const otherSub = otherLi.querySelector("ul");
        if (otherSub) otherSub.classList.remove("on");
      });

      // 해당 li의 서브메뉴 열기
      if (submenu) submenu.classList.add("on");
    });

    li.addEventListener("mouseleave", () => {
      if (submenu) submenu.classList.remove("on");
    });
  });
};

// Skip Navigation (Tab 키로 이동 문제 해결)
const skipNav = () => {
  const $skipLinks = getAll("#skip-nav a");

  $skipLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = get(targetId);

      if (targetElement) {
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus();
      }
    });
  });
};

// 전체 실행
document.addEventListener("DOMContentLoaded", () => {
  preventDefaultAnchor();
  navBar();
  skipNav();
});

// Scroll 이벤트에 따라 헤더 투명도 조절
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const introSection = document.querySelector(".intro");
  const logoNav = document.querySelector(".logo-nav");
  const logoImg = document.querySelector("h1 img"); // 로고 이미지 선택

  if (introSection.getBoundingClientRect().bottom <= 0) {
    header.classList.add("transparent");
    logoNav.classList.add("active");

    // 헤더가 흰색일 때 검은색 로고 적용
    logoImg.style.filter = "none"; // 필터 제거 (검은색 로고)
  } else {
    header.classList.remove("transparent");
    logoNav.classList.remove("active");

    // 헤더가 투명일 때 흰색 로고 적용
    logoImg.style.filter = "invert(100%) sepia(94%) saturate(25%) hue-rotate(12deg) brightness(105%) contrast(108%)";
  }
});
