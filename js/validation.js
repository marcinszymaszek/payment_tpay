$(function () {
    $('#center').validate({
        rules: {
            checkbox: {
                required: true
            }
        },
        messages: {
            checkbox: {
                required: "Akceptacja regulaminu jest obowiązkowa, przed rozpoczęciem płatności"
            }
        }
    });
});






