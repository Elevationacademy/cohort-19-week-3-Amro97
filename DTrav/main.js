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
    let qr1 = $(this).closest(".computer").find(".QR").text()
    console.log("Generator Text : " + generatorText)
    console.log("MB : " + theMb)
    console.log("QR's : " + qr1)    
})