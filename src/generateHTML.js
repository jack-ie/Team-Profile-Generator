// manager card for html
const managerCard = (Manager) => {
    const { name, id, email, number, role } = Manager
    return `<div class = "column">
        <div class = "card">
            <div class = "cardContent">
                <div class="cardHeader">
                    <div class = "cardHeaderContent text-center bg-gradient bg-dark text-white">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>
                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                    <div class = "column"> Office Number: ${number} </div>
                </div>
            </div>
        </div>
    </div>`
}

// engineer card for html
const engineerCard = (Engineer) => {
    const { name, id, email, gitHub, role } = Engineer
    return `<div class = "column">
        <div class = "card">
            <div class = "cardContent">
                <div class = "cardHeader">
                    <div class = "cardHeaderContent text-center bg-gradient bg-secondary text-white">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>
                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                    <div class = "column"> GitHub Userame: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></div>
                </div>
            </div>
        </div>
    </div>`
}

// intern card for html
const internCard = (Intern) => {
    const { name, id, email, school, role } = Intern
    return `<div class = "column">
        <div class = "card">
            <div class = "cardContent">
                <div class = "cardHeader">
                    <div class = "cardHeaderContent text-center bg-gradient bg-secondary text-white">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>
                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                    <div class = "column"> School: ${school}</div>
                </div>
            </div>
        </div>
    </div>`
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // call manager function
        if (role === 'Manager') {
            const managerCard = genManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = genEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = genIntern(employee);

            pageArray.push(internCard);
        }

    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = genTeam(employeeCards);
    return generateTeam;

}

// generate html page 
const genTeam = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
exports.managerCard = managerCard
exports.engineerCard = engineerCard
exports.internCard = internCard 