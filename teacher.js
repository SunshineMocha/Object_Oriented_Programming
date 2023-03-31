class Teacher extends Person{
    constructor(name, surname, yob, students){
        super(name, surname, yob); // usa il costruttore di tuo papà (person) per costruire la parte persona di student (con gli attributi)
        this.students = students; // l'insegnante ha degli studenti
    }

    findBestStudent(){
        const students = this.students;
        let bestStudent = students[0];
        for (let i = 1; i < students.length; i++) {
            const actualStudent = students[i];
            const bestMean = bestStudent.calculateMean(); //sostituita la funzione con il metodo usato per student
            const actualMean = actualStudent.calculateMean();
            if (actualMean > bestMean) {
                bestStudent = actualStudent;
            }
        }
        return bestStudent;
    }

    // Qui una volta c'era la funzione toString completa che lavorava su tutta la lista name, surname, yob, students. Ora lavoriamo solo su grades

    toString(){
        // ritorna una stringa 
        // NOME: Andrea
        // COGNOME: Asioli
        // ETA: 45
        // MIGLIOR STUDENTE: Valentina Cherubini
        return super.toString() + `MIGLIOR STUDENTE: \n${this.findBestStudent().name} ${this.findBestStudent().surname} (media: ${this.findBestStudent().calculateMean()})\n`;
        // richiama il toString del genitore con super.toString() e aggiunge il resto
    }
    // Qui una volta c'era la funzione CalculateAge, che ora fa parte di Person, che ha già tutti i dati dei figli, indistintamente da student o teacher
}

/*

{\__/}
( • . •)
/ > !

*/