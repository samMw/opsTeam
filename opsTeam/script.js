function signImage(e) {
    $('.modal-title').text("Sign Position No." + e);
    document.getElementById('modalImage').src="Photos\\" + e + ".jpg"
    $('#exampleModal').show()
}
