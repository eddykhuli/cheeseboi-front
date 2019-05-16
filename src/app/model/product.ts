import { ProdColours } from './prodColours';
import { ProdSize } from './prodSize';
import { Image } from './image';

export class Product {
    public id:number;
    public name:string;
    public description:string;
    public brandId:number;
    public price:number;
    public category:string;
    public sizes:ProdSize[];
    public colours:ProdColours [];
    public images:Image [] ;
}