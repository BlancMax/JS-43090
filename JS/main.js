let ingreso = false;
function ingresar (ingreso){
let claveGuardada = "1985";
for(let i=2; i>=0; i--){
    let ingresoClave=prompt("Ingrese su clave. Tenés " + (i+1) + " oportunidades");
    if (ingresoClave===claveGuardada){
        alert("Bienvenido a Compendios del Infinito, ya podes elegir tus gustos!!");
        ingreso=true;
        break;
    }else{
        alert("Error, ingresa una opción valida");
    }
}
if (ingreso){
    let stockComics=20;
    let stockMiniaturas=20;
    let stockJuegos=20;
    let opcion=prompt("Elegí una opción: \n1- Comics. \n2 - Miniaturas. \n3 - Juegos. \nPresiona X para salir de tu cuenta.");
    while (opcion !="X"){
        switch (opcion){
            case "1":
                let compraComics=parseInt(prompt("Ingresa la cantidad de Comics que deseas..."));
                alert("Compra exitosa, elegiste " + compraComics);
                console.log(stockComics-compraComics);
            break;
            case "2":
                let compraMiniaturas=parseInt(prompt("Ingresa la cantidad de Miniaturas que deseas..."));
                alert("Compra exitosa, elegiste " + compraMiniaturas);
                console.log(stockMiniaturas-compraMiniaturas);
            break;
            case "3":
                let compraJuegos=parseInt(prompt("Ingresa la cantidad de Juegos que deseas..."));
                alert("Compra exitosa, elegiste " + compraJuegos);
                console.log(stockJuegos-compraJuegos);
            break;
            default:
                alert ("Opción no valida");
            break   
        }
        opcion=prompt("Elegí una opción: \n1- Comics. \n2 - Miniaturas. \n3 - Juegos. \nPresiona X para salir de tu cuenta.");
    }

}else{
    alert("No podes ingresar hasta que podamos validar tu identidad");
}

alert("Gracias por elegirnos! Te esperamos pronto con novedades...");
}
ingresar ();

