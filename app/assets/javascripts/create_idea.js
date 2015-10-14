$(document).on('click', "#save-idea", function (event) {
  event.preventDefault();
  // Get the form data & the form
  var title = $("#idea_title").val();
  var body  = $("#idea_body").val();
  var form  = '#idea-creation-area form'

  // Create & render the new idea, and reset the form
  createNewIdea(title, body)
    .then(renderNewIdea)
    .then(function () {
      clearFormFields(form);
  };
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
    + "'><h2>"
    + idea.title
    + "</h2><span>"
    + idea.date
    + "</span><p>"
    + idea.body
    + "</p><span>"
    + idea.quality
    + "\n</span><button name='button' type='submit'>+</button>\n"
    + "<button name='button' type='submit'>-</button>\n"
    + "<a href='ideas/" + idea.id + "/edit'>Edit</a>\n"
    + "<button class='delete-idea' name='button' type='submit'>Delete</button>"
    + "</article>"
  );
};

function clearFormFields (form) {
  $(form).each(function(){
    this.reset();
  });
};