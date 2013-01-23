var initCoverFlow = true;
var createdCoverFlow = false;

$(document).ready(function(){
    //$('#coverFlow').coverFlow();
    $('.close-dialog').click(function() {
    history.back();
    //$.mobile.changePage($('#page-foto'), 'fade', false, true); 
    });
    $("#invia").click(function() {
    history.back();
    });
});



$("#dialog-contattaci").live("pageshow",function(){
    initCoverFlow = false;    
});

// JavaScript Document