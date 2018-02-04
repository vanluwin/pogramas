const redux = require('redux');

// CONTADOR 

// Reducers
function contador(state = 0, action) {
    switch(action.type){
        case 'INCREMENTO':
            return state + 1;
        
        case 'DECREMENTO':
            return state - 1;
        
        case 'ZERAR_CONTADOR':
            return 0;
        
        default:
            return state;
    }
}

// Store
let store = redux.createStore( contador );

// Recuperar estado
console.log( store.getState() );
 
store.dispatch({ type: 'INCREMENTO' });
store.dispatch({ type: 'INCREMENTO' });
console.log( store.getState() );

store.dispatch({ type: 'DECREMENTO' });
console.log( store.getState() );

store.dispatch({ type: 'ZERAR_CONTADOR' });
console.log( store.getState() );
