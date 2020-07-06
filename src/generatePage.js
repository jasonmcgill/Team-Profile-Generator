generatePage = (data) => {

    const {

    } = data

    return `
    <!DOCTYPE html>
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
            <div class="row">
                <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's
                            content.</p>
                    </div>
                </div>
    
                <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's
                            content.</p>
                    </div>
                </div>
                
            </div>    
        </div>
    
    
    </body>
    
    </html>
`;
}

module.exports = generatePage;