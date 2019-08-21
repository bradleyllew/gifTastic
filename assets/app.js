

$(document).ready(function () {
    createBtn();
})

// Topic Buttons
function createBtn() {
    $("#buttons").empty();
    var topics = [
        "Captain Caveman ", "Transformers ", "Voltron ", "He-man and the Masters of the Universe "
    ];

    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>" + topics[i] + "</button>");
        btn.addClass("jsonData");
        btn.attr("data-name", topics[i]);
        btn.attr("onclick", "displayGifs('" + topics[i] + "')");
        btn.appendTo("#buttons");
    }
}
// Gifs
function displayGifs(topic) {
    var queryUrl =
        "https://api.giphy.com/v1/gifs/search?q=" +
        topic +
        "&limit=10&api_key=gQZBZ5VqEfopGgEePg03EipzZzHrwAlo";
    var apiKey = "gQZBZ5VqEfopGgEePg03EipzZzHrwAlo";
    // var p = newFunction();

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        if (response.data.length > 1) {
            for (var i = 1; i < 9; i++) {
                var result = response.data;
                var img = $("<img>");
                var imgUrl = result[i].images.original.url;
                img.attr("src", imgUrl);
                $("#gifs").append(img);
                // $("#gifs").append(p);
            }
        }
    });


    // function newFunction() {
    //     var rating = response.data.rating;
    //     var p = $("<p>").text("Rating: " + rating);
    //     return p;
    // }
}















  // function displayCartoonInfo() {

//     var cartoon = $(this).attr("data-name");
//     var queryURL = url;

//     $.ajax({
//         url: queryURL,
//         method: "GET"

//     }).then(function (response) {

//         // Creating a div to hold the movie
//         var cartoonDiv = $("<div class='cartoon'>");

//         // Storing the rating data
//         var rating = response.Rated;

//         // Creating an element to have the rating displayed
//         var pOne = $("<p>").text("Rating: " + rating);

//         // Displaying the rating
//         cartoonDiv.append(pOne);

//         var imgURL = response.Poster;

//         // Creating an element to hold the image
//         var image = $("<img>").attr("src", imgURL);

//         // Appending the image
//         cartoonDiv.append(image);

//         // Putting the entire movie above the previous movies
//         $("#buttons-appear-here").prepend(cartoonDiv);
//     });
// }

// function renderButtons() {

//     // Deleting the movies prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#buttons-view").empty();

//     // Looping through the array of movies
//     for (var i = 0; i < topics.length; i++) {

//       // Then dynamicaly generating buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//       var a = $("<button>");
//       // Adding a class of movie-btn to our button
//       a.addClass("cartoon-btn");
//       // Adding a data-attribute
//       a.attr("data-name", topics[i]);
//       // Providing the initial button text
//       a.text(topics[i]);
//       // Adding the button to the buttons-view div
//       $("#buttons-view").append(a);
//     }
//   }
//   $("#add-cartoon").on("click", function(event) {
//     event.preventDefault();
//     // This line grabs the input from the textbox
//     var cartoon = $(".btn").val().trim();

//     // Adding movie from the textbox to our array
//     topics.push(cartoon);

//     // Calling renderButtons which handles the processing of our movie array
//     renderButtons();
//   });

//   // Adding a click event listener to all elements with a class of "movie-btn"
//   $(document).on("click", ".btn", displayCartoonInfo);

//  Calling the renderButtons function to display the intial buttons

