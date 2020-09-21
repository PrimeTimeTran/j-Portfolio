const queryString = window.location.search;

if (queryString) {
  const cat = queryString.split('=')[1]
  const posts = document.querySelectorAll('.portfolio-item')
  for (post of posts) {
    console.log(post.classList[2] === cat)
    if (post.classList[2] !== cat) {
      post.remove()
    }
  }
}