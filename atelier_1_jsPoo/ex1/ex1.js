    //Q1
        function Voiture (model,marque,annee,type,carburant){
            this.model=model;
            this.marque=marque;
            this.annee=annee;
            this.type=type;
            this.carburant=carburant;
        }

    //Q2  
        let listVoitures = [];
    //Q3
    function Hyundai(serie,hybride, model, marque, année, type, carburant){
        Voiture.call(this, model, marque, année, type, carburant);
        this.serie=serie;
        this.hybride=hybride;
    }
    Hyundai.prototype.alarmer=()=>{
        console.log("alarme");
    }
    function Ford (option, model, marque, année, type, carburant) {
        Voiture.call(this, model, marque, année, type, carburant);
        this.option=option;
    }

    //remplissage de la liste (pour l'affichage)
   listVoitures.push(new Hyundai("i10",false,2022,"hyundai",2022,"petite",false));
   listVoitures.push(new Hyundai("i20",false,2022,"hyundai",2021,"compacte",false));
    let a = ["clima","ecran tactile","gps","camera"];
   listVoitures.push(new Ford(a,"fiesta","ford",2023,"compacte",false));

    //Q4
    listVoitures.sort((a, b) => {
        return a.annee - b.annee;
    });
    listVoitures.forEach(element => {
        console.log(element);    
    });
    