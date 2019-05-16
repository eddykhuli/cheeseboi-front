import { Category } from './category';

export class Brand {
  
    private id: Number;
    private name: string;
    private image:string;
    private categories:Category[];

    getId(id: any): any {
        return id
      }
}
