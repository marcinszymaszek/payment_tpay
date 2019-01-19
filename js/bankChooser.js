$(".bank-block").click(function () {
        $(".bank-block.active").removeClass("active");
});

$(".bank-block").click(function(e) {
    if ($(e.target).is('.bank-block')) {
        $(e.target).addClass("active");
    }
});


