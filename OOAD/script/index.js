$(document).ready(function() {
    loadLocationSelect();
    loadRoomsizeSelect();
}) 

function loadLocationSelect() {
    var content = `<option selected value="">Any</option>`;
    locations.forEach(function(location) {
        content += `<option value="${location}">${location}</option>`
    })
    $("#location_select").html(content);
}

function loadRoomsizeSelect() {
    var content = `<option selected value="">Any</option>`
    roomsizes.forEach(function (roomsize) {
        content += `<option value="${roomsize.Value}">${roomsize.Desc}</option>`
    })
    $("#roomsize_select").html(content);
}