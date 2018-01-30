$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var photo = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Sign Position No.' + photo)
    modal.find('.modal-body input').val(photo)

    $('.modal-body').text("The example script ran, the btn was " + photo);
    $('#exampleModal').show()
})

function test(event) {

    var image = $(this).attr('src');
        $('#exampleModal').on('show.bs.modal', function () {
            $(".img-fluid").attr("src", image);
        });

    //alert(event)
    //$('.modal-body').text("The script ran, the ID was " + event);
    //$('#exampleModal').show()
}