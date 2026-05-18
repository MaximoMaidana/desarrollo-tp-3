import traducciones from './traducciones';

export function traducir(termino) {
    if(!termino) return "";
    const terminoLimpio = termino.toLowerCase();
    return traducciones[terminoLimpio] || termino;
}