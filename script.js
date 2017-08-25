$(document).ready(function(){

    $("#click").click(function(){
        alert("You have hereby been alerted")
    })

    $("#hide").click(function(){
        $("#hide").hide()
    })

    $("#show").click(function(){
        $("#hide").show()
    })

    $("#toggle").click(function(){
        $("#hide").toggle()
    })

    $("#slideDown").click(function(){
        $("#imHidden").slideDown()
    })

    $("#slideUp").click(function(){
        $("#hideMe").slideUp()
    })

    $("#slideToggle").click(function(){
        $("#iToggle").slideToggle()
    })

    $("#fadeIn").click(function(){
        $("#iFadeIn").fadeIn()
    })

    $("#fadeOut").click(function(){
        $("#iFadeOut").fadeOut()
    })

    $("#addClass").click(function(){
        $("button").addClass("invert")
    })

    $("#before").click(function(){
        $("#before").before("<p>Me first!</p>")
    })

    $("#after").click(function(){
        $("#after").after("<p>Me last!</p>")
    })

    $("#append").click(function(){
        $("#appendMe").append("<p>Just one more thing!</p>")
    })

    $("#html").click(function(){
        $("#htmlMe").html("<h3>Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.</h3>")
    })
})