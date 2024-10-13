fetch("./meow.json")
    .then(response => response.json())
    .then(value => console.log(value.coder))

fetch("./meow.json")
    .then(response => response.json())
    .then(value => console.log(value.name))
    
fetch("./meow.json")
    .then(response => response.json())
    .then(value => console.log(value.age))
