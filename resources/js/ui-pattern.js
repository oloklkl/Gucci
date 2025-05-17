const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

// 기본 a 태그 클릭 이벤트 방지
const preventDefaultAnchor = () => {
  const $links = getAll('a[href="#"]');
  $links.forEach((link) => {
    link.addEventListener("click", (e) => e.preventDefault());
  });
};

// GNB 메뉴 기능 (상단 네비서브)
const navBar = () => {
  const $gnblis = getAll("#header .nav .gnb > li");

  $gnblis.forEach((li) => {
    const submenu = li.querySelector("ul");

    li.addEventListener("mouseenter", () => {
      $gnblis.forEach((otherLi) => {
        const otherSub = otherLi.querySelector("ul");
        if (otherSub) otherSub.classList.remove("on");
      });

      if (submenu) submenu.classList.add("on");
    });

    li.addEventListener("mouseleave", () => {
      if (submenu) submenu.classList.remove("on");
    });
  });
};

// Skip Navigation (탭 접근성 개선)
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

// 헤더 & 로고 스타일 변경 함수
function setHeaderStyle(isActive) {
  const header = get("#header");
  const logoNav = get(".logo-nav");
  const logoImg = get("h1 img");

  if (isActive) {
    // 메뉴 열림 또는 스크롤 내렸을 때 (배경 흰색, 검은 글씨/아이콘)
    header.classList.add("transparent");
    logoNav.classList.add("active");
    logoImg.style.filter = "none";
  } else {
    // 메뉴 닫힘 상태 - 스크롤 위치에 따라 스타일 복구
    const introSection = get(".intro");
    if (introSection.getBoundingClientRect().bottom <= 0) {
      header.classList.add("transparent");
      logoNav.classList.add("active");
      logoImg.style.filter = "none";
    } else {
      header.classList.remove("transparent");
      logoNav.classList.remove("active");
      logoImg.style.filter = "invert(100%) sepia(94%) saturate(25%) hue-rotate(12deg) brightness(105%) contrast(108%)";
    }
  }
}

// 스크롤 이벤트에 따라 헤더 스타일 변경
window.addEventListener("scroll", () => {
  // 만약 카테고리 메뉴가 열려있으면 스크롤 이벤트 시 헤더 스타일 변경 안 함 (우선순위)
  const bottomCategory = get(".bottom-category");
  if (bottomCategory && bottomCategory.classList.contains("show")) {
    return;
  }
  setHeaderStyle(false);
});

// CATEGORY 버튼 & 하위 메뉴 토글
const bottomMenuToggle = () => {
  const menuItems = getAll(".bottom-category .gnb > li");
  const bottomCategory = get(".bottom-category");
  const categoryBtn = get(".bottom-bar ul li:first-child"); // CATEGORY 버튼

  // CATEGORY 버튼 클릭 시 메뉴 show 토글 & 헤더 스타일 변경
  categoryBtn.addEventListener("click", () => {
    bottomCategory.classList.toggle("show");

    // 메뉴 열림 여부에 따라 헤더 스타일 변경
    const isOpen = bottomCategory.classList.contains("show");
    setHeaderStyle(isOpen);

    if (isOpen) {
      categoryBtn.classList.add("active");
    } else {
      categoryBtn.classList.remove("active");
    }
  });

  // 하위 메뉴 아이템 클릭 시 토글 (서브메뉴 열기/닫기)
  menuItems.forEach((item) => {
    const link = item.querySelector("a");

    link.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Clicked:", item);

      menuItems.forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
};

// DOM 준비 후 초기화
document.addEventListener("DOMContentLoaded", () => {
  preventDefaultAnchor();
  navBar();
  skipNav();
  bottomMenuToggle();

  // 화면 크기 변경 시 카테고리 메뉴 닫기 처리
  window.addEventListener("resize", () => {
    const bottomCategory = document.querySelector(".bottom-category");
    const categoryBtn = document.querySelector(".bottom-bar ul li:first-child");
    if (bottomCategory && bottomCategory.classList.contains("show")) {
      bottomCategory.classList.remove("show");
      categoryBtn.classList.remove("active");

      // 닫혔으니 헤더 스타일 복구
      setHeaderStyle(false);

      // 서브메뉴 열려있으면 다 닫기
      const menuItems = document.querySelectorAll(".bottom-category .gnb > li.active");
      menuItems.forEach((item) => item.classList.remove("active"));
    }
  });
});
