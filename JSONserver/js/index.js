const container = document.querySelector('.blogs');
const renderPosts = async ()=>{
      let uri = " http://localhost:3000/posts";

      const res = await fetch(uri);
      const posts = await res.json();
    //   we can log console.log(posts) here to make sure it works: it should be an array of obj
      let template = '';
      posts.forEach(post =>{
        //  += means appending
          template += `
          <div class="post">
           <h2>${post.title}</h2>
           <p><small>${post.likes} likes</small></p>
           <p>${post.body.slice(0, 200)}...</p>
           <a href="/details.html?id=${post.id}">read more .,.,</a>
          </div>
          `
      })
//   we are trying to fetch single items by writing a key value in line 16 bt post.id
      container.innerHTML = template;
}


window.addEventListener('DOMContentLoaded', ()=> renderPosts());
// * runs when the dom content is loaded in the browser