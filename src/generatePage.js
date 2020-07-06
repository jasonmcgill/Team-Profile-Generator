//sets up each employee with only the information they need
generateEmployee = (employee) => {
    let icon = ''
    if(employee.role === 'Manager'){icon= `<i class="fas fa-coffee"></i>`}
    if(employee.role === 'Engineer'){icon= `<i class="fas fa-glasses"></i>`}
    if(employee.role === 'Intern'){icon= `<i class="fas fa-graduation-cap"></i>`}

    return `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${employee.name}</div>
    <div class="card-body">
     <h5 class="card-title">${employee.role} ${icon}</h5>
     <p class="card-text">ID: ${employee.id}</p>
     <p class="card-text">Email: <a href="mailto:${employee.email}" class= "text-white">${employee.email}</a> </p> 
     ${(employee.officeNumber ? `<p class="card-text">Office Number: ${employee.officeNumber} </p>` : '')}
     ${(employee.github ? `<p class="card-text">Github: <a href="https://github.com/${employee.github}" target="_blank" class= "text-white">${employee.github}</a></p>` : '')} 
     ${(employee.school ? `<p class="card-text">School: ${employee.school} </p>` : '')}
    </div>
    </div>`
}

//generates the html template literal
generatePage = (employees) => {
    let template = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team-Profile-Generator </title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
    
        <div class="container">
            <div class="row">`
    //loops through employee array and calls generate employee
    employees.forEach(employee => {
        template += generateEmployee(employee);
    });


    template += `            </div>    
        </div>
    
    <script src="https://kit.fontawesome.com/86733057e3.js" crossorigin="anonymous"></script>
    </body>
    
</html>
`;
    return template
}

module.exports = generatePage;