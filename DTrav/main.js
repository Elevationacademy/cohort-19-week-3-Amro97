$(".generator").click(function(){
    let computerObject = $(this).parent().parent().closest('.computer')
    let processorId = $(this).parent().closest('.processor').attr('id')
    let computerId = $(computerObject).data().id
    let bus = $(computerObject).find(".BUS").text()
    console.log("Processor ID : " + processorId)
    console.log("Computer's data-id : " + computerId)
    console.log("BUS : " + bus)
})
$(".validator").click(function(){
    let generatorText =  $(this).closest(".computer").find(".generator").text()
    let theMb = $(this).closest(".computer").find(".MB").text()
    console.log("Generator Text : " + generatorText)
    console.log("MB : " + theMb)
    $(this).closest(".computer").find(".QR").each(function(){
    console.log(`QR: ${$(this).text()}`)
    })  
})