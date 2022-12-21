const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postOldagram = document.getElementById("post-oldagram")
const likeBtn = document.getElementById("like-btn")


document.addEventListener('click', function(event) {
    if (event.target.id=== "like-btn"){
        console.log("hello")
    }

})

console.log(likeBtn)

function renderPosts(){
        
    for(let i = 0; i <posts.length; i++){
        postOldagram.innerHTML+=`<section id="user-section">
                                    <div id="user-container">
                                        <div><img class="avatar-img" src="./${posts[i].avatar}" label="avatar of van gough"></div>
                                        <div><p><span>${posts[i].name}</span>${posts[i].location}</p></div><span></span>
                                    </div>
                                </section>
                                <section class="main-img-container">
                                    <img class="main-img" src="./${posts[i].post}" label>
                                </section>
                                <footer>
                                <div class="icon-logos-container">
                                    <img class="icon-img" src="./images/icon-heart.png">
                                    <img class="icon-img" src="./images/icon-dm.png">
                                    <img class="icon-img" src="./images/icon-comment.png">
                                </div>
                                <div id="div-likes">
                                    <div>
                                        <p id="like-p">${posts[i].likes}</p>
                                    </div>
                                    <div>
                                        <button id="like-btn">likes</button>
                                    </div>
                                </div>
                                <div class="comment-div">
                                    <p><span class="comment-span">${posts[i].username}</span> ${posts[i].comment}</p>
                                </div>
                            </footer>`
                                
        
                                    
    }
    
 
}
renderPosts()

