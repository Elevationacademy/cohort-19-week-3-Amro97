const posts = [{name: 'Amro', wish: 'Richness'}, {name: 'Noor', wish: 'CR7'}]

const render = function(){
    $('#ppl').empty()
    for (let post of posts){
   $("#ppl").append("<div>"+post.name+": "+post.wish+"</div>")
}
}

$('#btn').click(function(){
    let newName = $('#name').val()
    let newWish = $('#bday').val()
    let newPost = {name: newName, wish: newWish}
    posts.push(newPost)
    $('#name').val("")
    $('#bday').val("")
    render()
})
