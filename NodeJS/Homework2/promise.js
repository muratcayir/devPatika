// const promise1 = new Promise((resolve,reject)=>
// {
//     resolve("BASARILI");
// })

const posts = 
[
    {title: 'Post Başlık 1', detail: 'Post Detay 1'}, 
    {title: 'Post Başlık 2', detail: 'Post Detay 2'}, 
    {title: 'Post Başlık 3', detail: 'Post Detay 3'}, 
    {title: 'Post Başlık 4', detail: 'Post Detay 4'} 
]

const listPost = () =>
{
    posts.map((post)=>
    {
        console.log(post.title)
    })
} 

listPost()

const addPost = (newPost) =>
{
    const promise1 = new Promise((resolve,reject) =>
    {
        posts.push(newPost)
        resolve(posts)
    })

    return promise1;
}

addPost({title: 'Post Başlık 5', detail: 'Post Detay 5'})
.then(()=>
{
    console.log("YENI POST")
    listPost()
})