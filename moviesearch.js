var movieList = document.getElementById('movieList');
var movieBody = document.getElementById('movieBody');
var submitButton = document.getElementById('submitButton')
var apiKeyOMDB = 'c366972e'
var apiTasteDive = '380370-ListenWh-NO41ULTO'
var cards = document.getElementById("cards")
var cardVideo = document.getElementById("cardVideo")
// Search for items
submitButton.addEventListener('click', function() { 
   
    var movieSelection = document.getElementById('movieSelection').value;
    
    if (movieSelection == "") {
            alert("Please add a movie to search");
        }

    $.get(`https://www.omdbapi.com/?apikey=${apiKeyOMDB}&s=${movieSelection}`, function (data) {
        movieSearch(data);  
        
    });
    
});
//-------------------FUNCTIONS ------------------------//
function movieSearch(data) {
    console.log(data);
    cards.innerHTML = '';
    for (var i = 0; i < data.Search.length; i++) {        
        var title = data.Search[i].Title;
        var poster = data.Search[i].Poster;
        var movieInfo = 
        `
        <div class="col-md-4">
            <div class="card m-3 mr-4">
                <img class="card-img-top" src="${poster}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                </div>
            </div>
        </div>
        <div class="col-md-7">
        <div class="embed-responsive embed-responsive-16by9 m-3">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dxQxgAfNzyE?rel=0" allowfullscreen></iframe>
        </div>
        <div class="card m-3">
        <div class="card-body">
        <p class="card-text">Plot:</p>
</div>
</div>
        </div>
        `
        // not appending since there is no child but concatenating
        cards.innerHTML += movieInfo;
$.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?limit=1&info=1&q=movie:${title}&k=${apiTasteDive}`, function (data) {
            videoSearch(data);
})

    function videoSearch(data) {
    
        cardVideo.innerHTML = '';
        console.log(data);
        for (var i = 0; i < data.length; i++) { 
            var teaser = data.Similar.Info[i].wTeaser;
            var video = data.Similar.Info[i].yID;
            
            var videoInfo = 
            `
            <div class="embed-responsive embed-responsive-16by9 m-3">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${video}?rel=0" allowfullscreen></iframe>
            </div>
            <div class="card m-3">
            <div class="card-body">
            <p class="card-text">${teaser}</p>
            </div>
            </div>
            `
            // not appending since there is no child but concatenating
            cardVideo.innerHTML += videoInfo;
            
        }
        }    
    }
}
