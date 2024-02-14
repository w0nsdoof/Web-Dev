var but = document.getElementById("button");
var input = document.getElementById("input");
var tasks = document.getElementById("tasks");

but.addEventListener("click", add);

function add(){
    var newtask = input.value;
    var task = `<li><input class="checkboxes" type="checkbox"><span>${newtask}</span><img src="bin.png" alt="delete"></li>`;
    tasks.insertAdjacentHTML("beforeend", task);
    document.getElementById("input").value = "";
}

tasks.addEventListener("click", imageClicked);

function imageClicked(){
    var task = event.target;
    if (task.tagName === "IMG") {
        tasks.removeChild(task.parentNode);
    }
}