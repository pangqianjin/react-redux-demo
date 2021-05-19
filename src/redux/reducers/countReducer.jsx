const initState = 0
export default function countReducer(preState=initState, action){
    const {type, data} = action
    switch(type){
        case 'increatement':
            return preState+data
        case 'decreatement':
            return preState-data
        case 'increatementAsyn':
            return preState+data
        default:
            return preState
    }
}