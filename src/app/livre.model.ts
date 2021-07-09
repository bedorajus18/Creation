export class Livre {
  titre:      string;
  numeroISBN: number;
  auteur:     string;

  constructor(pTitre:string,pNumeroISBN:number,pAuteur:string)
   {
     this.titre = pTitre;
     this.numeroISBN = pNumeroISBN;
     this.auteur = pAuteur;
  }
}
