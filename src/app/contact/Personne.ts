export class Personne{
    public nom: string;
    public prenom: string;
    public numero : string;
    public id : number;

    constructor (nom: string, prenom: string, numero : string, id : number){
        this.prenom = prenom;
        this.nom = nom;
        this.numero = numero;
        this.id = id;
    }
}