

$(document).ready(function () {
    starterBtn();
})

// Topic Buttons
function starterBtn() {
    $("#buttons").empty();
    var topics = [
        "Captain Caveman ", "Transformers ", "Voltron ", "He-man and the Masters of the Universe ", "Care Bears"
    ];

    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>" + topics[i] + "</button>");
        btn.addClass("initialButtons");
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
                img.attr("alt", "cartoon image");
                $("#gifs").prepend(img);

            }
        }
    });
}
// Function to make new buttons generated from user search
$("#find-cartoon").on("click", function (event) {
    // Bez yall said to do this each time :) but it's not working?!
    event.preventDefault();

    var cartoon = $("#inputDefault").val();
    console.log(cartoon);
    var queryUrl =
        "https://api.giphy.com/v1/gifs/search?q=" +
        cartoon +
        "&limit=10&api_key=gQZBZ5VqEfopGgEePg03EipzZzHrwAlo";

    // to call ajax and display gifs in the 'gifs' div
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        // $("#gifs").text(JSON.stringify(response));
        if (response.data.length > 1) {
            for (var i = 1; i < 9; i++) {
                var result = response.data;
                var img = $("<img>");
                var imgUrl = result[i].images.original.url;
                var topics = [
                    "Captain Caveman ", "Transformers ", "Voltron ", "He-man and the Masters of the Universe ", "Care Bears"
                ];
                var btn = $("<button>" + topics[i] + "</button>");
                img.attr("src", imgUrl);
                img.attr("alt", "cartoon image");
                $("#gifs").prepend(img);
                topics.push(cartoon);
                console.log(topics);
                btn.appendTo("#buttons");
                
                starterBtn();
            }
        }

    });
    starterBtn();
})
















