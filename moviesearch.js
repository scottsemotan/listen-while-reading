        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAc2jn4xxiwxnokgFJRL0o1oqLDfnH1cvw",
            authDomain: "listen-while-reading.firebaseapp.com",
            databaseURL: "https://listen-while-reading.firebaseio.com",
            projectId: "listen-while-reading",
            storageBucket: "listen-while-reading.appspot.com",
            messagingSenderId: "806898700331",
            appId: "1:806898700331:web:d05587dadfc2135ab81a6e"
        };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            //firebase.analytics();
        
        
        //Youtube API

        const CLIENT_ID = '806898700331-qi2505tmqjiq9cfh87of4e2t50moqug4.apps.googleusercontent.com';
        const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
        const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

        const authorizeButton = document.getElementById('authorize-button');
        const signoutButton = document.getElementById('signout-button');
        const content = document.getElementById('content');
        const channelForm = document.getElementById('channel-form');
        const channelInput = document.getElementById('channel-input');
        const videoContainer = document.getElementById('video-container');


        const defaultChannel = 'bookclub';
        //Load auth2 library
        function handleClientLoad (){
            gapi.load('client:auth2', initClient);
        
        }

        //Init API client library and set up sign in listeners
        function initClient(){
            gapi.client.init ({
                discoveryDocs: DISCOVERY_DOCS,
                clientID: CLIENT_ID,
                scope: SCOPES
            }).then(() => {
                //Listen for sign in state changes
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                //Handle initial sign in state
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                authorizeButton.onclick = handleAuthClick;
                signoutButton.onclick = handleSignoutClick;
            });
        }
        //Update UI sign in state changes
        function updateSigninStatus(isSignedIn) {
            if(isSignedIn) {
                authorizeButton.style.display = 'none';
                signoutButton.style.display = 'block';
                content.style.display = 'block';
                videoContainer.style.display = 'block';
                getChannel(defaultChannel);
            } else {
                authorizeButton.style.display = 'block';
                signoutButton.style.display = 'none';
                content.style.display = 'none';
                videoContainer.style.display = 'none';
            }
        }

        //Handle login
        function handleAuthClick() {
            gapi.auth2.getAuthInstance().signIn();
        }
        //Handle log out
        function handleSignoutClick() {
            gapi.auth2.getAuthInstance().signOut();
        }

        //Get channel from API
        function getChannel(channel) {
            gapi.client.youtube.channels.list({
                part: 'snippet,contentDetails,statistics',
                forUsername: channel
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => alert('No Channel By That Name'));
        }

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