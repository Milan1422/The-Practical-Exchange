// Start jQuery
$(document).ready(function(){
    
    let queryURL = "https://trashnothing.com/api/v1.2/posts?types=offer%2Cwanted&sources=trashnothing&per_page=20&page=1&device_pixel_ratio=1&latitude=33.753746&longitude=-84.386330&radius=8046&api_key=neM53IMDcPYKL6OY2kVpLv4pLEJCNrhE5qvGNSm5"
    let i = 0;
    
    // testing trash data populating on page
    function trashInfo(){
        $.ajax({
            url: queryURL,
            type: "GET"
        }).then(function(response){
            let postsArray = response.posts;
            console.log(postsArray)
            // retrive post title
            let postTitles = postsArray[i];
            $("#item-title").text(JSON.stringify(postTitles.title));
            $("#item-description").text(JSON.stringify(postTitles.content));
            if (postTitles.photos === null) {
                $("#item-picture").attr("src", "./images/picture-not-available-clipart.jpg")
            } else {
                let newImag = postTitles.photos[0].images[0].url
                $("#item-picture").attr("src", newImag)
            }
            
            //change map location to area where the item is
            let mapDiv = $("<iframe>");
            let lat = postTitles.latitude;
            let lon = postTitles.longitude;
            mapDiv.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyCduODfiPUcej_InoxKiD8Re6Eb9RtsTeU&center=" + lat + "," + lon + "&zoom=15&maptype=roadmap");
            $("#google-embed-map").html(mapDiv);   
            
            // Next button 
            $("#next-post-btn").on("click", function (){
                i = (i + 1) % postsArray.length;
                let postTitles = postsArray[i];
                $("#item-title").text(JSON.stringify(postTitles.title));
                $("#item-description").text(JSON.stringify(postTitles.content));
                if (postTitles.photos === null) {
                    $("#item-picture").attr("src", "./images/picture-not-available-clipart.jpg")
                } else {
                    let newImag = postTitles.photos[0].images[0].url
                    $("#item-picture").attr("src", newImag)
                }
                //change map location to area where the item is
                let mapDiv = $("<iframe>");
                let lat = postTitles.latitude;
                let lon = postTitles.longitude;
                mapDiv.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyCduODfiPUcej_InoxKiD8Re6Eb9RtsTeU&center=" + lat + "," + lon + "&zoom=15&maptype=roadmap");
                $("#google-embed-map").html(mapDiv);     
            })
            
            // Previous button
            $("#previous-post-btn").on("click", function(){
                i = (i - 1) % postsArray.length;
                let postTitles = postsArray[i];
                $("#item-title").text(JSON.stringify(postTitles.title));
            $("#item-description").text(JSON.stringify(postTitles.content));
            if (postTitles.photos === null) {
                $("#item-picture").attr("src", "./images/picture-not-available-clipart.jpg")
            } else {
                let newImag = postTitles.photos[0].images[0].url
                $("#item-picture").attr("src", newImag)
            }
            //change map location to area where the item is
            let mapDiv = $("<iframe>");
            let lat = postTitles.latitude;
            let lon = postTitles.longitude;
            mapDiv.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyCduODfiPUcej_InoxKiD8Re6Eb9RtsTeU&center=" + lat + "," + lon + "&zoom=15&maptype=roadmap");
            $("#google-embed-map").html(mapDiv);     
        })
        
        
    })
}
trashInfo();

//getting new location from search bar

$("#search-btn").on("click", function(){
    let newSearchArea = $("#search-input").val();

    $.ajax({
        url: "https://api.openweathermap.org/geo/1.0/direct?q=" + newSearchArea + "&limit=1&appid=f261145622245616c003651f582a49a8",
        type: "GET"
    }).then(function(response){
        console.log(response)
        let cityLat = response[0].lat;
        let cityLon = response[0].lon;
        let queryURL = "https://trashnothing.com/api/v1.2/posts?types=offer%2Cwanted&sources=trashnothing&per_page=20&page=1&device_pixel_ratio=1&latitude=" + cityLat + "&longitude=" + cityLon + "&radius=8046&api_key=neM53IMDcPYKL6OY2kVpLv4pLEJCNrhE5qvGNSm5"

        function trashInfo(){
            $.ajax({
                url: queryURL,
                type: "GET"
            }).then(function(response){
                let postsArray = response.posts;
                console.log(postsArray)
                // retrive post title
                let postTitles = postsArray[i];
                $("#item-title").text(JSON.stringify(postTitles.title));
                $("#item-description").text(JSON.stringify(postTitles.content));
                if (postTitles.photos === null) {
                    $("#item-picture").attr("src", "./images/picture-not-available-clipart.jpg")
                } else {
                    let newImag = postTitles.photos[0].images[0].url
                    $("#item-picture").attr("src", newImag)
                }
                
                //change map location to area where the item is
                let mapDiv = $("<iframe>");
                let lat = postTitles.latitude;
                let lon = postTitles.longitude;
                mapDiv.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyCduODfiPUcej_InoxKiD8Re6Eb9RtsTeU&center=" + lat + "," + lon + "&zoom=15&maptype=roadmap");
                $("#google-embed-map").html(mapDiv);   
                
                // Next button 
                $("#next-post-btn").on("click", function (){
                    i = (i + 1) % postsArray.length;
                    let postTitles = postsArray[i];
                    $("#item-title").text(JSON.stringify(postTitles.title));
                    $("#item-description").text(JSON.stringify(postTitles.content));
                    if (postTitles.photos === null) {
                        $("#item-picture").attr("src", "./images/picture-not-available-clipart.jpg")
                    } else {
                        let newImag = postTitles.photos[0].images[0].url
                        $("#item-picture").attr("src", newImag)
                    }
                    //change map location to area where the item is
                    let mapDiv = $("<iframe>");
                    let lat = postTitles.latitude;
                    let lon = postTitles.longitude;
                    mapDiv.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyCduODfiPUcej_InoxKiD8Re6Eb9RtsTeU&center=" + lat + "," + lon + "&zoom=15&maptype=roadmap");
                    $("#google-embed-map").html(mapDiv);     
                })
                
                // Previous button
                $("#previous-post-btn").on("click", function(){
                    i = (i - 1) % postsArray.length;
                    let postTitles = postsArray[i];
                    $("#item-title").text(JSON.stringify(postTitles.title));
                $("#item-description").text(JSON.stringify(postTitles.content));
                if (postTitles.photos === null) {
                    $("#item-picture").attr("src", "./images/picture-not-available-clipart.jpg")
                } else {
                    let newImag = postTitles.photos[0].images[0].url
                    $("#item-picture").attr("src", newImag)
                }
                //change map location to area where the item is
                let mapDiv = $("<iframe>");
                let lat = postTitles.latitude;
                let lon = postTitles.longitude;
                mapDiv.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyCduODfiPUcej_InoxKiD8Re6Eb9RtsTeU&center=" + lat + "," + lon + "&zoom=15&maptype=roadmap");
                $("#google-embed-map").html(mapDiv);     
            })
            
            
        })
    }
    trashInfo();

    })
})
    


});


