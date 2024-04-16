// Q1
var Etudiant = {
    nom: "",
    prenom: "",
    age: 0,
    cne: ""
};

var Professeur = {
    nom: "",
    age: 0,
    cin: ""
};

// Q2
Etudiant.etudier = function () {
    console.log("etudier");
};
Professeur.enseigner = function () {
    console.log("enseigner");
};

// Q3
// la création des instances et les ajouter dans la liste etudiants
let etudiants = [];

var etudiant1 = Object.create(Etudiant);
etudiant1.nom = "FAHMI";
etudiant1.prenom = "Adam";
etudiant1.age = 20;
etudiant1.cne = "k12345";

var etudiant2 = Object.create(Etudiant);
etudiant2.nom = "AMACHOU";
etudiant2.prenom = "Ahmed";
etudiant2.age = 20;
etudiant2.cne = "bh12345";

etudiants.push(etudiant1);
etudiants.push(etudiant2);

// triage de la liste selon l'ordre alphabetique
etudiants.sort(function (a, b) {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
    } else {
        return a.nom.localeCompare(b.nom);
    }
});

etudiants.forEach(function (etudiant) {
    console.log(etudiant.nom + " " + etudiant.prenom);
});
