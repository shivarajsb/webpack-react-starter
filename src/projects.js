const projects = ["First", "Second", "Third"];
function Projects() {
  const li = document.createElement("li");
  li.innerText='Shivaraj Bakale'
  const ul = document.createElement("ul");
  const body = document.querySelector("body");
  projects.map((item) => {
      let newEl=document.createElement('li');
      newEl.innerText=item
      ul.appendChild(newEl);
  });
  body.appendChild(ul);
}


export default Projects;
