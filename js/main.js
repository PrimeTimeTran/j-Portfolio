const queryString = window.location.search;

if (queryString) {
  const cat = queryString.split('=')[1]
  const posts = document.querySelectorAll('.portfolio-item')
  for (const post of posts) {
    if (post.classList[2] !== cat) {
      post.remove()
    }
  }
}

setTimeout(() => {
  document.title = 'A Tech Blog by PrimeTimeTran'
}, 50) 