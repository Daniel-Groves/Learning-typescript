type Address = {
        postcode: string; //mandatory or non-nullable
        address_one: string;
        address_two : string;
        city: string;
        door_number?: number; //nullable
};


type PersonType = {
    firstname: string;
    lastname:string;
    age: number;
    address : Address;
};

type StudentType = PersonType & {
    classes: string[]
};

type SoftwareEngineer = PersonType & {
    bugsFixed: number
};

// object
const person_one: PersonType = {
    firstname: "Rossano",
    lastname: "D'Angelo",
    age: 19,
    address: {
        address_one: "1",
        address_two: "2",
        postcode: "M11111",
        door_number: 1,
        city: "Manchester"
    },
};

interface Point {
    x: number;
    y: number;
    getX(): number;
    getY(): number; //getters
    resetX(): void; // doesn't return anything
    resetY(): void;
    sumOfXY(): number;
};

interface ThreeDPoint {
    z: number;
    getZ(): number; //getters
    resetZ(): void;
};

class MyPoint implements Point {
    x : number = 0;
    y : number = 0;

    constructor (x: number, y:number) {
        this.x = x;
        this.y = y;
    }


    getX () {
        return this.x;
    }

    getY () {
        return this.y;
    }

    resetX() {
        this.x = 0;
    }

    resetY() {
        this.y = 0;
    }

    sumOfXY() {
        return this.x + this.y
    }
};

const magicNumber = 3;

const magicWord = magicNumber === 3 ? "three" : "dunno";

console.log(magicWord);

const printMyName = () => {
    return "rossano";
}

const doSomething = (handle_success: Function, handle_error: Function) => {
    if ('' == null) {
        handle_error();
    }

    handle_success();
}

const return_error = () => {
    return "error";
}

const return_ok = () => {
    return "OK";
}


console.log(doSomething(return_ok, return_error))