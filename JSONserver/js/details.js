
// an obj that has the value of the "id=post.id" in browser search bar
const id = new URLSearchParams(window.location.search).get('id');
// if the id was 2 e.g it will be stored in this id var

const container = document.querySelector('.details');

const renderDetails = async() =>{
    // get a single one with the id var
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    console.log(post)
        //   we can log console.log(post) here to make sure it works: it should be an obj
    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());