$(document).on('click', ".delete-idea", function (event) {
  event.preventDefault();

  // Get the id
  var id = $(this).closest(".idea").data("idea-id")

  // Double check ...
  if (confirm('Are you sure you want to DELETE this Idea?')) {
    deleteIdea(id)
      .then(function () {
        removeIdeaFromPage(id);
      });
  }
});

function deleteIdea(id) {
  return $.ajax({
    type: "DELETE",
    url: "/ideas/" + id
  });
};

function removeIdeaFromPage(id) {
  var idea = $(".idea[data-idea-id=" + id + "]");
  var confirmation = "<h2 class='notification'>Idea deleted.</h2>";

  // Remove the idea and confirm it was deleted.
  idea.replaceWith(confirmation);
  $(".notification").fadeOut(2000, 'linear');
};