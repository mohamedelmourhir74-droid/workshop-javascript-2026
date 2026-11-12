const employees = [
  {
    id: 1,
    firstName: "Sara",
    lastName: "Alami",
    email: "sara@example.com",
    department: "Développement",
    salary: 9500,
    experience: {
      company: "TechSolutions",
      position: "Frontend Developer",
      years: 3
    },
    skills: [
      { name: "JavaScript", level: "Avancé" },
      { name: "React", level: "Intermédiaire" }
    ]
  },
  {
    id: 2,
    firstName: "Youssef",
    lastName: "Mansouri",
    email: "youssef@example.com",
    department: "Développement",
    salary: 11500,
    experience: {
      company: "WebCraft",
      position: "Backend Developer",
      years: 5
    },
    skills: [
      { name: "Node.js", level: "Avancé" },
      { name: "JavaScript", level: "Avancé" }
    ]
  },
  {
    id: 3,
    firstName: "Nadia",
    lastName: "Nadia",
    email: "Nadia@example.com",
    department: "Design",
    salary: 9000,
    experience: {
      company: "CreativeLab",
      position: "UI/UX Designer",
      years: 2
    },
    skills: [
      { name: "Figma", level: "Avancé" },
      { name: "Communication", level: "Intermédiaire" }
    ]
  }
];



















function affichageContainerEmploye () {
    document.getElementById("employees-list").innerHTML = ""

    employees.forEach(employe => {
        affichageEmploye(employe)
    })
}


affichageContainerEmploye()


function affichageEmploye (employe) {
    document.getElementById("employees-list").innerHTML += `
    <article class="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm" data-employee-id="1">
          ${employeInfoPer(employe.firstName, employe.lastName, employe.email, employe.department)}
          
          ${employeInfoPro (employe.experience.position, employe.experience.company, employe.experience.years, employe.salary)}

          ${employeCompetences (employe.skills)}
          
          ${employeActions ()}
        </article>`
}


function employeInfoPer (firstName, lastName, email, department) {
    return `<div class="flex items-start justify-between gap-4">
            <div class="flex min-w-0 items-center gap-3">
              <div class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">${firstName[0]}${lastName[0]}</div>
              <div class="min-w-0">
                <h3 class="truncate text-lg font-bold">${firstName} ${lastName}</h3>
                <p class="truncate text-sm text-slate-500">${email}</p>
              </div>
            </div>
            <span class="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">${department}</span>
            </div>`
}

function employeInfoPro (post, Entreprise, experience, salary) {
    return `<dl class="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4 text-sm">
            <div><dt class="text-slate-500">Poste</dt><dd class="mt-1 font-semibold">${post}</dd></div>
            <div><dt class="text-slate-500">Entreprise</dt><dd class="mt-1 font-semibold">${Entreprise}</dd></div>
            <div><dt class="text-slate-500">Expérience</dt><dd class="mt-1 font-semibold">${experience} ans</dd></div>
            <div><dt class="text-slate-500">Salaire</dt><dd class="mt-1 font-semibold">${salary} MAD</dd></div>
          </dl>`
}

function employeCompetences (skills) {
    
    skills.forEach(skill => {
        
        return `<div class="mt-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Compétences</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium">${skill.name} . ${skill.level}</span>
              <span class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium">${skill.name} . ${skill.level}</span>
            </div>
          </div>`
    })
        
}

function employeActions () {
    return `<div class="mt-auto flex gap-3 pt-5">
            <button type="button" class="edit-btn flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold transition hover:bg-slate-50" data-id="1">Modifier</button>
            <button type="button" class="delete-btn flex-1 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50" data-id="1">Supprimer</button>
          </div>`
}