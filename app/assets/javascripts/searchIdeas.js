$(document).ready(function () {
  filterSearchInput();
});

function filterSearchInput () {
  // When user types something
  $("#search-input").keyup(function () {
    var input = $("#search-input").val().toLowerCase()
    // Find search results
    renderSearchResults(input);
  });
};

function renderSearchResults (searchInput) {
  // Compare all the ideas with Search Input
  $(".idea").each(function (index, idea) {
    var ideaContent = $(idea).find('.title, .body').text().toLowerCase()
    // Compare content with search terms
    var results = ideaContent.indexOf(searchInput) !== -1;
    // hide or show accordingly
    $(idea).toggle(results)
  });
};