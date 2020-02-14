export class Employee{
    private _cnss:string;
    private _nom:string;
    private _prenom:string;
    private _age:string;
    private _date_debut:string;
    private _date_fin:string;
    private _type_contract:string;
    private _nbr_enfant:string
    /*constructor(cnss:string,nom:string,prenom:string,age:string,dd:string,df:string,tc:string,ne:string)
    {
        this.cnss=cnss;
        this._nom=nom;
        this._prenom=prenom;
        this._age=age;
        this._date_debut=dd;
        this._date_fin=df;
        this._type_contract=tc;
        this._nbr_enfant=ne;
    }*/
 public get cnss():string {return this._cnss}
 public set cnss(cnss:string){this._cnss=cnss;}
 ///////////////////////////////////////////////
 public get nom():string {return this._nom}
 public set nom(nom:string){this._nom=nom;}
 //////////////////////////////////////////////////
 public get prenom():string {return this._prenom}
 public set prenom(prenom:string){this._prenom=prenom;}
 ///////////////////////////////////////////////
 public get date_debut():string {return this._date_debut}
 public set date_debut(date_debut:string){this._date_debut=date_debut;}
 ///////////////////////////////////////////////
 public get age():string {return this._age}
 public set age(age:string){this._age=age;}
 ////////////////////////////////////////////////
 public get date_fin():string {return this._date_fin}
 public set date_fin(date_fin:string){this._date_fin=date_fin;}
 ///////////////////////////////////////////////
 public get type_contract():string {return this._type_contract}
 public set type_contract(type_contract:string){this._type_contract=type_contract;}
 //////////////////////////////////////////////
 public get nbr_enfant():string {return this._nbr_enfant}
 public set nbr_enfant(nbr_enfant:string){this._nbr_enfant=nbr_enfant;}
  
}