const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  // ?_sort lets us sort the data not by the id but e.g likes
  // &_order=desc : higher to lower
  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts = await res.json();
    //   we can log console.log(posts) here to make sure it works: it should be an array of obj
    let template = '';
    posts.forEach(post => {
      template += `
        <div class="post">
          <h2>${post.title}</h2>
          <p><small>${post.likes} likes</small></p>
          <p>${post.body.slice(0, 200)}...</p>
          <a href="/details.html?id=${post.id}">Read more</a>
        </div>
      `
    });
//   we are trying to fetch single items by writing a key value in line 16 bt post.id
container.innerHTML = template;
}



// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());
// * runs when the dom content is loaded in the browser