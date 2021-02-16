function getManagers(managers) {
    let alltheManagers = ''
    for (let i = 0; i < managers.length; i++) {
        alltheManagers = alltheManagers.concat(`
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h3 class="card-text">${managers[i].name}.</h3>
    <p class="card-text">${managers[i].id}.</p>
    <p class="card-text">${managers[i].email}.</p>
    <p class="card-text">${managers[i].officenumber}.</p>
  </div>
</div>
    `)
    }
    return alltheManagers
}

function getEngineers(engineers) {
    let alltheEngineers = ''
    for (let i = 0; i < engineers.length; i++) {
        alltheEngineers = alltheEngineers.concat(`
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h3 class="card-text">${engineers[i].name}.</h3>
    <p class="card-text">${engineers[i].id}.</p>
    <p class="card-text">${engineers[i].email}.</p>
    <p class="card-text">${engineers[i].github}.</p>
  </div>
</div>
    `)

    }
    return alltheEngineers
}

function getInterns(interns) {
    let alltheInterns = ''
    for (let i = 0; i < interns.length; i++) {
        alltheInterns = alltheInterns.concat(`
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h3 class="card-text">${interns[i].name}.</h3>
    <p class="card-text">${interns[i].id}.</p>
    <p class="card-text">${interns[i].email}.</p>
    <p class="card-text">${interns[i].school}.</p>
  </div>
</div>
    `)
    }
    return alltheInterns
      
};

function generateHTML(managers, engineers, interns) {
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
    <link rel="stylesheet" href="style.css">
    <!-- link to jquery-->
    <script src="jquery-3.5.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Team Builder</title>
</head>

<header>Our Team</header>

<body>
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-4">
                <div id="manager"></div>
                ${getManagers(managers)}
            </div>
            <div class="col-md-4">
                <div id="engineer"></div>
                ${getEngineers(engineers)}
            </div>
            <div class="col-md-4">
                <div id="intern"></div>
                ${getInterns(interns)}
            </div>
            <div class="col-md-4">
                <div id="employee"></div>
            </div>
        </div>
    </div>

    // <!-- Link to bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>
    // <!-- Link to js -->
    <script rel="textjavascript" src="index.js"></script>
</body>

</html>
`
};

module.exports = generateHTML;

