//Searchbar Hover Effect ---------------------------------------------------

$("#searchTitle > a").mouseleave(function () {
    $("#searchIcon > a").css("color","rgb(65, 65, 65)");
    $("#searchIcon > a").css("transition","200ns ease-in-out");

    $("#searchTitle > a").css("color", "rgb(65, 65, 65)");
    $("#searchTitle > a").css("transition", "200ms ease-in-out");
})

$("#searchIcon > a").mouseleave(function () {
    $("#searchIcon > a").css("color","rgb(65, 65, 65)");
    $("#searchIcon > a").css("transition","200ns ease-in-out");

    $("#searchTitle > a").css("color", "rgb(65, 65, 65)");
    $("#searchTitle > a").css("transition", "200ms ease-in-out");
})

$("#searchIcon > a").mouseenter(function () {
    $("#searchIcon > a").css("color","white");
    $("#searchIcon > a").css("transition","200ns ease-in-out");

    $("#searchTitle > a").css("color", "white");
    $("#searchTitle > a").css("transition", "200ms ease-in-out");
})

$("#searchTitle > a").mouseenter(function () {
    $("#searchIcon > a").css("color","white");
    $("#searchIcon > a").css("transition","200ns ease-in-out");

    $("#searchTitle > a").css("color", "white");
    $("#searchTitle > a").css("transition", "200ms ease-in-out");
})

//--------------------------------------------------------------------------
