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
        ${item.season ? `<span class="studio-item-season">${item.season}</span>` : ""}
      </a>
    `;
    wrapper.appendChild(slideItem);
  });

  slide.appendChild(wrapper);
  contentContainer.appendChild(slide);
});

// 탭 클릭 이벤트
const tabs = document.querySelectorAll(".studio-title");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.tab;
    document.querySelectorAll(".studio-slide").forEach((slide) => {
      slide.style.display = slide.dataset.tabContent === selected ? "block" : "none";
    });
  });
});
