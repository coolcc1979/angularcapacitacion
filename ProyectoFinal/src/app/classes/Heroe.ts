import { uid } from 'uid';

export class Heroe{
    
    id: string = uid();
    imagen: string = "";
    nombre: string = "";
    comics: string[] = [];
    series: string[] = [];
    stories: string[] = [];
}