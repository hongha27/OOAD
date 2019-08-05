var hotelIndex = null, roomsize = null;

$(document).ready(function () {
    getSearchParam();
    showHotelInfo();
})

function getSearchParam() {
    document.location.search.substr(1).split("&").forEach(function (p) {
        var param = p.split("=");
        if (param[0] == "hotel") {
            hotelIndex = hotels.findIndex(hotel => hotel.ID==decodeURIComponent(param[1]));
        }
        else if (param[0] == "roomsize") {
            roomsize = decodeURIComponent(param[1]);
        }
    });
}

function showHotelInfo() {
    var content = `
    <a href="" style="font-size: 25px; font-weight: bold;">${hotels[hotelIndex].Name}</a>
    <br>
    <br>
    <span class="btn btn-danger">Bestseller</span>
    <span class="btn btn-primary">Free Wifi</span>
    <br>
    <br>
    <b>Minimum price: ${Number(Math.min(...hotels[hotelIndex].RoomList.map(room => room.Price))).toLocaleString('en')} VND</b>
    <br>
    <br>
    <img src="https://img.icons8.com/material-rounded/24/000000/add-user-group-man-man.png"><em>Recommended by ${Math.floor(Math.random()*1000)%(Math.floor(Math.random()*500)+1)+2} people</em>
    <br>
    <br>
    <img src="https://img.icons8.com/wired/24/000000/map.png">
    <em>${hotels[hotelIndex].Address}</em>
    <br>
    <br>
    <iframe src="https://www.google.com/maps?q=${encodeURIComponent(hotels[hotelIndex].Address)}&output=embed"></iframe>
    `;
    $("#hotelinfo").html(content);
}

function showRooms() {
    
}