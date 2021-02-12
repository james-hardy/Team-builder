const wrapper = () => {
    const addEmplyee = (employee) =>{
        return 

        `
        <div class="card" style="width: 18rem;">
            <img src="Develop/icons/employee-icon.jpg" class="card-img-top" alt="Employee Icon">
            <div class="card-body">
                <h5 class="card-title">Employee Name: ${employee.userName}</h5>
                <p class="card-text">Employee Id: ${employee.id}</p>
                <h4> Employee email: ${employee.email}</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }
}



emplyees = []


module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Link to bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <!-- Link to CSS -->
        <link rel="stylesheet" href="Develop/style.css">
        <title>Team Builder</title>
    </head>
    
    <header>Our Team</header>
    
    <body>
        <div class="container-fluid">
    
            <div class="row">
                <div class="col-md-4">
                    <div id="manager"></div>
                </div>
                <div class="col-md-4">
                    <div id="engineer"></div>
                </div>
                <div class="col-md-4">
                    <div id="intern"></div>
                </div>
                <div class="col-md-4">
                </div>
            </div>
        </div>
    
        <!-- Link to bootstrap -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"></script>
        <!-- Link to js -->
        <script rel="textjavascript" src="../index.js"></script>
    </body>
    
    </html> 
   `
    };