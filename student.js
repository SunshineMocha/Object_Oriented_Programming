// quando creo un oggetto voglio dargli un nome, ogni oggetto ha un modello su cui essere costruito, questo modello si chiama classe. Classi di oggetti

class Student{ // classe solitamente si definisce con la maiuscola
    // l'oggetto student ha bisogno di un costruttore (constructor())
    constructor(name, surname, yob, grades){ // quando sono in una classe non ho bisogno della parola function. Nel costruttore passo le key.
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.grades = grades; // lo studente ha dei voti
    }

    calculateMean(){ // non passo nulla alla funzione perchè sa già cosa deve usare essendo nella classe // calcolo la media di uno studente. Come faccio a calcolare la media? Ciclo for O reduce.
        const grades = this.grades; // this.grades di i voti di QUESTO studente alla quale sei associato
        let sum = 0; // variabile temporanea a 0
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum += grade;
        }
        const mean = sum / grades.length;
        return mean;
    }

    toString(){
        // ritorna una stringa
        // NOME: Davide
        // COGNOME: Consigliere
        // ETA: 34
        // MEDIA: 5.4
        return `NOME: ${this.name} \n COGNOME: ${this.surname} \n ETA':  ${this.calculateAge()} \n MEDIA: ${this.calculateMean()}\n`
    }

    calculateAge(){
        // Cercare come prendere l'anno da JS, deve restituire l'età
        const age = new Date().getFullYear() - this.yob;
        return age;
    }
}

/*

{\__/}
( • . •)
/ > O

*/