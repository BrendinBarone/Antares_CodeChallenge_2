console.log('js is sourced');

$(document).ready(function() {
  console.log('Doc.Ready has been called-Jquery is sourced');

getAllJokes();
  $('#addJokeButton').on('click', function() {
    console.log('addJokeButton on click');
    var newJoke = {
      whoseJoke: $('#whoseJokeIn').val(),
      jokeQuestion: $('#questionIn').val(),
      punchLine: $('#punchlineIn').val(),
    };
    console.log('new joke is:', newJoke);
    $.ajax({
      type: 'POST',
      url: '/addJokes',
      data: newJoke,
      success: function(response) {
        getAllJokes();
      }
    });
  }); // end addJokeButton on click


}); // end doc ready
function jokesToDom(response) {
  for (i = 0; i < response.length; i++) {
    $('#outputDiv').append('<h3>' + response[i].whoseJoke + '</h3>');
    $('#outputDiv').append('<p>' + response[i].jokeQuestion + '</p>');
    $('#outputDiv').append('<p>' + response[i].punchLine + '</p>');
  }
}
function getAllJokes() {
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response) {
      console.log('response is :', response);
      jokesToDom(response);
    }
  });
}
