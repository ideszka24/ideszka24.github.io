var type;
var ID;
var shipment;
var ContractDriver;
var ContractFarmer;
var Driver;
var Farmer;
var Factory;
var url = 'http://173.193.75.188:31090/api/'
$(document).ready(function () {
    var height = $('header').css('height');
    height = height.replace('px', '');
    height = Number(height);
    var ten = $('h1').css('height')
    ten = ten.replace('px', '');
    ten = Number(ten) * 0.5;
    console.log(height);
    console.log(ten);
    height = height + ten;
    console.log(height);
    $('#filler').css('min-height', height + 'px');
})

function deliveredshipment() {
    var remark = $('#ShipmentRemark').val();
    console.log($('#ShipmentRemark').val())
    var data = {
        'Shipment': 'resource:farmernetwork.Shipment#' + ID,
        'remark': remark
    }

    post(url + 'ShipmentDelivered', data);

    location.reload();

}

function checkedshipment() {
    var remark = $('#ShipmentRemark').val();
    var quality = $('#ShipmentQuality').val();
    var data = {
        'Shipment': 'resource:farmernetwork.Shipment#' + ID,
        'remark': remark,
        'quality': quality
    }

    post(url + 'ShipmentChecked', data);

    location.reload();

}

function receivedshipment() {
    var remark = $('#ShipmentRemark').val();
    var data = {
        'Shipment': 'resource:farmernetwork.Shipment#' + ID,
        'remark': remark
    }

    post(url + 'ShipmentReceived', data);

    location.reload();

}

function updateShipmentInfo() {
    shipment = get(url + 'Shipment/' + ID);
    ContractDriver = shipment.ContractDriver;
    ContractDriver = ContractDriver.slice(38);
    ContractDriver = get(url + 'ContractDriver/' + ContractDriver);
    ContractFarmer = shipment.ContractFarmer;
    ContractFarmer = ContractFarmer.slice(38);
    ContractFarmer = get(url + 'ContractFarmer/' + ContractFarmer);
    Driver = ContractDriver.Driver;
    Driver = Driver.slice(30);
    Driver = get(url + 'Driver/' + Driver);
    Farmer = ContractFarmer.Farmer;
    Farmer = Farmer.slice(30);
    Farmer = get(url + 'Farmer/' + Farmer);
    Factory = get(url + 'Factory/Factory_001');
    Factoryworker = get(url + 'Factoryworker');
    Factoryworker = Factoryworker[0];
    Labworker = get(url + 'Lab');
    Labworker = Labworker[0];
    if (type == 'farmer') {
        $('#welcome').text('Welcome, Farmer');
        $('#menu').append('<h1 id=' + 'balance' + '>Balance: ' + Farmer.accountBalance + ' $</h1>')
    }
    if (type == 'driver') {
        $('#welcome').text('Welcome, Driver');
        $('#menu').append('<h1 id=' + 'balance' + '>Balance: ' + Driver.accountBalance + ' $</h1>')
    }
    if (type == 'lab') {
        $('#welcome').text('Welcome, Lab');
    }
    if (type == 'factory') {
        $('#welcome').text('Welcome, Factory');
    }
}

function updateStageInfo() {
    $('#IDval').text('ID ' + ID);
    $('#city1').text(Farmer.Address.City);
    $('#city2').text(Driver.Address.City);
    $('#city3').text(Factory.Address.City);
    $('#city4').text(Factory.Address.City);
    $('#street1').text(Farmer.Address.Street);
    $('#street2').text(Driver.Address.Street);
    $('#street3').text(Factory.Address.Street);
    $('#street4').text(Factory.Address.Street);
    $('#zip1').text(Farmer.Address.ZipCode);
    $('#zip2').text(Driver.Address.ZipCode);
    $('#zip3').text(Factory.Address.ZipCode);
    $('#zip4').text(Factory.Address.ZipCode);
    $('#ShipmentID').text(ID);
    $('#ShipmentCount').text(shipment.UnitCount)
    $('#ShipmentQuality').text(shipment.Quality)
    $('#ShipmentRemark').text('-');
    if (shipment.Status == 'SENT' || shipment.Status == 'DELIVERED' || shipment.Status == 'CHECKED' || shipment.Status == 'RECEIVED') {
        $('#line1').css('background-color', 'green')
        $('#signed1').text(Farmer.FirstName + ' ' + Farmer.LastName);
        $('#date1').text(shipment.Times.SentTime);
        $('#remark1').text(shipment.Remarks.FarmerRemark);
    }
    if (shipment.Status == 'DELIVERED' || shipment.Status == 'CHECKED' || shipment.Status == 'RECEIVED') {
        $('#line2').css('background-color', 'green')
        $('#signed2').text(Driver.FirstName + ' ' + Driver.LastName);
        $('#date2').text(shipment.Times.DeliveredTime);
        $('#remark2').text(shipment.Remarks.DriverRemark);
    }
    if (shipment.Status == 'CHECKED' || shipment.Status == 'RECEIVED') {
        $('#line3').css('background-color', 'green')
        $('#signed3').text(Labworker.FirstName + ' ' + Labworker.LastName);
        $('#date3').text(shipment.Times.CheckedTime);
        $('#remark3').text(shipment.Remarks.LabRemark);
    }
    if (shipment.Status == 'RECEIVED') {
        $('#line4').css('background-color', 'green')
        $('#signed4').text(Factoryworker.FirstName + ' ' + Factoryworker.LastName);
        $('#date4').text(shipment.Times.ReceivedTime);
        $('#remark4').text(shipment.Remarks.FactoryRemark);
    }
}

function get(theUrl) {

    var jqXHR = $.ajax({
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        url: theUrl,
        async: false,
        dataType: 'JSON'
    });

    return JSON.parse(jqXHR.responseText);

}

function post(theUrl, data) {

    var jqXHR = $.ajax({
        type: 'POST',
        url: theUrl,
        async: false,
        data: data,
        dataType: 'application/json'
    });

    return JSON.parse(jqXHR.responseText);

}

function put(theUrl, data) {

    var jqXHR = $.ajax({
        type: 'PUT',
        url: theUrl,
        async: false,
        data: data,
        dataType: 'JSON'
    });

    return JSON.parse(jqXHR.responseText);

}

function queryParams() {
    var match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    return urlParams;
};

function IDGenerator() {
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var NUMBERS = '0123456789';

    var ID_LENGTH = 3;
    var rtn = '';
    for (var i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    rtn += '-';
    for (var i = 0; i < ID_LENGTH; i++) {
        rtn += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
    }
    return rtn;
}

function CreateDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDay();
    var hours = today.getDay();
    var minutes = today.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var timeFormat = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
    return timeFormat;
}