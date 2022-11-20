interface animal{
    clase:string;
    patas:number;
    pelo:boolean
}
(function() { 
    console.log('Hola mundo!!!!!');
    console.log('Saludos a todos');
    const animal:animal= {
        clase: 'Perro',
        patas: 4,
        pelo: true
    };

    const animales:String[]= ["gato", "perro", "perico"];
    const animalesObj:animal[] = [
        {
            clase: 'Perro',
            patas: 4,
            pelo: true
        },
        {
            clase: 'gato',
            patas: 4,
            pelo: true
        },
        {
            clase: 'serpiente',
            patas: 0,
            pelo: false
        }   
    ];

    console.log(animal);
    console.log(animales);
    console.log(animalesObj);

    function presetarAnimal():void {
        console.log(animal);
    }

    function presetarAnimales(animalesArray:animal[], parametro2:number):number {
        console.log(animalesArray);
        return parametro2;
    }

    presetarAnimal();
    console.log(presetarAnimales(animalesObj, 0)); 
    
    console.log(presetarAnimales(animalesObj, 2));

})();
