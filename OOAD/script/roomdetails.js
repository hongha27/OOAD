function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

var searchLocation = "", 
    checkin = "", 
    checkout = "", 
    roomsize = "",
    hotelIndex = null;

$(document).ready(function () {
    getSearchParam();
    showSearchParam();
    showHotelInfo();
    showRooms();
})

function getSearchParam() {
    document.location.search.substr(1).split("&").forEach(function (p) {
        var param = p.split("=");
        if (param[0] == "hotel") {
            hotelIndex = hotels.findIndex(hotel => hotel.ID==decodeURIComponent(param[1]));
        }
        else if (param[0] == "location") {
            searchLocation = decodeURIComponent(param[1]).split("+").join(" ");
        }
        else if (param[0] == "roomsize") {
            roomsize = decodeURIComponent(param[1]);
        }
        else if (param[0] == "checkin") {
            checkin = decodeURIComponent(param[1]);
        }
        else if (param[0] == "checkout") {
            checkout = decodeURIComponent(param[1]);
        }
    });
}

function showSearchParam() {
    if (searchLocation) {
        $("#location_select").val(searchLocation).change();
    }
    if (checkin) {
        $("#checkin").val(checkin);
    }
    if (checkout) {
        $("#checkout").val(checkout);
    }
    if (roomsize) {
        $("#roomsize_select").val(roomsize);
    }
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
    var content = ``;
    var roomlist = hotels[hotelIndex].RoomList.filter(room => !roomsize || room.RoomSize == roomsize);

    for (var i = 0; i < roomlist.length; ++i) {
        var imglink;
        if (roomlist[i].RoomSize == 2) {
            imglink = shuffleArray([...Array(sample_img_room.double.length).keys()]).slice(0,4).map(i => sample_img_room.double[i]);
        }
        else if (roomlist[i].RoomSize == 3) {
            imglink = shuffleArray([...Array(sample_img_room.triple.length).keys()]).slice(0,4).map(i => sample_img_room.triple[i]);
        }
        else if (roomlist[i].RoomSize == 4) {
            imglink = shuffleArray([...Array(sample_img_room.doubletwin.length).keys()]).slice(0,4).map(i => sample_img_room.doubletwin[i]);
        }
        content += `
        <tr>
          <th>
            <h5>${roomlist[i].Name}</h5>
            <div>
              <a id="example2" href="${imglink[0]}"><img class="img-thumbnail" alt="Cinque Terre" width="330" height="232" alt="example1" src="${imglink[0]}" /></a>
              <a id="example2" href="${imglink[1]}"><img class="img-thumbnail" alt="Cinque Terre" width="330" height="232" alt="example1" src="${imglink[1]}" /></a>
              <a id="example2" href="${imglink[2]}"><img class="img-thumbnail" alt="Cinque Terre" width="330" height="232" alt="example1" src="${imglink[2]}" /></a>
              <a id="example2" href="${imglink[3]}"><img class="img-thumbnail" alt="Cinque Terre" width="330" height="232" alt="example1" src="${imglink[3]}" /></a>
            </div>
            
            <p class="btn btn-danger">Price: ${Number(roomlist[i].Price).toLocaleString('en')} VND</p>
            <br>
            <em>+ Acreage: ${roomlist[i].Acreage} m<sup>2</sup></em>
            <div class="book">
              <a href="booking_details.html?hotel=${hotels[hotelIndex].ID}&roomindex=${hotels[hotelIndex].RoomList.findIndex(room => room.Name==roomlist[i].Name)}" class="btn btn-success">Book now</a>
            </div>
          </th>
        </tr>
        `
    }

    $("#searchresult").html(content);
}