document.addEventListener("DOMContentLoaded", () => {
  const add = document.querySelector(".add");
  const input = document.querySelector("#task-input");
  const checkbox = document.querySelector("#task-done");
  const delete_task = document.querySelector(".delete");
  const newtask = document.querySelector(".wrap1");
  let task = JSON.parse(localStorage.getItem("task")) || [];
  task.forEach((task) => renderTask(task));
  add.addEventListener("click", (e) => {
    e.preventDefault();
    const taskTest = input.value.trim();
    if (taskTest === "") return;
    const newtask = {
      id: Date.now(),
      text: taskTest,
      completed: false,
    };
    task.push(newtask);
    input.value = "";
    savetask();
    console.log(task);
  });
  function savetask() {
    localStorage.setItem("task", JSON.stringify(task));
  }
  function renderTask(task) {
    console.log(task);
  }
});
