function getManagers(managers) {
    let alltheManagers = ''
    for (let i = 0; i < managers.length; i++) {
        alltheManagers = alltheManagers.concat(`
    <div class="card" style="width: 18rem;">
  <img src="icons/manager-icon.png" class="card-img-top" alt="manager icon">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h3 class="card-text">Name: ${managers[i].name}.</h3>
    <p class="card-text">ID: ${managers[i].id}.</p>
    <a href="mailto:${managers[i].email}">${managers[i].name}'s Email: ${managers[i].email}.</a>
    <br>
    <p class="card-text">${managers[i].name}'s Office Number ${managers[i].officenumber}.</p>
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
  <img src="icons/engineer-icon.png" class="card-img-top" alt="engineer icon">
  <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <h3 class="card-text">Name: ${engineers[i].name}.</h3>
    <p class="card-text">ID: ${engineers[i].id}.</p>
    <a href="mailto:${engineers[i].email}">${engineers[i].name}'s Email: ${engineers[i].email}.</a>
    <br>
    <a href="https://github.com/${engineers[i].github}" target="_blank"">${engineers[i].name}'s GitHub: ${engineers[i].github}</a>
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
  <img src="icons/intern-icon.png" class="card-img-top" alt="intern icon">
  <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <h3 class="card-text">Name: ${interns[i].name}.</h3>
    <p class="card-text">ID: ${interns[i].id}.</p>
    <a href="mailto:${interns[i].email}">${interns[i].name}'s Email: ${interns[i].email}.</a>
    <br>
    <p class="card-text">School:${interns[i].name}'s ${interns[i].school}.</p>
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

    <!-- Link to bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>
    <!-- Link to js -->
    <script rel="textjavascript" src="index.js"></script>
</body>

</html>
`
};

module.exports = generateHTML;

