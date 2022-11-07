function mensajeComer(num){
    console.log("El valor de tu gasto de comercialización es de $" + num);
};
function mensajeAdmin(num){
    console.log("El valor de tu gasto de administración es de $" + num);
};
function mensajeError(){
    console.log("¡Valor invalido!");
};

function tituloCuadro(){
    console.log("Los Gastos del último período son los siguientes:")
}

function mensajeTotalGastos(valor){
    console.log(`El total de tus gastos es de $${valor}`)
};

function mensajeGastosGrandes(valor){
    console.log(`¡Cuidado! Tienes un total de $${valor} en gastos mayores a $10.000`);
};

function mapeoGastos(arr){
    const mapeo = arr.map((el)=> el);
    mapeo.forEach((num)=>{console.log(`Gasto = $${num}`)})
};

function crearCuadroDeGastos(){

    let numGastos = prompt("Ingrese la cantidad de gastos a ordenar:"); 
    
    let tiposGasto = [];
    let valoresGasto = [];

    let listaGastos = [tiposGasto, valoresGasto];

    tituloCuadro();

    for(let i = 1; i <= numGastos; i++){
        listaGastos[0].unshift(prompt("Ingrese el tipo de gasto(comercialización/ administración):"))
        if(listaGastos[0][0] == "comercializacion" || listaGastos[0][0] == "comercialización"){
            listaGastos[1].unshift(parseInt(prompt("Ingrese el valor del gasto:")));
            mensajeComer(listaGastos[1][0]);
        } 
        else if (listaGastos[0][0] == "administracion" || listaGastos[0][0] == "administración"){
            listaGastos[1].unshift(parseInt(prompt("Ingrese el valor del gasto:")));
            mensajeAdmin(listaGastos[1][0]);
        } 
        else {
            mensajeError();
            continue;
        };
    };

    const totalGastos = listaGastos[1].reduce((acc, el)=>acc + el, 0);
    mensajeTotalGastos(totalGastos);

    const gastosGrandes = listaGastos[1].filter((el)=>el > 10000);
    const totalGastosGrandes = gastosGrandes.reduce((acc, el)=> acc + el, 0);
    if(gastosGrandes.length >= 1){
        mensajeGastosGrandes(totalGastosGrandes);
        mapeoGastos(gastosGrandes);
    };
};

function precioProducto(){
    class CalcularPrecio{

        constructor(nombreProducto, precioDeLista, costosFijos, costosVariables, margenDeGanancia){
            this.nombreProducto = nombreProducto;
            this.precioDeLista = parseInt(precioDeLista);
            this.costosFijos = parseInt(costosFijos);
            this.costosVariables = parseInt(costosVariables);
            this.margenDeGanancia = parseFloat(margenDeGanancia);
            this.precio = 0;
        };
    
        calcularPrecio(){
            this.precio = parseInt((this.costosFijos + this.costosVariables + this.precioDeLista) * this.margenDeGanancia);
        }
    };
    
    let nombrePr = prompt("Ingrese el NOMBRE de su producto");
    let prcLista = prompt("Ingrese el PRECIO DE LISTA del producto en pesos($)")
    let costosFij = prompt("Ingrese sus COSTOS FIJOS en pesos($)");
    let costosVar = prompt("Ingrese sus COSTOS VARIABLES en pesos($)");
    let margen = prompt("Ingrese su MARGEN DE GANANCIAS en FLOAT(ej: 1.35)");

    const precioProduct1 = new CalcularPrecio(nombrePr, prcLista, costosFij, costosVar, margen);
    
    precioProduct1.calcularPrecio();

    console.log(`El precio para tu ${precioProduct1.nombreProducto} debe ser de $${precioProduct1.precio}`);
    
};
function calculadora(){
    console.log("CALCULADORA DE PRECIOS:");
    let cantProd = parseInt(prompt("Ingrese la cantidad de productos a calcular su precio"));
    for (i = 0; i <= cantProd; i++){
        precioProducto();
    };
};

crearCuadroDeGastos();
calculadora();