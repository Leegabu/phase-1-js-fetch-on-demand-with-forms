const init = () => {
  const inputForm = document.querySelector("form")
  inputForm = document.addEventListener("submit", (e) => {
    e.preventDefault()
   /* e.target.children[1].value;*/ // method of getting in put through event object
   const input = document.querySelector("input#searchByID") // method two get value directly
   fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then((data) => {
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("sector#movieDetails p")
        title.innerHTML = data.title
        summary.innerHTML = data.summary
    });
  });
}

document.addEventListener('DOMContentLoaded', init);