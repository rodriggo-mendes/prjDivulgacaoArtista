$(document).ready(function () {
    $(".burguer").click(function () {
        $(".menures").toggleClass('displaytoggle');
        $(".burguer").toggleClass('active');
    });
})