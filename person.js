class Person{

    constructor(name, surname, yob){
    this.name = name;
    this.surname = surname;
    this._yob = yob; //_nome mi indica che non devo andare a cambiare i valori di questo attributo / nascosto
    }

    // GETTER E SETTER  Funzioni che fanno finta di essere variabili
    get yob(){ // PRENDI: mi ritorna il valore/attributo che ho nascosto (con _yob)
        return this._yob;
    }

    set yob(value){     // IMPOSTA: Usata per cambiare yob.
        let oldYob = 1980;
        if (this._yob) {
            oldYob = this._yob;
        }
        this._yob = value;
        const newAge = this.calculateAge();
        if (newAge < 18 || newAge > 100){ // controllo: La variabile è come la voglio? La aggiorna. La variabile NON è nei parametri che mi servono? Restituisce la data originale
            this._yob = oldYob;
        }
    } 

    calculateAge(){
        // Cercare come prendere l'anno da JS, deve restituire l'età
        const age = new Date().getFullYear() - this._yob;
        return age;
        
        /*
            Metodo esteso: 
            const actualDate = new Date();
            const actualYear = actualDate.getFullYear()
            const age = actualYear - this.yob;
            return age;
        */
    }

    toString(){
        // ritorna una stringa
        // NOME: Davide
        // COGNOME: Consigliere
        // ETA: 34
        return `NOME: ${this.name} \nCOGNOME: ${this.surname} \nETA':  ${this.calculateAge()} \n`;
    }
}