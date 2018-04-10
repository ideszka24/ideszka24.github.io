$(document).ready(function () {
    var allshipments = get(url + 'Shipment');
    var allfarmers = get(url + 'Farmer')
    var alldrivers = get(url + 'Driver');
    for (var index in allshipments) {
        ID = allshipments[index].ID;
        updateShipmentInfo();
        $('#content').append('<div class="infoz2"><div class="infobubble"><h7 class="head">Time</h7><h7 id="ShipmentTime">' + shipment.Times.SentTime + '</h7></div><div class="infobubble"><h7 class="head">ID</h7><h7 id="ShipmentID">' + ID + '</h7></div><div class="infobubble"><h7 class="head">Unit Count</h7><h7 id="ShipmentCount">' + shipment.UnitCount + '</h7></div><div class="infobubble"><h7 class="head">Farmer</h7><h7 id="ShipmentFarmer">' + Farmer.FirstName + '</h7></div><div class="infobubble"><h7 class="head">Status</h7><h7 id="ShipmentStatus">' + shipment.Status + '</h7></div><div class="infobubble" id="more"><a href="shipment.html?id=' + ID + '&amp;type=factory"><h7 class="head" id="ShipmentMore">More</h7><i class="material-icons" id="arrow">play_arrow</i></a></div></div>')
    }
    for (var index in allfarmers) {
        $('#newfarmer').append('<option>' + allfarmers[index].ID + '</option>')
    }
    for (var index in alldrivers) {
        $('#newdriver').append('<option>' + alldrivers[index].ID + '</option>')
    }
    $('#newfactory').append('<option>' + Factory.ID + '</option>')
    $('#newfactory2').append('<option>' + Factory.ID + '</option>')
    $('#complete').click(function () {
        newFarmer();
    })
    $('#complete2').click(function () {
        newDriver();
    })
    $('#complete3').click(function () {
        newContractFarmer();
    })
    $('#complete4').click(function () {
        newContractDriver();
    })
    var clicked1 = 0;
    var clicked2 = 0;
    var clicked3 = 0;
    var clicked4 = 0;

    $('#newshipment').click(function () {
        if ($('#newshipmentform').hasClass('toggled')) {
            $('#newshipmentform').removeClass('toggled')
            clicked1 = 0;
            $('#newshipment2').css('background-color', 'black')
            $('#newshipmentbutton2').css('background-color', 'black')
            $('#newshipment3').css('background-color', 'black')
            $('#newshipmentbutton3').css('background-color', 'black')
            $('#newshipment4').css('background-color', 'black')
            $('#newshipmentbutton4').css('background-color', 'black')
        } else if (clicked2 == 0 && clicked3 == 0 && clicked4 == 0) {
            $('#newshipmentform').addClass('toggled')
            clicked1 = 1;
            $('#newshipment2').css('background-color', 'grey')
            $('#newshipmentbutton2').css('background-color', 'grey')
            $('#newshipment3').css('background-color', 'grey')
            $('#newshipmentbutton3').css('background-color', 'grey')
            $('#newshipment4').css('background-color', 'grey')
            $('#newshipmentbutton4').css('background-color', 'grey')
        }
    })
    $('#newshipment2').click(function () {
        if ($('#newshipmentform2').hasClass('toggled')) {
            $('#newshipmentform2').removeClass('toggled')
            clicked2 = 0;
            $('#newshipment').css('background-color', 'black')
            $('#newshipmentbutton').css('background-color', 'black')
            $('#newshipment3').css('background-color', 'black')
            $('#newshipmentbutton3').css('background-color', 'black')
            $('#newshipment4').css('background-color', 'black')
            $('#newshipmentbutton4').css('background-color', 'black')
        } else if (clicked1 == 0 && clicked3 == 0 && clicked4 == 0) {
            $('#newshipmentform2').addClass('toggled')
            clicked2 = 1;
            $('#newshipment').css('background-color', 'grey')
            $('#newshipmentbutton').css('background-color', 'grey')
            $('#newshipment3').css('background-color', 'grey')
            $('#newshipmentbutton3').css('background-color', 'grey')
            $('#newshipment4').css('background-color', 'grey')
            $('#newshipmentbutton4').css('background-color', 'grey')
        }
    })
    $('#newshipment3').click(function () {
        if ($('#newshipmentform3').hasClass('toggled')) {
            $('#newshipmentform3').removeClass('toggled')
            clicked3 = 0;
            $('#newshipment').css('background-color', 'black')
            $('#newshipmentbutton').css('background-color', 'black')
            $('#newshipment2').css('background-color', 'black')
            $('#newshipmentbutton2').css('background-color', 'black')
            $('#newshipment4').css('background-color', 'black')
            $('#newshipmentbutton4').css('background-color', 'black')
        } else if (clicked1 == 0 && clicked2 == 0 && clicked4 == 0) {
            $('#newshipmentform3').addClass('toggled')
            clicked3 = 1;
            $('#newshipment').css('background-color', 'grey')
            $('#newshipmentbutton').css('background-color', 'grey')
            $('#newshipment2').css('background-color', 'grey')
            $('#newshipmentbutton2').css('background-color', 'grey')
            $('#newshipment4').css('background-color', 'grey')
            $('#newshipmentbutton4').css('background-color', 'grey')
        }
    })
    $('#newshipment4').click(function () {
        if ($('#newshipmentform4').hasClass('toggled')) {
            $('#newshipmentform4').removeClass('toggled')
            clicked4 = 0;
            $('#newshipment').css('background-color', 'black')
            $('#newshipmentbutton').css('background-color', 'black')
            $('#newshipment2').css('background-color', 'black')
            $('#newshipmentbutton2').css('background-color', 'black')
            $('#newshipment3').css('background-color', 'black')
            $('#newshipmentbutton3').css('background-color', 'black')
        } else if (clicked1 == 0 && clicked2 == 0 && clicked3 == 0) {
            $('#newshipmentform4').addClass('toggled')
            clicked4 = 1;
            $('#newshipment').css('background-color', 'grey')
            $('#newshipmentbutton').css('background-color', 'grey')
            $('#newshipment2').css('background-color', 'grey')
            $('#newshipmentbutton2').css('background-color', 'grey')
            $('#newshipment3').css('background-color', 'grey')
            $('#newshipmentbutton3').css('background-color', 'grey')
        }
    })

})

function newFarmer() {
    var Farmer = {
        '$class': "farmernetwork.Farmer",
        'Address': {
            '$class': "farmernetwork.Address",
            'City': $('#newcity').val(),
            'Street': $('#newstreet').val(),
            'ZipCode': $('#newzip').val()
        },
        'FirstName': $('#newfirst').val(),
        'ID': $('#newid').val(),
        'LastName': $('#newlast').val(),
        'accountBalance': 0,
        'TotalSent': 0,
        'email': $('#newemail').val()
    }
    post(url + 'Farmer', Farmer);
    location.reload()
}

function newDriver() {
    var Driver = {
        '$class': "farmernetwork.Farmer",
        'Address': {
            '$class': "farmernetwork.Address",
            'City': $('#newcity2').val(),
            'Street': $('#newstreet2').val(),
            'ZipCode': $('#newzip2').val()
        },
        'FirstName': $('#newfirst2').val(),
        'ID': $('#newid2').val(),
        'LastName': $('#newlast2').val(),
        'accountBalance': 0,
        'email': $('#newemail2').val()
    }
    post(url + 'Driver', Driver);
    location.reload()
}

function newContractFarmer() {
    var ContractFarmer = {
        '$class': "farmernetwork.ContractFarmer",
        'Factory': "resource:farmernetwork.Factory#" + $('#newfactory').val(),
        'Farmer': "resource:farmernetwork.Farmer#" + $('#newfarmer').val(),
        'ID': $('#newid3').val(),
        'Requirement': $('#newreq').val(),
        'UnitPrice': $('#newup').val()
    }
    post(url + 'ContractFarmer', ContractFarmer);
    location.reload()
}

function newContractDriver() {
    var ContractDriver = {
        '$class': "farmernetwork.ContractDriver",
        'Factory': "resource:farmernetwork.Factory#" + $('#newfactory2').val(),
        'Driver': "resource:farmernetwork.Driver#" + $('#newdriver').val(),
        'ID': $('#newid4').val(),
        'UnitPrice': $('#newup2').val()
    }
    post(url + 'ContractDriver', ContractDriver);
    location.reload()
}