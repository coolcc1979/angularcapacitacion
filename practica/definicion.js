(function () {
    console.log('Hola mundo!!!!!');
    console.log('Saludos a todos');
    var animal = {
        clase: 'Perro',
        patas: 4,
        pelo: true
    };
    var animales = ["gato", "perro", "perico"];
    var animalesObj = [
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
    function presetarAnimal() {
        console.log(animal);
    }
    function presetarAnimales(animalesArray, parametro2) {
        console.log(animalesArray);
        return parametro2;
    }
    presetarAnimal();
    console.log(presetarAnimales(animalesObj, 0));
    console.log(presetarAnimales(animalesObj, 2));
})();
