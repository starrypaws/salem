document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const secret = document.querySelectorAll(".secret")
  
   secret.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      const h2 = document.querySelector("h2")
      const wrapper = document.querySelector(".wrapper")
      if (h2.style.display === "none") {
      h2.style.display = "block";
      wrapper.style.display = "none";
      } else {
        h2.style.display = "none";
        wrapper.style.display = "block";
      }
      event.preventDefault();
    })
  })

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      this.classList.toggle("active");
      event.preventDefault();
      const targetDropdownContent = document.querySelector(
        `[data-target="${this.dataset.dropdown}"]`
      );
      if (targetDropdownContent.style.display === "block") {
        targetDropdownContent.style.display = "none";
      } else {
        targetDropdownContent.style.display = "block";
      }
    });
  });
});
