function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const section = document.getElementById('posts');
    for(const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML =  `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        section.appendChild(div);
    }
}
loadPost();