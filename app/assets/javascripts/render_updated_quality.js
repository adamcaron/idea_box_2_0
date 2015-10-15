function renderUpdatedQuality (idea) {
  var oldQuality = $(".idea[data-idea-id=" + idea.id + "]").find(".quality").contents();
  var newQuality = idea.quality;
  // Out with the old, in with the new
  oldQuality.replaceWith(newQuality);
};