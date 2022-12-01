var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id + ' ' + this.name);
    };
    return Organizer;
}());
var Event1 = /** @class */ (function () {
    function Event1(id, name, time) {
        this.id = id;
        this.name = name;
        this.time = time;
    }
    Event1.prototype.display = function () {
        console.log(this.id + ' ' + this.name + ' ' + this.time);
    };
    return Event1;
}());
var organize = new Organizer(25, 'Adapa');
organize.display();
var even = new Event1(652, 'pop party', 23.56);
even.display();
