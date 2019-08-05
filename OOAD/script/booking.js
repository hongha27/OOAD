$(document).ready(function() {
    loadHighRating();
})

function loadHighRating() {
    var content = ``;
    randarr = shuffleArray([...Array(hotels.length).keys()]);
    randarr.slice(0,3).forEach(function(i) {
        content += `
        <div class="row">
            <div>
            <a href="roomdetails.html?${hotels[i].ID}"><img class="img-thumbnail" alt="Cinque Terre" width="200" height="80" src="https://www.travelplusstyle.com/wp-content/uploads/2019/01/RafflesMYuzu-Nikkei-Cuisine-cropped.jpg"></a>
            </div>
            <div>
            <a href="roomdetails.html?${hotels[i].ID}"><b>${hotels[i].Name}</b></a>
            </div>
            <br>
            <div >
            <img src="https://img.icons8.com/wired/24/000000/map.png">
            <i>${hotels[i].Location}</i>
            </div>
        </div>
        `
    })
    $('#highrating').html(content);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}