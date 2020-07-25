
        
        var movieList = document.getElementById('movieList');
        var movieBody = document.getElementById('movieBody');
        var mButton = document.getElementById("getMultItems"); 
        var sButton = document.getElementById('getOneItem');
        var submitButton = document.getElementById('submitButton')
        var apiKey = 'c366972e'
        var cards = document.getElementById("cards")


        // Button to retrieve multiple items
        mButton.addEventListener('click', function() {
            
            $.get(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=legend`, function (data) {
                addMultiple(data);
            });
        });

        // Button to retrieve single item
        sButton.addEventListener('click', function() {
            
            $.get(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=batman`, function (data) {
                addSingle(data);
            });
        });


        // Search for items
        submitButton.addEventListener('click', function() {
            // getting the values for filters 
            var movieSelection = document.getElementById('movieSelection').value;
            var yearChoice = document.getElementById("releaseYear").value;
            var typeChoice = document.getElementById("movieSeriesChoice").value;

            
            if (movieSelection == "") {
                    alert("Please add a movie to search");
                }
            // seems a variable can have a blank value and the url will still work as long as formatting is correct
            $.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieSelection}&y=${yearChoice}&type=${typeChoice}`, function (data) {
                addMultiple(data);  
                
            });
            
        });

        //---------------- FUNCTIONS ------------------------//

        // function to get multiple items
        function addMultiple(data) {
            // clear the existing item in the div before adding items
            cards.innerHTML = '';
            for (var i = 0; i < data.Search.length; i++) { 
                var title = data.Search[i].Title;
                var year = data.Search[i].Year;
                var imdbID = data.Search[i].imdbID;
                var type = data.Search[i].Type;
                var poster = data.Search[i].Poster;
                
                var movieContainer = document.createElement('div');

                var movieInfo = 
                `
                <div class="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src="${poster}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">Year: ${year}, IMDB ID: ${imdbID}, Type: ${type}</p>
                        </div>
                    </div>
                </div>
                `
                // not appending since there is no child but concatenating
                cards.innerHTML += movieInfo;
                
            }
        }      



        // function to get a single item
        function addSingle(data) {
            //Get random movie from array of searched items
            var singleMovie = data.Search[Math.floor(Math.random() * data.Search.length)];      
            var title = singleMovie.Title;
            var year = singleMovie.Year;
            var imdbID = singleMovie.imdbID;
            var type = singleMovie.Type;
            var poster = singleMovie.Poster;
            // clear the existing item in the div before adding items
            cards.innerHTML = '';
            var movieContainer = document.createElement('div');

            // using template literal to append items
            var movieInfo = 
                `
                <div class="col-md-12">
                    <div class="card">
                        <img class="card-img-top" src="${poster}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">Year: ${year}, IMDB ID: ${imdbID}, Type: ${type}</p>
                        </div>
                    </div>
                </div>
                `  
              // not appending since there is no child but concatenating
              cards.innerHTML += movieInfo;
        }; // <--- end of document readiness check
  