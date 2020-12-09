// Exercice 1
// let submit = document.getElementById("submit");

//    submit.addEventListener("click", (e) =>{
//    e.preventDefault();

//    let heures = Number(document.getElementById('heures').value);
//    let minutes = Number(document.getElementById('minutes').value);
//    let secondes = Number(document.getElementById('secondes').value);

//   if(heures <24 && minutes <60 && secondes <60){
//     secondes ++;
//     document.getElementById("result").textContent = "Il sera avec une seconde d'avance " + heures + " heure " + minutes + " minutes et " + secondes + " secondes !";
//   }
//   else{
//     document.getElementById("result").textContent = "Le format d'heure est incorect ! Maximum 24 heures , 59 minutes et 59 secondes !";
//   }
//    });

// Exercice 2
// let submit = document.getElementById("submit");

//    submit.addEventListener("click", (e) =>{
//    e.preventDefault();

//    let score1 = Number(document.getElementById('score1').value);
//    let score2 = Number(document.getElementById('score2').value);
//    let score3 = Number(document.getElementById('score3').value);
//    let score4 = Number(document.getElementById('score4').value);

//    if(score1 >= 50){
//     document.getElementById("result").textContent = "Le candidat numéro 1 est élu !";
//    }
//    if(score1 < 50 && score1 >= 12.5 && score1 > score2 && score1 > score3 && score1 > score4){
//     document.getElementById("result").textContent = "Le candidat numéro 1 passe au second tour en arrivant en tête !";
//    }
//    if(score1 <= 49.9 && score1 < score2 || score1 < score3 || score1 < score4){
//     document.getElementById("result").textContent = "Le candidat numéro 1 passe au second tour mais n'est pas en tête !";
//    }
//    if(score1 <12.5){
//     document.getElementById("result").textContent = "Le candidat numéro 1 EST ELIMINE !";
//    }
//    });

// Exercice 4
// let submit = document.getElementById("submit");

//    submit.addEventListener("click", (e) =>{
//    e.preventDefault();

//    let nbChoisi = 121;
//    let nombre = Number(document.getElementById('nombre').value);

//    if(nombre < nbChoisi){
//     document.getElementById("result").textContent = "NON, Plus grand !";
//    }
//    if(nombre > nbChoisi){
//     document.getElementById("result").textContent = "NON, plus petit ";
//    }
//    if(nombre == nbChoisi){
//     document.getElementById("result").textContent = "BINGO !!!!!! ";
//    }
//    if(nombre > 200 ){
//     document.getElementById("result").textContent = "En dessous de 200 ! ";
//    }
//    });

// Exercice 5
// let submit = document.getElementById("submit");

//    submit.addEventListener("click", (e) =>{
//    e.preventDefault();

//       // Récupération des informations du formulaire
//       let name = document.getElementById("name").value;
//       let firstName = document.getElementById("firstName").value;
//       let date = new Date(document.getElementById("birthDate").value);
//       // Récupération date du jour
//       let dayDate = new Date();

//       // On prend la variable date et on lui attribu une année un mois et un jour
//       let birthDay = date.getDate();
//       let birthMonth = date.getMonth()+1;
//       let birthYear = date.getFullYear();

//     // On prend la variable NEWdate et on lui attribu une année un mois et un jour
//     // Différent de la variable date
//       let dateDay = dayDate.getDate();
//       let dateMonth = dayDate.getMonth() +1;
//       let dateYear = dayDate.getFullYear();

//       // Différence entre la date d'aujourd'hui et la date de naissance
//       let diff = dayDate - date; 
//       // Résultat en millisecondes
//       // On transforme les millisecondes en jours
//       let days = parseInt(diff / 1000 / 60 / 60 / 24);
//       // console.log(days);
//       // On transforme les jours en années
//       let years = parseInt(days / 365.25);
//       // console.log(years);

//       let anniversaire = birthDay === dateDay && birthMonth === dateMonth;

//       if(anniversaire){
//         document.getElementById("result").textContent = "Joyeux anniversaire " + firstName + " " + name + " ! Aujourd'hui vous avez " + years + " ans ! ";
//       }
//       else {
//         document.getElementById("result").textContent = " Bonjour " + firstName + " " +name+ " vous avez " + years + " ans.";
//       }
//    });

// Exercice 6
// let submit = document.getElementById("submit");

//    submit.addEventListener("click", (e) =>{
//    e.preventDefault();

//    // Tableau 1
//    let t1nb1 = Number(document.getElementById('t1nb1').value);
//    let t1nb2 = Number(document.getElementById('t1nb2').value);
//    let t1nb3 = Number(document.getElementById('t1nb3').value);
//    let t1nb4 = Number(document.getElementById('t1nb4').value);
//    let tab1 = new Array(t1nb1, t1nb2 , t1nb3, t1nb4)
//    // Tableau 2
//    let t2nb1 = Number(document.getElementById('t2nb1').value);
//    let t2nb2 = Number(document.getElementById('t2nb2').value);
//    let tab2 = new Array(t2nb1, t2nb2);
//    // Resultat à 0
//    let resultat = 0;

//    for(let i = 0 ; i<tab1.length; i++){

//     for(let j = 0; j<tab2.length; j++){
//         resultat = resultat + tab1[i] * tab2[j];
//         document.getElementById("result").textContent = " Vous avez selectionner les chiffres " +t1nb1+ " , " +t1nb2+ " , " +t1nb3+ " , " +t1nb4+ " , dans le premier tableau  et "  +t2nb1+ " , " +t2nb2+  " , dans le second tableau. Le résultat est : " +resultat ;
//     }
// }
// });

// Exercice 3
let submit = document.getElementById("submit");

   submit.addEventListener("click", (e) =>{
   e.preventDefault();
      let year = Number(document.getElementById('year').value);
      let month = Number(document.getElementById('month').value);
      let day = Number(document.getElementById('day').value);

});