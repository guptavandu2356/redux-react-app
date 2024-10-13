// actions - trigger a state change
// create action creators
// dispatch actions 

export const increment = () => {
    return {
        type : 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type : 'DECREMENT'
    };
};