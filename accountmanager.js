$(document).ready(function () {
    var allfarmers = get(url + 'Farmer');
    var alldrivers = get(url + 'Driver')
    var allcontracts = get(url + 'ContractFarmer')
    var allcontracts2 = get(url + 'ContractDriver')
    for (var index in allfarmers) {
        Farmer = allfarmers[index];
        var currentcontract = undefined;
        for (var index2 in allcontracts) {
            temp = allcontracts[index2];
            temp = temp.Farmer;
            temp = temp.slice(30);
            if (Farmer.ID == temp) {
                currentcontract = allcontracts[index2];
            }
        }
        Address = Farmer.Address.Street + ', ' + Farmer.Address.City
        if (currentcontract != undefined) {
            $('#content').append('<div class="infoz2"><div id="details"><h10 id="detailheader">Farmer Details</h10><div class="infobubble"><h7 class="head">ID</h7><h7>' + Farmer.ID + '</h7></div><div class="infobubble"><h7 class="head">First Name</h7><h7>' + Farmer.FirstName + '</h7></div><div class="infobubble"><h7 class="head">Last Name</h7><h7>' + Farmer.LastName + '</h7></div><div class="infobubble"><h7 class="head">Address</h7><h7>' + Address + '</h7></div><div class="infobubble"><h7 class="head">Balance</h7><h7>' + Farmer.accountBalance + '</h7></div></div><div id="details"><h10 id="detailheader">Latest Contract</h10><div class="infobubble"><h7 class="head">ID</h7><h7>' + currentcontract.ID + '</h7></div><div class="infobubble"><h7 class="head">Unit Price</h7><h7>' + currentcontract.UnitPrice + '</h7></div><div class="infobubble"><h7 class="head">Requirement</h7><h7>' + currentcontract.Requirement + '</h7></div><div class="infobubble"><h7 class="head">Total Sent</h7><h7>'+Farmer.TotalSent+'</h7></div></div></div>')
        } else {
            $('#content').append('<div class="infoz2"><div id="details"><h10 id="detailheader">Farmer Details</h10><div class="infobubble"><h7 class="head">ID</h7><h7>' + Farmer.ID + '</h7></div><div class="infobubble"><h7 class="head">First Name</h7><h7>' + Farmer.FirstName + '</h7></div><div class="infobubble"><h7 class="head">Last Name</h7><h7>' + Farmer.LastName + '</h7></div><div class="infobubble"><h7 class="head">Address</h7><h7>' + Address + '</h7></div><div class="infobubble"><h7 class="head">Balance</h7><h7>' + Farmer.accountBalance + '</h7></div></div><div id="details"><h10 id="detailheader">Latest Contract</h10><div class="infobubble"><h7 class="head">ID</h7><h7>-</h7></div><div class="infobubble"><h7 class="head">Unit Price</h7><h7>-</h7></div><div class="infobubble"><h7 class="head">Requirement</h7><h7>-</h7></div></div></div>')
        }
    }
    $('#content').append('<h3 id="allship">All Drivers</h3>')
    for (var index in alldrivers) {
        Farmer = alldrivers[index];
        var currentcontract = undefined;
        for (var index2 in allcontracts2) {
            temp = allcontracts2[index2];
            temp = temp.Driver;
            temp = temp.slice(30);
            if (Farmer.ID == temp) {
                currentcontract = allcontracts2[index2];
            }
        }
        Address = Farmer.Address.Street + ', ' + Farmer.Address.City
        if (currentcontract != undefined) {
            $('#content').append('<div class="infoz2"><div id="details"><h10 id="detailheader">Farmer Details</h10><div class="infobubble"><h7 class="head">ID</h7><h7>' + Farmer.ID + '</h7></div><div class="infobubble"><h7 class="head">First Name</h7><h7>' + Farmer.FirstName + '</h7></div><div class="infobubble"><h7 class="head">Last Name</h7><h7>' + Farmer.LastName + '</h7></div><div class="infobubble"><h7 class="head">Address</h7><h7>' + Address + '</h7></div><div class="infobubble"><h7 class="head">Balance</h7><h7>' + Farmer.accountBalance + '</h7></div></div><div id="details"><h10 id="detailheader">Latest Contract</h10><div class="infobubble"><h7 class="head">ID</h7><h7>' + currentcontract.ID + '</h7></div><div class="infobubble"><h7 class="head">Unit Price</h7><h7>' + currentcontract.UnitPrice + '</h7></div></div></div>')
        } else {
            $('#content').append('<div class="infoz2"><div id="details"><h10 id="detailheader">Farmer Details</h10><div class="infobubble"><h7 class="head">ID</h7><h7>' + Farmer.ID + '</h7></div><div class="infobubble"><h7 class="head">First Name</h7><h7>' + Farmer.FirstName + '</h7></div><div class="infobubble"><h7 class="head">Last Name</h7><h7>' + Farmer.LastName + '</h7></div><div class="infobubble"><h7 class="head">Address</h7><h7>' + Address + '</h7></div><div class="infobubble"><h7 class="head">Balance</h7><h7>' + Farmer.accountBalance + '</h7></div></div><div id="details"><h10 id="detailheader">Latest Contract</h10><div class="infobubble"><h7 class="head">ID</h7><h7>-</h7></div><div class="infobubble"><h7 class="head">Unit Price</h7><h7>-</h7></div></div></div>')
        }
    }
})