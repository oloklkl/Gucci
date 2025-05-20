document.addEventListener("DOMContentLoaded", () => {
  const genderTab = document.querySelector(".gender-tabs");
  const button = genderTab.querySelector("button");
  const womanSlides = document.querySelector(".woman-slides");
  const manSlides = document.querySelector(".man-slides");
  const addToCartBtn = document.querySelector(".add-to-cart span");

  button.addEventListener("click", () => {
    const isWoman = button.dataset.gender === "woman";

    if (isWoman) {
      // 남자로 전환
      button.dataset.gender = "man";
      button.innerHTML = `<span>MAN<i class="ri-circle-fill"></i></span>`;
      button.classList.add("man");
      addToCartBtn.classList.add("man");

      womanSlides.classList.remove("active");
      manSlides.classList.add("active");
    } else {
      // 여자로 전환
      button.dataset.gender = "woman";
      button.innerHTML = `<span><i class="ri-circle-fill"></i>WOMAN</span>`;
      button.classList.remove("man");
      addToCartBtn.classList.remove("man");

      womanSlides.classList.add("active");
      manSlides.classList.remove("active");
    }
  });
});

document.querySelector(".add-to-cart").addEventListener("click", () => {
  alert("3개의 조합이 장바구니에 담겼습니다!");
});
