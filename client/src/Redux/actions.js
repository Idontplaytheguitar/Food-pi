export function setCards(payload){
    return {
        type: 'SET_CARDS',
        payload: {...payload}
        
        }
    };

export function setLoading(siONo){
    return {
        type: 'SET_LOADING',
        payload: siONo
    }
}
