// 1. 모바일에서 상품 클릭 시 overlay 토글
document.querySelectorAll(".product-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    // 하트를 클릭한 경우는 제외
    if (e.target.closest(".add-favorite")) return;

    const overlay = item.querySelector(".product-overlay");
    overlay.classList.toggle("active");
  });
});

// 2. 하트 클릭 시 아이콘 토글 + 찜 리스트 추가 + 팝업 알림
document.querySelectorAll(".add-favorite").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // 상위 클릭 막기

    // 하트 아이콘 토글
    const icon = btn.querySelector("i");
    const isFilled = icon.classList.contains("ri-heart-3-fill");

    icon.classList.toggle("ri-heart-3-fill", !isFilled);
    icon.classList.toggle("ri-heart-3-line", isFilled);

    // 팝업 알림
    alert("상품이 찜 목록에 추가되었습니다!");
  });
});
