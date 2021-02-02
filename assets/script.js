// Start jQuery
$(document).ready(function(){

    // testing trash nothing api
let queryURL = "https://trashnothing.com/api/v1.2/posts?types=offer%2Cwanted&sources=trashnothing&per_page=20&page=1&device_pixel_ratio=1&latitude=33.753746&longitude=-84.386330&radius=8046&api_key=neM53IMDcPYKL6OY2kVpLv4pLEJCNrhE5qvGNSm5"

    // testing ajax call
$.ajax({
    url: queryURL,
    type: "GET"
}).then(function(response){
    // console.log(response);
})

// testing google map populating on page
function googleMapPop(){
    let mapDiv = $("<iframe>");
    mapDiv.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyCduODfiPUcej_InoxKiD8Re6Eb9RtsTeU&center=34.0289,-84.1986&zoom=15&maptype=roadmap");
    $("#google-embed-map").append(mapDiv);    

}
googleMapPop();


// testing trash data populating on page
function trashInfo(){
    $.ajax({
        url: queryURL,
        type: "GET"
    }).then(function(response){
        let postsArray = (response.posts) 
        // retrive post title
            for (let i = 0; i < postsArray.length; i++) {
                let postTitles = postsArray[i];
                console.log(postTitles);
                $("#item-title").text(JSON.stringify(postTitles.title));
                $("#item-description").text(JSON.stringify(postTitles.content));
                if (postTitles.photos === null) {
                    $("#item-picture").attr("src", "./images/picture-not-available-clipart.jpg")
                } else {
                    $("#item-picture").attr("src", postTitles.photos.url)
                }
                
               
            }
    // });    
    })
    

}
trashInfo();
});


