
var granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#833ab4', pos: .2 },
                    { color: '#fd1d1d', pos: .8 },
                    { color: '#38ef7d', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ],
            ]
        }
    }
});

var movieList = document.getElementById('movieList');
var movieBody = document.getElementById('movieBody');
var submitButton = document.getElementById('submitButton')
var apiKeyOMDB = 'c366972e'
var apiTasteDive = '380370-ListenWh-NO41ULTO'
var cards = document.getElementById("cards")
var cardVideo = document.getElementById("cardVideo")
var data = " "
// Search for items
submitButton.addEventListener('click', function () {

    var movieSelection = document.getElementById('movieSelection').value;

    if (movieSelection == "") {
        alert("Please add a movie to search");
    }

    movieSearch(movieSelection);

});





//-------------------FUNCTIONS ------------------------//

function movieSearch(searchString) {


    $.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?limit=1&info=1&q=movie:${searchString}&k=${apiTasteDive}`, function (data1) {
        console.log(data1);
        for (var j = 0; j < data1.Similar.Info.length; j++) {
            var name = data1.Similar.Info[j].Name;
            var teaser = data1.Similar.Info[j].wTeaser;
            var video = data1.Similar.Info[j].yID;



            $.get(`https://www.omdbapi.com/?apikey=${apiKeyOMDB}&type:movie&s=${name}`, function (data) {
                console.log(data);

                var poster = data.Search[0].Poster;




                var movieInfo =
                    `
                <div class="col-md-4">
                    <div class="card m-3 mr-4">
                        <img class="card-img-top" src="${poster}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
        
                        </div>
                    </div>
                </div>
                <div class="col-md-7" id="cardVideo">
                <div class="embed-responsive embed-responsive-16by9 m-3">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${video}?rel=0" allowfullscreen></iframe>
                    </div>
                    <div class="card m-3">
                    <div class="card-body">
                    <p class="card-text">${teaser}</p>
                    </div>
                    </div>
                
                </div>
                `
                // not appending since there is no child but concatenating
                cards.innerHTML += movieInfo;
            })
        }

    })
}