document.addEventListener("DOMContentLoaded", function () {
  // 드롭다운 메뉴 모두 숨김 (초기 설정)
  document.querySelectorAll(".dropdown-box").forEach(dropdown => {
    dropdown.style.display = "none";
  });

  // 드롭다운 호버 기능
  document.querySelectorAll(".dropdown-hover").forEach(item => {
    const dropdown = item.querySelector(".dropdown-box");

    item.addEventListener("mouseenter", () => {
      dropdown.style.display = "flex";
    });

    item.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });

    dropdown.addEventListener("mouseenter", () => {
      dropdown.style.display = "flex";
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });
  });

  // Owl Carousel 초기화
  const owl = $(".banner_slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    dots: false
  });

  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});