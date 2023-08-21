document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".navbar-search-icon");
    const searchInput = document.querySelector(".navbar-search-input");

    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchInput.classList.toggle("active");
        searchInput.focus();
    });
});