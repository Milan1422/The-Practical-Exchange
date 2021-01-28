// Start jQuery
$(document).ready(function(){

    // testing trash nothing api
let queryURL = "https://trashnothing.com/api/v1.2/posts?types=offer%2Cwanted&sources=trashnothing&per_page=20&page=1&device_pixel_ratio=1&latitude=33.753746&longitude=-84.386330&radius=8046&api_key=neM53IMDcPYKL6OY2kVpLv4pLEJCNrhE5qvGNSm5"

    // testing ajax call
$.ajax({
    url: queryURL,
    type: "GET"
}).then(function(response){
    console.log(response);
})


});