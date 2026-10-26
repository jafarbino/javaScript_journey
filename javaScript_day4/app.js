const tasks = [
    {id: 1, title: "Learn JavaScript Arrays", completed: true, hours: 3},
    {id: 2, title: "Build a Full-stack App", completed: false, hours: 10},
    {id: 3, title: "Master Git and GitHub", completed: true, hours: 2},
    {id: 4, title: "Learn TypeScript Basics", completed: false, hours: 5}

];

const pendingTasks = tasks.filter(function(task){
    return task.completed === false;

});

console.log("Pending Tasks: ", pendingTasks);

const pendingTitles = tasks
.filter (task => task.completed === false)
.map (task => task.title);

console.log ("Pending Task Titles: ", pendingTitles);

const totalHours = tasks.reduce((sum, task) => {
    return sum + task.hours;

}, 0)

console.log("Total Hours Required: ", totalHours);