$(document).on('click', ".quality-up", function (event) {
  event.preventDefault();
  // Get the id
  var id = $(this).closest(".idea").data("idea-id")
  // Update the idea
  increaseQuality(id)
    // Render the new quality
    .then(renderUpdatedQuality);
});

function increaseQuality (id) {
  return $.ajax({
    type: "PUT",
    url: "/ideas/" + id + "/quality-up"
  })
};