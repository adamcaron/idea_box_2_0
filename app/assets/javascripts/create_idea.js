$(document).on('click', "#save-idea", function (event) {
  event.preventDefault();
  var title = $("#idea_title").val();
  var body  = $("#idea_body").val();
  var form  = '#idea-creation-area form'
  createNewIdea(title, body);
  clearFormFields(form);
});

function createNewIdea(title, body) {
  $.ajax({
    type: "POST",
    url: "/ideas",
    data: { title: title, body: body },
    success: function(newIdea) {
      renderNewIdea(newIdea);
    }
  });
};

function clearFormFields(form) {
  $(form).each(function(){
    this.reset();
  });
};

function renderNewIdea(idea) {
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
    + "</span><button name='button' type='submit'>-</button>\n"
    + "</span><button name='button' type='submit'>Edit</button>\n"
    + "</span><button class='delete-idea' name='button' type='submit'>Delete</button>"
    + "</article>"
  );
};