/**
 *  Funcion que permite conseguir una carta del deck.
 * @param {Array<string>} deck 
 * @returns {String} retorna carta
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}