var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
  case 'acuario':
    console.log('Intente aislarse del mundo y sentarse en soledad a reflexionar sobre ciertas cuestiones de su vida que últimamente no lo dejan progresar de la manera que anhela.')
    break
  case 'piscis':
    console.log('Sepa que de ahora en más, su futuro solo dependerá de usted solo. Entienda que ya está capacitado para tomar sus propias decisiones y realizar los planes deseados.')
    break
  case 'cancer':
  case 'cáncer':
    console.log('Dentro su cabeza le surgirán ideas extraordinarias, sobre todo si se dedica a actividades creativas donde pueda ponerlas en práctica.')
    break
  case 'aries':
    console.log('Deje de preocuparse más de lo necesario, ya que podría sufrir una crisis de estrés. Ese problema que lo tiene inquieto, se resolverá de la manera menos esperada.')
    break
  case 'tauro':
    console.log('Se sentirá agobiado por sus responsabilidades, déjese ayudar por la gente que lo quiere. Procure aceptar los consejos y recapacitar sobre los errores cometidos.')
    break
  case 'geminis':
  case 'géminis':
    console.log('Sepa que en pocos días recuperará su armonía mental. De esta forma, podrá llevar a cabo todos los proyectos que tiene en mente con claridad y constancia.')
    break
  case 'leo':
    console.log('Intente hacer lo posible para superar los miedos que lo agobian cada vez que debe tomar una decisión importante en su vida. Relájese.')
    break
  case 'virgo':
    console.log('Esté atento a los asuntos familiares que tiene pendientes hace días. Sepa que la Luna en su signo le permitirá lograr todo lo que se proponga en el día.')
    break
  case 'libra':
    console.log('Tenderá a ofenderse por todo y considerar enemigas a todas las personas que lo estiman de verdad, ya que estará muy vulnerable a las críticas en el día de hoy.')
    break
  case 'escorpio':
    console.log('Aprenda que todo cambio en la vida siempre es muy constructivo. Momento óptimo para hacer un alto en su vida y ver desde otro punto de vista las cosas.')
    break
  case 'sagitario':
    console.log('Debe tener presente que quienes no comparten sus ideas o decisiones, no siempre son necesariamente sus enemigos. Respete las opiniones de los demás.')
    break
  case 'capricornio':
    console.log('Si pretende sentirse más feliz, use aquello que ha aprendido a lo largo de su vida. Pronto mejorarán las condiciones actuales que lo agobian a diario.')
    break
  default:
    console.log('No es un signo zodiacal válido')
    break
}


// Objeto que guarda los horoscopos, se imprimen los horoscopos no importando como se escriba May/Min
const horoscopos = {
    aries: '21 marzo - 19 abril',
    tauro: '20 abril - 20 mayo',
    geminis: '21 mayo - 20 junio',
    cancer: '21 junio - 22 julio',
    leo: '23 julio - 22 agosto',
    virgo: '23 agosto - 22 septiembre',
    libra:'23 septiembre - 22 octubre',
    escorpion: '23 octubre - 21 noviembre',
    sagitario: '22 noviembre - 21 diciembre',
    capricornio: '22 diciember - 19 enero',
    acuario: '20 enero - 18 febrero',
    piscis: '19 febrero - 20 marzo'
};

// Evalua el signo y regresa el horóscopo
const calcularSigno = function(signo){
    switch(signo.toLowerCase()){
        case'aries':
            console.log(horoscopos.aries);
            break;
        case'tauro':
            console.log(horoscopos.tauro);
            break;
        case'geminis':
        case'géminis':
            console.log(horoscopos.geminis);
            break;
        case'cancer':
        case'cáncer':
            console.log(horoscopos.cancer);
            break;
        case'leo':
            console.log(horoscopos.leo);
            break;
        case'virgo':
            console.log(horoscopos.virgo);
            break;
        case'libra':
            console.log(horoscopos.libra);
            break;
        case'escorpion':
        case'escorpión':
            console.log(horoscopos.escorpion);
            break;
        case'sagitario':
            console.log(horoscopos.sagitario);
            break;
        case'capricornio':
            console.log(horoscopos.capricornio);
            break;
        case'acuario':
            console.log(horoscopos.acuario);
            break;
        case'piscis':
            console.log(horoscopos.piscis);
            break;
        default:
            console.log('Ese signo no existe');
            break;
    }
};

// Arrow function que sirve para seguir preguntando el signo que quieres ver hasta que se escriba la palabra "salir"
var preguntarSigno = () => signoZodiacal = prompt('¿Cuál es tu signo? escribe salir para que no vuelva a preguntar.');

// Asigna valor a la variable signoZodiacal para entrar al while
preguntarSigno();

// Se ejecuta mientras el usuario no escriba la palabra "salir"
while(signoZodiacal.toLowerCase() !== 'salir'){
    calcularSigno(signoZodiacal);
    preguntarSigno();
}
