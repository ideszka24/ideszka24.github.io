$(document).ready(function () {
    var allshipments = get(url + 'Shipment');
    for (var index in allshipments) {
        ID = allshipments[index].ID;
        updateShipmentInfo();
        $('#content').append('<div class="infoz2"><div class="infobubble"><h7 class="head">Time</h7><h7 id="ShipmentTime">' + shipment.Times.SentTime + '</h7></div><div class="infobubble"><h7 class="head">ID</h7><h7 id="ShipmentID">' + ID + '</h7></div><div class="infobubble"><h7 class="head">Unit Count</h7><h7 id="ShipmentCount">' + shipment.UnitCount + '</h7></div><div class="infobubble"><h7 class="head">Farmer</h7><h7 id="ShipmentFarmer">' + Farmer.FirstName + '</h7></div><div class="infobubble"><h7 class="head">Status</h7><h7 id="ShipmentStatus">' + shipment.Status + '</h7></div><div class="infobubble" id="more"><a href="shipment.html?id=' + ID + '&amp;type=driver"><h7 class="head" id="ShipmentMore">More</h7><i class="material-icons" id="arrow">play_arrow</i></a></div></div>')
    }
    $('#menu').append('<h1 id=' + 'balance' + '>Balance: ' + Driver.accountBalance + ' $</h1>')
})