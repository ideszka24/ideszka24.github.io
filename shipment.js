$(document).ready(function () {
    var queryparams = queryParams();
    ID = queryparams.id;
    type = queryparams.type;
    console.log(type)
    if (type=='factory'){
        $('#links').replaceWith('<a href="factory.html" id="links"><h1 class="menubutton" id="allshipments">All Shipments</h1></a>')
    }
    if (type=='driver'){
        $('#links').replaceWith('<a href="driver.html" id="links"><h1 class="menubutton" id="allshipments">All Shipments</h1></a>')
    }
    if (type=='lab'){
        $('#links').replaceWith('<a href="lab.html" id="links"><h1 class="menubutton" id="allshipments">All Shipments</h1></a>')
    }
    updateShipmentInfo();
    updateStageInfo();
    $('#signoff').css('background-color', 'grey')
    $('#signoff').attr('disabled', 'disabled')
    $('#block1').click(function () {
        $('#signoff').css('background-color', 'grey')
        $('#signoff').attr('disabled', 'disabled')
        $('#ShipmentRemark').replaceWith('<h7 id='+'ShipmentRemark'+'></h7>')
        $('#ShipmentQuality').replaceWith('<h7 id='+'ShipmentQuality'+'>'+shipment.Quality+'</h7>');
        if (shipment.Remarks.FarmerRemark == undefined) {
            $('#ShipmentRemark').text('-');
        } else {
            $('#ShipmentRemark').text(shipment.Remarks.FarmerRemark);
        }
        for (var index = 1; index <= 4; index++) {
            if (index == 1) {
                $('#add' + index).attr('id', 'addprime' + index);
                $('#building' + index).attr('id', 'buildingprime' + index);
                $('#person' + index).attr('id', 'personprime' + index);
                $('#calendar' + index).attr('id', 'calendarprime' + index);
                $('#comment' + index).attr('id', 'commentprime' + index);
                $('#block' + index).attr('id', 'blockprime' + index);
                $('#stagecol' + index).attr('id', 'stagecolprime' + index);
            } else {
                $('#addprime' + index).attr('id', 'add' + index);
                $('#buildingprime' + index).attr('id', 'building' + index);
                $('#personprime' + index).attr('id', 'person' + index);
                $('#calendarprime' + index).attr('id', 'calendar' + index);
                $('#commentprime' + index).attr('id', 'comment' + index);
                $('#blockprime' + index).attr('id', 'block' + index);
                $('#stagecolprime' + index).attr('id', 'stagecol' + index);
            }
        }
    })
    $('#block2').click(function () {
        $('#signoff').css('background-color', 'grey')
        $('#signoff').attr('disabled', 'disabled')
        $('#ShipmentRemark').replaceWith('<h7 id='+'ShipmentRemark'+'></h7>')
        $('#ShipmentQuality').replaceWith('<h7 id='+'ShipmentQuality'+'>'+shipment.Quality+'</h7>');
        if (type == 'driver' && shipment.Status == 'SENT') {
            $('#signoff').css('background-color', 'black')
            $('#signoff').removeAttr('disabled')
            $('#ShipmentRemark').replaceWith('<input id='+'ShipmentRemark'+'></input>');
        } else if (shipment.Remarks.DriverRemark == undefined) {
            $('#ShipmentRemark').text('-');
        } else {
            $('#ShipmentRemark').text(shipment.Remarks.DriverRemark);
        }
        for (var index = 1; index <= 4; index++) {
            if (index == 2) {
                $('#add' + index).attr('id', 'addprime' + index);
                $('#building' + index).attr('id', 'buildingprime' + index);
                $('#person' + index).attr('id', 'personprime' + index);
                $('#calendar' + index).attr('id', 'calendarprime' + index);
                $('#comment' + index).attr('id', 'commentprime' + index);
                $('#block' + index).attr('id', 'blockprime' + index);
                $('#stagecol' + index).attr('id', 'stagecolprime' + index);
            } else {
                $('#addprime' + index).attr('id', 'add' + index);
                $('#buildingprime' + index).attr('id', 'building' + index);
                $('#personprime' + index).attr('id', 'person' + index);
                $('#calendarprime' + index).attr('id', 'calendar' + index);
                $('#commentprime' + index).attr('id', 'comment' + index);
                $('#blockprime' + index).attr('id', 'block' + index);
                $('#stagecolprime' + index).attr('id', 'stagecol' + index);
            }
        }
    })
    $('#block3').click(function () {
        $('#signoff').css('background-color', 'grey')
        $('#signoff').attr('disabled', 'disabled')
        $('#ShipmentRemark').replaceWith('<h7 id='+'ShipmentRemark'+'></h7>')
        $('#ShipmentQuality').replaceWith('<h7 id='+'ShipmentQuality'+'>'+shipment.Quality+'</h7>');
        if (type == 'lab' && shipment.Status == 'DELIVERED') {
            $('#signoff').css('background-color', 'black')
            $('#signoff').removeAttr('disabled')
            $('#ShipmentRemark').replaceWith('<input id='+'ShipmentRemark'+'></input>');
            $('#ShipmentQuality').replaceWith('<input type='+'Number'+' id='+'ShipmentQuality'+'></input>');
        } else if (shipment.Remarks.LabRemark == undefined) {
            $('#ShipmentRemark').text('-');
        } else {
            $('#ShipmentRemark').text(shipment.Remarks.LabRemark);
        }
        for (var index = 1; index <= 4; index++) {
            if (index == 3) {
                $('#add' + index).attr('id', 'addprime' + index);
                $('#building' + index).attr('id', 'buildingprime' + index);
                $('#person' + index).attr('id', 'personprime' + index);
                $('#calendar' + index).attr('id', 'calendarprime' + index);
                $('#comment' + index).attr('id', 'commentprime' + index);
                $('#block' + index).attr('id', 'blockprime' + index);
                $('#stagecol' + index).attr('id', 'stagecolprime' + index);
            } else {
                $('#addprime' + index).attr('id', 'add' + index);
                $('#buildingprime' + index).attr('id', 'building' + index);
                $('#personprime' + index).attr('id', 'person' + index);
                $('#calendarprime' + index).attr('id', 'calendar' + index);
                $('#commentprime' + index).attr('id', 'comment' + index);
                $('#blockprime' + index).attr('id', 'block' + index);
                $('#stagecolprime' + index).attr('id', 'stagecol' + index);
            }
        }
    })
    $('#block4').click(function () {
        $('#signoff').css('background-color', 'grey')
        $('#signoff').attr('disabled', 'disabled')
        $('#ShipmentQuality').replaceWith('<h7 id='+'ShipmentQuality'+'>'+shipment.Quality+'</h7>');
        if (type == 'factory' && shipment.Status == 'CHECKED') {
            $('#signoff').css('background-color', 'black')
            $('#signoff').removeAttr('disabled')
            $('#ShipmentRemark').replaceWith('<input id='+'ShipmentRemark'+'></input>');
        } else if (shipment.Remarks.FactoryRemark == undefined) {
            $('#ShipmentRemark').text('-');
        } else {
            $('#ShipmentRemark').text(shipment.Remarks.FactoryRemark);
        }
        for (var index = 1; index <= 4; index++) {
            if (index == 4) {
                $('#add' + index).attr('id', 'addprime' + index);
                $('#building' + index).attr('id', 'buildingprime' + index);
                $('#person' + index).attr('id', 'personprime' + index);
                $('#calendar' + index).attr('id', 'calendarprime' + index);
                $('#comment' + index).attr('id', 'commentprime' + index);
                $('#block' + index).attr('id', 'blockprime' + index);
                $('#stagecol' + index).attr('id', 'stagecolprime' + index);
            } else {
                $('#addprime' + index).attr('id', 'add' + index);
                $('#buildingprime' + index).attr('id', 'building' + index);
                $('#personprime' + index).attr('id', 'person' + index);
                $('#calendarprime' + index).attr('id', 'calendar' + index);
                $('#commentprime' + index).attr('id', 'comment' + index);
                $('#blockprime' + index).attr('id', 'block' + index);
                $('#stagecolprime' + index).attr('id', 'stagecol' + index);
            }
        }
    })
    $('#signoff').click(function () {
        if (shipment.Status == 'SENT' && type=='driver') {
            deliveredshipment();
        }
        else if (shipment.Status == 'DELIVERED' && type=='lab') {
            checkedshipment();
        }
        else if (shipment.Status == 'CHECKED' && type=='factory') {
            receivedshipment()
        }
    })
});
