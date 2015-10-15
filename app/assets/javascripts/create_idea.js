$(document).on('click', "#save-idea", function (event) {
  event.preventDefault();
  // Get the form data
  var title = $("#idea_title").val();
  var body  = $("#idea_body").val();
  var form  = '#idea-creation-area form'
  // Create Idea, Render Idea, Reset the form
  createNewIdea(title, body)
    .then(renderNewIdea)
    .then(function () {
      clearFormFields(form);
  });
});

function createNewIdea (title, body) {
  return $.ajax({
    type: "POST",
    url: "/ideas",
    data: { title: title, body: body }
  });
};

function renderNewIdea (idea) {
  $(".idea").first().before(
    "<article class='idea' data-idea-id='"
    + idea.id
    + "'><h2 class='title'>"
    + idea.title
    + "</h2><span class='date'>"
    + idea.date
    + "</span><p class='body'>"
    + idea.body
    + "</p><a class='edit-idea' href='ideas/" + idea.id + "/edit'>Edit</a>\n"
    + "<button class='delete-idea' type='submit'>Delete</button>\n"
    + "<span class='quality'>"
    + idea.quality
    + "</span>\n<button class='quality-up' type='submit'>+</button>\n"
    + "<button class='quality-down' type='submit'>-</button>"
    + "</article>"
  );
};

function clearFormFields (form) {
  $(form).each(function(){
    this.reset();
  });
};