import { slideData } from "./slideData.js";

const contentContainer = document.querySelector(".studio-content");

Object.entries(slideData).forEach(([category, items], index) => {
  const slide = document.createElement("div");
  slide.className = "swiper studio-slide";
  slide.dataset.tabContent = category;
  if (index !== 0) slide.style.display = "none"; // 첫번째 탭만 보이게

  const wrapper = document.createElement("div");
  wrapper.className = "swiper-wrapper";

  items.forEach((item) => {
    const slideItem = document.createElement("div");
    slideItem.className = "swiper-slide";
    slideItem.innerHTML = `
      <a href="${item.link || "#"}">
        <div class="img-wrap">
          <img class="img-default" src="${item.imgDefault}" alt="${item.name}" />
          <img class="img-hover" src="${item.imgHover}" alt="${item.name}" />
        </div>
        <h3 class="studio-item-name">${item.name}</h3>
        <em class="studio-item-price">${item.price}</em>
      </a>
    `;
    wrapper.appendChild(slideItem);
  });

  slide.appendChild(wrapper);
  contentContainer.appendChild(slide);
});

// 탭 클릭 이벤트
const tabs = document.querySelectorAll(".studio-title");

// 처음 탭에 active 클래스 미리 추가
if (tabs.length > 0) {
  tabs[0].classList.add("active");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const selected = tab.dataset.tab;
    document.querySelectorAll(".studio-slide").forEach((slide) => {
      slide.style.display = slide.dataset.tabContent === selected ? "block" : "none";
    });
  });
});

// 모바일/태블릿에서 자동 이미지 전환 (3초 간격)
const isTabletLess = window.matchMedia("(max-width: 1023px)").matches;

if (isTabletLess) {
  const slides = document.querySelectorAll(".studio-slide .swiper-slide");

  slides.forEach((slide) => {
    const defaultImg = slide.querySelector(".img-default");
    const hoverImg = slide.querySelector(".img-hover");

    if (!defaultImg || !hoverImg) return;

    let isHover = false;

    setInterval(() => {
      defaultImg.style.opacity = isHover ? "1" : "0";
      hoverImg.style.opacity = isHover ? "0" : "1";
      isHover = !isHover;
    }, 3000);
  });
}
