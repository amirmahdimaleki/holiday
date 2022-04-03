
// an obj that has the value of the "id=post.id" in browser search bar
const id = new URLSearchParams(window.location.search).get('id');
// if the id was 2 e.g it will be stored in this id var

const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    // get a single one with the id var
    const res = await fetch('http://localhost:3000/posts/' + id);
    if (!res.ok) {
        window.location.replace("/");
      }
      const post = await res.json();
        //   we can log console.log(post) here to make sure it works: it should be an obj
        const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
      `
    
      container.innerHTML = template;
    }

    deleteBtn.addEventListener('click', async () => {
        const res = await fetch('http://localhost:3000/posts/' + id, {
          method: 'DELETE'
        });
        window.location.replace("/");
      })
      
      window.addEventListener('DOMContentLoaded', renderDetails);