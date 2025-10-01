export interface Product {
    image : string; // (requerido)
    title : string; // (requerido)
    description? : string; //(no es requerido)
    price : number;
    categories? : string;
    isAvailable? : boolean;
    date? : Date;
}
