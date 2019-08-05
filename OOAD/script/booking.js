function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const resultPerPage = 4; 
var loadedHotels = null, currentPage = 1;

var searchLocation = null, checkin = null, checkout = null, roomsize = null;

$(document).ready(function() {
    getSearchParam();
    loadLocationSelect();
    loadRoomsizeSelect();
    showSearchParam();
    loadHighRating();
    loadedHotels = loadSearchResults();
    showPaginations(Math.ceil(loadedHotels.length/resultPerPage));
    showPage(1);
})

function getSearchParam() {
    document.location.search.substr(1).split("&").forEach(function (p) {
        var param = p.split("=");
        if (param[0] == "location") {
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

function loadHighRating() {
    var content = ``;
    randarr = shuffleArray([...Array(hotels.length).keys()]);
    randarr.slice(0,3).forEach(function(i) {
        content += `
        <div>
            <div class="d-flex justify-content-center">
                <a href="roomdetails.html?hotel=${hotels[i].ID}"><img class="img-thumbnail" alt="Cinque Terre" width="200" height="80" src="${sample_img_hotel[i]}"></a>
            </div>
            <div style="text-align: center">
                <a href="roomdetails.html?hotel=${hotels[i].ID}"><b>${hotels[i].Name}</b></a>
            </div>
            <div style="text-align: center">
                <img src="https://img.icons8.com/wired/24/000000/map.png">
                <i>${hotels[i].Location}</i>
            </div>
            <br>
        </div>`
    })
    $('#highrating').html(content);
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

function loadSearchResults() {
    return hotels.filter(
        hotel => 
        (!searchLocation || hotel.Location == searchLocation) && 
        (!roomsize || hotel.RoomList.filter(room => room.RoomSize == roomsize).length)
    )
    
}

function showPaginations(pages) {
    console.log(pages);
    var content = ``;
    if (pages > 1) {
        content += `
        <li class="page-item" onclick="showPage(Math.max(currentPage-1,1))">
            <a class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>`;
        for (var i = 1; i <= pages; ++i) {
            content += `
            <li class="page-item" onclick="showPage(${i})"><a class="page-link">${i}</a></li>
            `
        }
        content += `
        <li class="page-item" onclick="showPage(Math.min(currentPage+1,${pages}))">
            <a class="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>`
    }
    $("#paginations").html(content);
}

function showPage(page) {
    currentPage = page;
    var content = ``;
    for(var i = (page-1)*resultPerPage; i < Math.min(page*resultPerPage, loadedHotels.length); ++i) {
        content += `
        <tr><th>					
            <a href="roomdetails.html?hotel=${loadedHotels[i].ID}&roomsize=${roomsize}"><img class="img-thumbnail" alt="Cinque Terre" width="200" height="80" src=${sample_img_hotel[hotels.findIndex(hotel => hotel.ID==loadedHotels[i].ID)]}></a>
            <div class="info">
                <a href="roomdetails.html?hotel=${loadedHotels[i].ID}&roomsize=${roomsize}"><b>${loadedHotels[i].Name}</b></a>
                <br><br>
                <b>Minimum price: ${Number(Math.min(...loadedHotels[i].RoomList.map(room => room.Price))).toLocaleString('en')} VND</b>
                <br>
                <img src="https://img.icons8.com/material-rounded/24/000000/add-user-group-man-man.png"><em>Recommended by ${Math.floor(Math.random()*1000)%(Math.floor(Math.random()*500)+1)+2} people</em> 
                <br>
                <img src="https://img.icons8.com/wired/24/000000/map.png">
                <em>${loadedHotels[i].Address}</em>
            </div>
        </th></tr>`
    }
    $("#searchresult").html(content);
}