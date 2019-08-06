function formatDate(date) {
    var d = new Date(date)
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

$(document).ready(function() {
    loadLocationSelect();
    loadRoomsizeSelect();
    loadCheckinCheckoutMinMax();
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

function loadCheckinCheckoutMinMax() {
    var msperday = 24*60*60*1000,
        mincheckin = formatDate(Date.now() + 1*msperday),
        maxcheckin = formatDate(Date.now() + 31*msperday),
        mincheckout = formatDate(Date.now() + 2*msperday),
        maxcheckout = formatDate(Date.now() + 62*msperday);
    $("#checkin").attr("min",mincheckin);
    $("#checkin").attr("max",maxcheckin);
    $("#checkout").attr("min",mincheckout);
    $("#checkout").attr("max",maxcheckout);
    $("#checkin").val(mincheckin);
    $("#checkout").val(mincheckout);
}