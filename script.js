document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownContents = document.querySelectorAll('.dropdown-content');
  const menuBtn = document.querySelector('.menu_btn'); // Ensure this selector matches your actual menu button

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', function(event) {
      this.classList.toggle("active");
      event.preventDefault();
      const targetDropdownContent = document.querySelector(`[data-target="${this.dataset.dropdown}"]`);
      if (targetDropdownContent.style.display === 'block') {
        targetDropdownContent.style.display = 'none';
      } else {
        targetDropdownContent.style.display = 'block';
      }
    });
  });
});

