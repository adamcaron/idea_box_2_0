$(document).on('click', ".quality-down", function (event) {
  event.preventDefault();
  // Get the id
  var id = $(this).closest(".idea").data("idea-id")
  // Update the idea
  decreaseQuality(id)
    // Render the new quality
    .then(renderUpdatedQuality);
});

function decreaseQuality (id) {
  return $.ajax({
    type: "PUT",
    url: "/ideas/" + id + "/quality-down"
  })
};