// LA PROGRAMMAZIONE AD OGGETTI.
// Quando parlo di OOP parlo di un paradigma, un modo di scrivere un software come tanti altri. 
// I più famosi paradigmi sono la programmazione ad oggetti, il paradigma di programmazione imperativo e il paradigma funzionale.
// ================================================================================================================================

// Modelliamo docente e studenti. Un software che gestisce noi come classe. Potremmo farlo tranquillamente con gli oggetti che già conosciamo
// Inizialmente il codice era fatto con 4 liste (teacher + studente1-2-3) e delle funzioni. Iniziamo a ristrutturare questo codice per un approccio ad oggetti, inizio a creare student.js e teacher.js e mi serve per andare a dividere le funzioni per chi le deve usare.
// N.B.: Meglio un file per ogni classe piuttosto che un file per più classi
const student1 = new Student('Davide', 'Consigliere', 1989, [4, 6, 7, 4, 6]); // richiamo il costruttore in student.js, new di Classe, la lista non mi serve più
const student2 = new Student('Chiara', 'Badile', 1993, [5, 8, 6, 7, 10]);
const student3 = new Student('Valentina', 'Cherubini', 2001, [8, 7, 10, 9, 8]);
const student4 = new Student('Simone', 'Maccarone', 2003);
const teacher = new Teacher ('Andrea', 'Asioli', 1978, [student1, student2, student3]); // Il teacher conosce gli students, array che contiene i nomi delle liste
// con students e grades nelle liste/costruttori abbiamo creato differenza tra teacher e studentX
// qui c'era una function calculateMeanOfStudent(student), ma siccome abbiamo il file student.js che deve usarla, possiamo spostarla su student.js. Il codice della funzione è dentro le graffe
console.log(student2.calculateMean()); // Chiamata della funzione sull'oggetto, come metodo.
// qui c'era una function FindBestStudentOfTeacher(teacher), ma siccome abbiamo il file teacher.js che deve usarla, possiamo spostarla su teacher.js. Il codice della funzione è dentro le graffe
console.log(teacher.findBestStudent());
// COMPITO: Completare le nuove funzioni in student.js e teacher.js
console.log(teacher.toString());
console.log(student2.toString()); 
console.log(student4.toString());  // Stampa studente 4 senza array. Abbiamo aggiunto un if === 0 in calculateMean per fare in modo che ritorni -1 per non arrivare a 0/0 nella funzione
student2.yob = 2005; // Chiamata setter dove imposto l'anno a 2005
student2.grades = [10, 10, 10, 10, 10]; // Chiamata senza setter
console.log(student2.yob); // Chiamata getter su student.js dove mi stampa il yob aggiornato
console.log(student2.grades); // chiamata getter senza setter, i valori sono rimasti gli stessi
console.log(student2.toString()); // Ristampa la funzione con la lista di elementi aggiornata dal setter

// Ereditarietà
// Quando sia teacher che students hanno delle parti di codice uguale (calculateAge), vuol dire che spesso fanno parte di una classe superiore, creiamo person.js con nome, cognome e
// data di nascita. Ma ora abbiamo 3 volte le funzioni!

const vecchietto = new Person('Battista', 'Parodi', 1934);
console.log(vecchietto.toString());