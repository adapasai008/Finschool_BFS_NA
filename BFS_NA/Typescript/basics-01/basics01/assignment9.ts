class Organizer{
    id:number;
    name:string;

  constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }  

    display(){
        console.log(this.id+' '+this.name);
    }
}
class Event1{
    id:number;
    name:string;
    time:number;

    constructor(id:number,name:string,time:number){
        this.id = id;
        this.name = name;
        this.time = time;
    }  

    display(){
        console.log(this.id+' '+this.name+' '+this.time);
    }
}

let organize = new Organizer(25,'Adapa');
organize.display();

let even = new Event1(652,'pop party',23.56);
even.display();