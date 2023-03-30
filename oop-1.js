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
const teacher = new Teacher ('Andrea', 'Asioli', 1978, [student1, student2, student3]); // Il teacher conosce gli students, array che contiene i nomi delle liste
// con students e grades nelle liste/costruttori abbiamo creato differenza tra teacher e studentX
// qui c'era una function calculateMeanOfStudent(student), ma siccome abbiamo il file student.js che deve usarla, possiamo spostarla su student.js. Il codice della funzione è dentro le graffe
console.log(student2.calculateMean()); // Chiamata della funzione sull'oggetto, come metodo.
// qui c'era una function FindBestStudentOfTeacher(teacher), ma siccome abbiamo il file teacher.js che deve usarla, possiamo spostarla su teacher.js. Il codice della funzione è dentro le graffe
console.log(teacher.findBestStudent());
// COMPITO: Completare le nuove funzioni in student.js e teacher.js

console.log(teacher.toString());
console.log(student2.toString());