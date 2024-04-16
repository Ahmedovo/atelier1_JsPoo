//Q1 
class Vecteur2D {
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
}
//Q2
let v1= new Vecteur2D();
let v2  = new Vecteur2D(1,1);
console.log(v1);
console.log(v2);

//Q3
Vecteur2D.prototype.affiche= function(){
    console.log("x=" + this.x +" y="+this.y);
}
Vecteur2D.prototype.addition=function (a,b){
    return new Vecteur2D(this.x+a,this.y+b);
}

//Q4 
let v3= new Vecteur2D(2,2);
let v4  = new Vecteur2D(1,1);
v3.affiche();
v4.affiche();
        //l'addition de v3 et v4  est l'affichage de leur somme 
let v5 = v3.addition(v4.x,v4.y) ;
v5.affiche();
 
        //class Rectangle
class Rectangle {
    constructor(largeur=0,longueur=0,nom="rectangle"){
        this.largeur=largeur;
        this.longueur=longueur;
        this.nom=nom;
    }
    affichage (){
        console.log("Nom : "+this.nom+"Lar = "+ this.largeur + " long = "+ this.longueur);
    }
    surface(){
        return this.largeur*this.longueur;
    }
}
//class Carre
class Carre extends Rectangle {
    constructor(cote = 0) {
        super(cote, cote);
        this.nom = "carré";
    }
}
const carre = new Carre(5);
carre.affichage();
console.log("Surface du carré :", carre.surface());

//class Point
class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

const point = new Point();
console.log("Point par défaut :", point);

//class Segment
class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

const segment = new Segment(1, 2, 4, 5);
console.log("Segment :", segment);