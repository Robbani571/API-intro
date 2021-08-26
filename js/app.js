function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displyUsers(data))
}

function displyUsers (data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `name: ${user.name} email: ${user.email} <h1>good</h1>`;
        ul.appendChild(li);
    }
}

