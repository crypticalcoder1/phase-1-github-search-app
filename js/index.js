const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const userResults = document.getElementById("user-results");
const repoResults = document.getElementById("repo-results");
const toggleSearchType = document.getElementById("toggle-search-type");

let searchType = 'user'; // Initial search type

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value;
    if (searchType === 'user') {
        searchUsers(query);
    } else {
        searchRepos(query);
    }
});

toggleSearchType.addEventListener("click", () => {
    searchType = searchType === 'user' ? 'repo' : 'user';
    toggleSearchType.textContent = searchType === 'user' ? 'Search Repositories' : 'Search Users';
    userResults.innerHTML = ''; // Clear user results
    repoResults.innerHTML = ''; // Clear repo results
    searchInput.value = ''; // Clear the input
});
