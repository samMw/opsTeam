// Global Variable //
var areaSelected = "";

// Sets areaSelected //
function selection(e) {
    areaSelected = e;
    $('.modal-title').text("Sign Position No." + e);
    document.getElementById('modalImage').src="Photos\\" + e + ".jpg"
    $('#exampleModal').show()
}

// Enables tabbing between Sign and Layout in Modal //
function signImage() {
    $('.modal-title').text("Sign Position No." + areaSelected);
    document.getElementById('modalImage').src="Photos\\" + areaSelected + ".jpg"
    $('#exampleModal').show()
}
function layoutImage() {
    $('.modal-title').text("Layout for Room No." + areaSelected);
    document.getElementById('modalImage').src="Photos\\layout" + areaSelected + ".jpg"
    $('#exampleModal').show()
}

// Change Active Tab in Modal //
$('ul li a').click(function(){
    $('li a').removeClass("active text-primary"); 
    $(this).addClass("active text-primary"); 
});
