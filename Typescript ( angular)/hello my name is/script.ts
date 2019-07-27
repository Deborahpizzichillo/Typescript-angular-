const myname = document.querySelector('p#name');

if (myname != undefined) {       
    myname.addEventListener('click', updateName);
}

function updateName() {    
    changeName(requestName());
}

function requestName(): string {
    const name: string = prompt('What is your name?');
  
    return name;
}

function changeName(name: string) {
    const defaultName: string = 'Gabi';
    const displayName = (name.length > 0) ? name : defaultName;
    myname.textContent = `${displayName}`;
}