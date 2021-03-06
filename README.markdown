[![Stories in Ready](https://badge.waffle.io/adamcaron/idea_box_2_0.png?label=ready&title=Ready)](https://waffle.io/adamcaron/idea_box_2_0)
# Idea Box 2.0

Production URL: https://box-o-ideas.herokuapp.com/

A simple application for recording and archiving ideas. This app is a project for the Turing School of Software and Design. The original project specifications can be found [here](https://github.com/turingschool/curriculum/blob/master/source/projects/revenge_of_idea_box.markdown).

Throughout the project, one of the focuses will be on providing a fluid and responsive client-side interface. To this end, javascript and jQuery is relied upon to implement snappy filtering in the browser, and AJAX to enable inconspicuous communication between client and server.

This app features:
 - Rails to manage data related to our ideas and serve initial UI templates
 - Javascript (with jQuery) to manage client-side interactions and communicate asynchronously with the server

### Setup

To run this app locally:
 - `git clone git@github.com:adamcaron/idea_box_2_0.git`
 - `bundle install`
 - `rake db:setup`
 - `rails s`
 - Navigate to http://localhost:3000

To run the test suite: `bundle exec rspec`