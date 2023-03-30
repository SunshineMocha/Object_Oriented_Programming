class Teacher{
    constructor(name, surname, yob, students){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
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

    toString(){
        // ritorna una stringa 
        // NOME: Andrea
        // COGNOME: Asioli
        // ETA: 45
        // MIGLIOR STUDENTE: Valentina Cherubini
    }

    calculateAge(){
        // Cercare come prendere l'anno da JS, deve restituire l'età
    }
}

/*

{\__/}
( • . •)
/ > !

*/