
        
        var movieList = document.getElementById('movieList');
        var movieBody = document.getElementById('movieBody');
        var submitButton = document.getElementById('submitButton')
        var apiKey = 'c366972e'
        var cards = document.getElementById("cards")
        // Search for items
        submitButton.addEventListener('click', function() {
            // getting the values for filters 
            var movieSelection = document.getElementById('movieSelection').value;
            
            if (movieSelection == "") {
                    alert("Please add a movie to search");
                }
            // seems a variable can have a blank value and the url will still work as long as formatting is correct
            $.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieSelection}`, function (data) {
                movieSearch(data);  
                
            });
            
        });
        //---------------- FUNCTIONS ------------------------//
        // function to get multiple items
        function movieSearch(data) {
            // clear the existing item in the div before adding items
            cards.innerHTML = '';
            for (var i = 0; i < data.Search.length; i++) { 
                var title = data.Search[i].Title;
                var year = data.Search[i].Year;
                var imdbID = data.Search[i].imdbID;
                var type = data.Search[i].Type;
                var poster = data.Search[i].Poster;
                
                var movieInfo = 
                `
                <div class="col-md-4">
                    <div class="card m-3 mr-4">
                        <img class="card-img-top" src="${poster}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">Year: ${year}, IMDB ID: ${imdbID}, Type: ${type}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card m-3">
                        <div class="card-body">
                        <p class="card-text">Plot:</p>
                </div>
                </div>
                </div>
                `
                // not appending since there is no child but concatenating
                cards.innerHTML += movieInfo;
                
            }
        }

        /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  