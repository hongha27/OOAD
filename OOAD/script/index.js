$(document).ready(function() {
    loadLocationSelect();
    loadRoomsizeSelect();
}) 

function loadLocationSelect() {
    var content = `<option value=""></option>`;
    locations.forEach(function(location) {
        content += `<option value="${location}">${location}</option>`
    })
    $("#location_select").html(content);
    $("#location_select").val(0).change();
}

function loadRoomsizeSelect() {
    var content = ``
    roomsizes.forEach(function (roomsize) {
        content += `<option value="${roomsize.Value}">${roomsize.Desc}</option>`
    })
    $("#roomsize_select").html(content);
    $("#roomsize_select").val(roomsizes[0].Value).change();
}