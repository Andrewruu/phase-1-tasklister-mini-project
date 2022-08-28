document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target.querySelector('#new-task-description').value)
    toDo(e.target.querySelector('#new-task-description').value)
  })
});

function toDo(task){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent =`${task} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove()
}