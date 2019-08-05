$(document).ready(function() {
    loadLocationSelect();
    loadRoomsizeSelect();
}) 

function loadLocationSelect() {
    var content = `<option selected value="${locations[0]}">${locations[0]}</option>`
    for (var i = 1; i < locations.length; ++i) {
        content += `<option value="${locations[i]}">${locations[i]}</option>`
    }
    $("#location_select").html(content);
}

function loadRoomsizeSelect() {
    var content = `<option selected value="${roomsizes[0].Value}">${roomsizes[0].Desc}</option>`
    for (var i = 1; i < roomsizes.length; ++i) {
        content += `<option value="${roomsizes[i].Value}">${roomsizes[i].Desc}</option>`
    }
    $("#roomsize_select").html(content);
}