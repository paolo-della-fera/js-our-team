const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];


// mi prendo il nodo del dom da modificare 
const rowEl = document.querySelector('.row');
// console.log(rowEl)


for (let i = 0; i < teamMembers.length; i++) {
  const members = teamMembers[i];
  // console.log(members);

  // creo la variabile effettuando il destructuring delle proprietà dell'array di oggetti
  const { name, role, email, img } = members
  // console.log(name, role, email, img)

  // creo la variabile che contine il mio markup
  const markup = `
  <div class="col">
  <div class="card text-bg-dark mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${img}" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${role}</p>
          <p class="card-text text-primary">${email}</p>
        </div>
      </div>
      </div>
    </div>
 </div>
  `
  //console.log(markup)

  // stampo in automatico le card in pagina
  rowEl.innerHTML += markup

}