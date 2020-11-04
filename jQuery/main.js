//----------Ex1
$('#btn').click(function(){
    $("ul").append("<li>"+$("#txt").val()+ "</li>")
    $('li').click(function(){
        $(this).remove()
    })
    $("#txt").val("") 
})


//---------Ex2

$('.item').click(function(){
    if($(this).data().instock != false)
    $("#cart").append("<div class=cart-item>"+$(this).text()+"</div>")
})