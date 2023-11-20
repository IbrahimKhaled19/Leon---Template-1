function toggleSearchBar() {
    var searchBarContainer = document.getElementById("search-bar-container");
    searchBarContainer.style.display = (searchBarContainer.style.display === "none" || searchBarContainer.style.display === "") ? "flex" : "none";
    searchBarContainer.classList.toggle("fade-in");
}