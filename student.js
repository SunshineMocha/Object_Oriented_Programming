// quando creo un oggetto voglio dargli un nome, ogni oggetto ha un modello su cui essere costruito, questo modello si chiama classe. Classi di oggetti

class Student extends Person{ // classe solitamente si definisce con la maiuscola. extends Person = Students è anche una Person
    // l'oggetto student ha bisogno di un costruttore (constructor())
    constructor(name, surname, yob, grades = []){ // quando sono in una classe non ho bisogno della parola function. Nel costruttore passo le key. // grades ha un default vuoto
        super(name, surname, yob); // usa il costruttore di tuo papà (person) per costruire la parte persona di student (con gli attributi)
        this._grades = grades; // lo studente ha dei voti
    }

    // GETTER E SETTER comuni sono state passate su Person

    get grades(){ // Get senza un set possiamo solo leggerlo. 
        return this._grades;
    }; 



    calculateMean(){ // non passo nulla alla funzione perchè sa già cosa deve usare essendo nella classe // calcolo la media di uno studente. Come faccio a calcolare la media? Ciclo for O reduce.
        const grades = this.grades; // this.grades di i voti di QUESTO studente alla quale sei associato
        if (grades.length === 0) {
            return -1;      
        }
        let sum = 0; // variabile temporanea a 0
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum += grade;
        }
        const mean = sum / grades.length;
        return mean;
    }

    // Qui una volta c'era la funzione toString completa che lavorava su tutta la lista name, surname, yob, grades. Ora lavoriamo solo su grades

    toString(){
        return super.toString() + `MEDIA: ${this.calculateMean()}\n`; // richiama il toString del genitore con super.toString() e aggiunge il resto
    }

    // Qui una volta c'era la funzione CalculateAge, che ora fa parte di Person, che ha già tutti i dati dei figli, indistintamente da student o teacher
}

/*

{\__/}
( • . •)
/ > O

*/