$(function () {
    $(".newBurger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurgerData").val().trim(),
            devoured: 0
            //sets default to false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("You've added a burger!");
                location.reload();
            }
        );
    });

    //when devour button is clicked, burger changes to true on devoured 
    $(".devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(
            function () {
                console.log("You devoured that burger like a beast");
                location.reload();
            }
        )
    })
});