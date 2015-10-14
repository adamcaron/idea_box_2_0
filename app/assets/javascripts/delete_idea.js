$(document).ready(function(){
  $(".idea").delegate(".delete-idea", "click", function (event){
    event.preventDefault();

    // Get the id
    var id = $(this).closest(".idea").data("idea-id")

    // Double check
    if (confirm('Are you sure you want to DELETE this Idea?')) {
      deleteIdea(id);
    }
  });
});

function deleteIdea(id) {
  $.ajax({
    type: "DELETE",
    url: "/ideas/" + id,
    success: function () {
      removeIdeaFromPage(id);
    }
  });
};

function removeIdeaFromPage(id) {
  var idea = $(".idea[data-idea-id=" + id + "]");
  var confirmation = "<h2 class='notification'>Idea deleted.</h2>";

  // Confirm deletion
  idea.replaceWith(confirmation);
  $(".notification").fadeOut(2000, 'linear');
};