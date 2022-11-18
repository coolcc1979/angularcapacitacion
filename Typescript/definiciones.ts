(function() { 
    console.log('Hola mundo!!!!!');
    console.log('Saludos a todos');


    
    const animal = {
        clase: 'Perro',
        patas: 4,
        pelo: true
    };

    const animales = ["gato", "perro", "perico"];
    const animalesObj = [
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

   /* function presentarAnimal() {
        console.log(animal);
    }

    function presetarAnimales(animalesArray:Object[], parametro2:number) {
        console.log(animalesArray);
        return parametro2;
    }

    presentarAnimal();
    console.log(presetarAnimales(animalesObj, 0)); 
    */

})();