$(document).ready(function () {
    var allshipments = get(url + 'Shipment');
    var allcontracts = get(url + 'ContractFarmer')
    var allcontracts2 = get(url + 'ContractDriver');
    for (var index in allshipments) {
        ID = allshipments[index].ID;
        updateShipmentInfo();
        $('#content').append('<div class="infoz2"><div class="infobubble"><h7 class="head">Time</h7><h7 id="ShipmentTime">' + shipment.Times.SentTime + '</h7></div><div class="infobubble"><h7 class="head">ID</h7><h7 id="ShipmentID">' + ID + '</h7></div><div class="infobubble"><h7 class="head">Unit Count</h7><h7 id="ShipmentCount">' + shipment.UnitCount + '</h7></div><div class="infobubble"><h7 class="head">Farmer</h7><h7 id="ShipmentFarmer">' + Farmer.FirstName + '</h7></div><div class="infobubble"><h7 class="head">Status</h7><h7 id="ShipmentStatus">' + shipment.Status + '</h7></div><div class="infobubble" id="more"><a href="shipment.html?id=' + ID + '&amp;type=farmer"><h7 class="head" id="ShipmentMore">More</h7><i class="material-icons" id="arrow">play_arrow</i></a></div></div>')
    }
    for (var index in allcontracts) {
        $('#selectcontract').append('<option>' + allcontracts[index].ID + '</option>')
    }
    for (var index in allcontracts2) {
        $('#selectcontract2').append('<option>' + allcontracts2[index].ID + '</option>')
    }
    $('#menu').append('<h1 id=' + 'balance' + '>Balance: ' + Farmer.accountBalance + ' $</h1>')
    $('#complete').click(function () {
        $('#newshipmentform').toggleClass('toggled');
        newshipment();
    })
    $('#newshipment').click(function () {
        $('#newshipmentform').toggleClass('toggled');
    })
})

function newshipment() {
    var Shipment = {
        '$class': 'farmernetwork.Shipment',
        'ContractDriver': 'resource:farmernetwork.ContractDriver#' + $('#selectcontract2').val(),
        'ContractFarmer': 'resource:farmernetwork.ContractFarmer#' + $('#selectcontract').val(),
        'ID': IDGenerator(),
        'Quality': 0,
        'Status': 'SENT',
        'UnitCount': $('#newunit').val(),
        'Times': {
            '$class': "farmernetwork.Times",
            'CheckedTime': "",
            'DeliveredTime': "",
            'ReceivedTime': "",
            'SentTime': CreateDate()
        },
        'Remarks': {
            '$class': "farmernetwork.Remarks",
        }
    }
    post(url + 'Shipment', Shipment);
    location.reload();
}