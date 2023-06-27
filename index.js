// Add your code here
function submitData(name, email){
    const formData = {
        name: name,
        email: email
    }

    
    configurationObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json' 
        },
        body: JSON.stringify(formData)
    }
        

    fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)
    })
    .catch(error => {
        alert('Your code has an error.')
        console.log(error.message)
    })
    
}