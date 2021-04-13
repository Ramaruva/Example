import react from 'react'

function Data()
{
    fetch('https://json-server-mocker-masai.herokuapp.com/tasks')
    .then(response => response.json())
    .then(data => console.log(data));
    
}

export {Data}