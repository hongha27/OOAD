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
    <b>Minimum price: ${Number(Math.min(...hotels[hotelIndex].RoomList.map(room => room.Price))).toLocaleString('en')} VND</b>
    <br>
    <img src="https://img.icons8.com/material-rounded/24/000000/add-user-group-man-man.png"><em>Recommended by ${Math.floor(Math.random()*1000)%(Math.floor(Math.random()*500)+1)+2} people</em>
    <br>
    <img src="https://img.icons8.com/wired/24/000000/map.png">
    <em>${hotels[hotelIndex].Address}</em>
    <br>
    <br>
    <iframe src="https://www.google.com/maps?q=${encodeURIComponent(hotels[hotelIndex].Address)}&output=embed"></iframe>
     <br>
         <span style="color: red;">Benefit</span> <br>
      <img src="https://img.icons8.com/cute-clipart/30/000000/double-tick.png"><em>Free wifi</em> <br>
      <img src="https://img.icons8.com/cute-clipart/30/000000/double-tick.png"><em>Prevertation cancel policy</em>
      <br>
      <span style="color: red;">Other utilitiess</span> <br>
      <img src="https://img.icons8.com/officel/20/000000/hair-dryer.png"> <i style="font-size: 15px;">      hairdryer</i>   
      <img style=" padding-left: 30px;" src="https://img.icons8.com/ios/20/000000/air-conditioner.png"><i style="font-size: 15px;">    air conditioner</i> <br>
      <img src="https://img.icons8.com/officel/16/000000/mirror.png"><i style="font-size: 15px;"> mirror</i> 
      <img style=" padding-left: 30px;" src="https://img.icons8.com/officel/20/000000/table.png"><i style="font-size: 15px;"> table</i> <br>
      <img style=" padding-left: 30px;"src="https://img.icons8.com/dusk/20/000000/fridge.png"><i style="font-size: 15px;"> fridge</i> 
      <img style=" padding-left: 30px;"src="https://img.icons8.com/dusk/20/000000/wardrobe.png"><i style="font-size: 15px;"> wardrobe</i> <br> <br> <br>
    `;
    $("#hotelinfo").html(content);
}

function showRooms() {
    
}