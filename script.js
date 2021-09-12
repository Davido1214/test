var buttonFunction = function(){
    location.href = 'https://accounts.spotify.com/authorize?client_id=8e0821c9695d4b1aa5c76936afe8cbe6&redirect_uri=https://davido1214.github.io/test/&response_type=token'.then(setTimeout(function(){
        console.log(window.location.href)
        var savedUrl = window.location.href
        var cut = savedUrl.split("=")
        var cut2 = cut[1]
        var cut3 = cut2.split("&")
        var cut4 = cut3[0]
        var cut5 = cut4.split(",")
        var cut6 = cut5[0]
        console.log(cut6)
        getApis(cut6)

       },4000))
    }
     
    var getApis = function(mainCut) {
        
        
       //this link is used to redirect the user to login. Right now the link redirects to one of my gitpages but once this page is properly running we switch the link to this page. Once redirected and authorized the url generates a new auth link which we need to replace the old expired one. (link expires every hour)
     
       //Im having trouble figuring out the best way to add this link and get the access code from the url
     
     
    //    fetch("https://accounts.spotify.com/authorize?client_id=8e0821c9695d4b1aa5c76936afe8cbe6&redirect_uri=https://davido1214.github.io/test/&response_type=token", {mode: "no-cors"}).then(function(response){
    //        return response.json();
    //    })
    //    .then(function(data){
    //        var a = document.createElement("p")
    //        a.innerHTML = data
    //        console.log(data)
    //    })
     

       fetch("https://api.spotify.com/v1/search?q=" + /*this will be the mood selector -> */"Sad" +
     
       "&type=" + /* this will be where the music options are selected -> */ "track%2Cartist%2Cplaylist"
     
        + "&market=US&limit=5&offset=5", {
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               // the var AccesToken would replace the random string that make up the old token
               'Authorization': 'Bearer'+ mainCut,
              
            }
       })
           .then(function(response) {
               return response.json();
           })
           .then(function(data){
               console.log(data);
           });
     
       var qouteApi = "https://goquotes-api.herokuapp.com/api/v1/all/quotes?New%20item=" + /* this will be the mood selector for quote api -> */ "sad";
     
       fetch(qouteApi)
           .then(function(response) {
               return response.json();
           })
           .then(function(data) {
               console.log(data);
           });
    };
     
    getApis();