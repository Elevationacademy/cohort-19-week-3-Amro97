// const postIdCounter = function(posts){
//     let postsCounter = 0
//     for (let post in posts)
//     postsCounter++
//     return postsCounter
// }

// let commentIdCounter = function(posts){
//     let commentCounter = 0
//     for (let comment in posts.comments)

// }


const Tweeter = function () {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = function () {
        return _posts
    }
    const addPost = function (str) {
        postIdCounter++
        let newPost = {
            text: str,
            id: "p" + postIdCounter.toString(),
            comments: []
        }
        _posts.push(newPost)
    }
    const removePost = function (postId) {
        let a = parseInt(postId[1])
        _posts.splice(a - 1, 1)
    }
    const addComment = function(postId, txt){
        let newComments = {
            text: str,
            id: "p" + postIdCounter.toString(),
            comments: []
        } 
    }
    return {
        addPost: addPost,
        removePost: removePost,
        getPosts: getPosts
    }
}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}