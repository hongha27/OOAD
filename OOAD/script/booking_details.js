function parseDate(str) {
    var parts = str.split("-");
    return new Date(parseInt(parts[0], 10),
                  parseInt(parts[1], 10) - 1,
                  parseInt(parts[2], 10));
}

var hotelIndex, roomindex;

$(document).ready(function() {
    getSearchParam();
    showBookingInfo();
})

function getSearchParam() {
    document.location.search.substr(1).split("&").forEach(function (p) {
        var param = p.split("=");
        if (param[0] == "hotel") {
            hotelIndex = hotels.findIndex(hotel => hotel.ID==decodeURIComponent(param[1]));
        }
        else if (param[0] == "roomindex") {
            roomindex = Number(decodeURIComponent(param[1]));
        }
        else if (param[0] == "checkin") {
            checkin = decodeURIComponent(param[1]);
        }
        else if (param[0] == "checkout") {
            checkout = decodeURIComponent(param[1]);
        }
    });
    if (!checkin) {
        checkin = $("#checkin").val();
    }
    if (!checkout) {
        checkout = $("#checkout").val();
    }
}

function showBookingInfo() {
    var room = hotels[hotelIndex].RoomList[roomindex],
        nights = (parseDate(checkout) - parseDate(checkin))/(24*3600*1000);
    $("#bookinginfo").html(`
        <h3 style="color: green;">Booking information</h3>
        <p>Hotel name: ${hotels[hotelIndex].Name}
        <br>Room type: ${room.Name}
        <br>Check-in time: ${checkin} 12:00 AM
        <br>Check-out time: ${checkout} 11:00 AM
        <br>Price per night: ${Number(room.Price).toLocaleString('en')} VND</p> 
        <p style="color: red;">Total Price: ${Number(room.Price*nights).toLocaleString('en')} VND</p> 
        <p><b>Booking confirmation code: ${(Math.random()*1000000000+Math.random()).toString(36).replace('.',Math.random()*1000000000+Math.random()).toString(36).replace('.', Math.random().toString(36).substring(7))}</b></p>
        <br>
    `)
}

function validateBookingDetails() {

}