
export default function testReducer(state={}, action) {
    switch (action.type) {
        case 'test':
            return Object.assign({},state);
        default:
            return state;
    }
}