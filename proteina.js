
const pollo=()=>{
    document.getElementById("proteina").src='./imgenes/proteina/pollo.png';
    document.getElementById("guarnicion").style.display='block'
    document.getElementById("desc-proteina").innerHTML='Pollo a la plancha previamente marinado en jugo de limon oregano y ajo.'
}
const bife=()=>{
    document.getElementById("proteina").src='./imgenes/proteina/bife.png';
    document.getElementById("guarnicion").style.display='block'
    document.getElementById("desc-proteina").innerHTML='Bife de carne magra a la plancha con ajo.'
}
const milanesa=()=>{
    document.getElementById("proteina").src='./imgenes/proteina/milanesa.png';
    document.getElementById("guarnicion").style.display='block'
    document.getElementById("desc-proteina").innerHTML='Milanesa de pollo o de carne rebozada con pan rallado y mix de semillas al horno'
}
const atun=()=>{
    document.getElementById("proteina").src='./imgenes/proteina/atun.png';
    document.getElementById("verdura").src='./imgenes/ensaladas/atun.png';
    document.getElementById("guarnicion").style.display='none'
    document.getElementById("salteado").style.display='none'
    document.getElementById("ensalada").style.display='none'
    document.getElementById("pure").style.display='none'
    document.getElementById("opciones").innerHTML=''
    document.getElementById("desc-proteina").innerHTML='Ensalada de atún o caballa con cebollita de verdeo, repollo, tomate y algo mas...'
    document.getElementById("desc-guarnicion").innerHTML=''
}
const soja=()=>{
    document.getElementById("proteina").src='./imgenes/almidon/soja.png';
    document.getElementById("guarnicion").style.display='block'
    document.getElementById("desc-proteina").innerHTML='Milanesa de soja.'
}
const empanadas=()=>{
    document.getElementById("proteina").src='./imgenes/almidon/empanada.png';
    document.getElementById("guarnicion").style.display='block'
    document.getElementById("desc-proteina").innerHTML='Empandas de verduras o carne.'
}

const pizza=()=>{
    document.getElementById("proteina").src='./imgenes/almidon/pizza.png';
    document.getElementById("guarnicion").style.display='block'
    document.getElementById("desc-proteina").innerHTML='Pizza de masa integral.'
}
const tarta=()=>{
    document.getElementById("proteina").src='./imgenes/almidon/tarta.png';
    document.getElementById("guarnicion").style.display='block'
    document.getElementById("desc-proteina").innerHTML='Tarta de vegetales con masa integral.'
}

const salteado=()=>{
    document.getElementById("salteado").style.display='inline-flex'
    document.getElementById("ensalada").style.display='none'
    document.getElementById("pure").style.display='none'
    document.getElementById("opciones").innerHTML='Te hago algunas sugerencias'
}
const zapallitos=()=>{
    document.getElementById("verdura").src='./imgenes/salteados/zapallitos.png';
    document.getElementById("desc-guarnicion").innerHTML='Salteado de zapallitos rallados o trozados con cebolla, zanahoria y ajo.'
}
const champis=()=>{
    document.getElementById("verdura").src='./imgenes/salteados/champis.png';
    document.getElementById("desc-guarnicion").innerHTML='Salteado de champignones con cebolla, zanahoria, zucchini y ajo.'
}
const mix=()=>{
    document.getElementById("verdura").src='./imgenes/salteados/mix.png';
    document.getElementById("desc-guarnicion").innerHTML='Mix de verduras al vapor con semillas (remolacha, coliflor, brocoli y calabaza).'
}
const gril=()=>{
    document.getElementById("verdura").src='./imgenes/salteados/grilladas.png';
    document.getElementById("desc-guarnicion").innerHTML='Mix de verduras al horno o grilladas(calabaza, brocoli, ajo, cebolla, pimiento).'
}
const ensalada=()=>{
    document.getElementById("ensalada").style.display='inline-flex'
    document.getElementById("salteado").style.display='none'
    document.getElementById("pure").style.display='none'
    document.getElementById("opciones").innerHTML='Tengo algunas sugerencias'
}
const repollo=()=>{
    document.getElementById("verdura").src='./imgenes/ensaladas/repollo.png';
    document.getElementById("desc-guarnicion").innerHTML='Ensalada de repollo, palta y tomate'
}
const remolacha=()=>{
    document.getElementById("verdura").src='./imgenes/ensaladas/remolacha.png';
    document.getElementById("desc-guarnicion").innerHTML='Ensalada de remolacha, tomate y zanahoria'
}
const brocoli=()=>{
    document.getElementById("verdura").src='./imgenes/ensaladas/brocoli.png';
    document.getElementById("desc-guarnicion").innerHTML='Ensalada de brocoli, repollo y tomate'
}
const zanahoria=()=>{
    document.getElementById("verdura").src='./imgenes/ensaladas/zanahoria.png';
    document.getElementById("desc-guarnicion").innerHTML='Ensalada de zanahoria, repollo y tomate cherry'
}
const pure=()=>{
    document.getElementById("salteado").style.display='none'
    document.getElementById("ensalada").style.display='none'
    document.getElementById("pure").style.display='inline-flex'
    document.getElementById("opciones").innerHTML='Tengo algunas sugerencias'
}
const calabaza=()=>{
    document.getElementById("verdura").src='./imgenes/salteados/calabaza.png';
}
const calabazaybrocoli=()=>{
    document.getElementById("verdura").src='./imgenes/salteados/brocoli.png';
}