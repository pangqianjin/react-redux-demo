
const intiState = []
export default function personReducer(preState=intiState, action){
    const {type, data} = action
    switch(type){
        case 'addPerson':
            return [data, ...preState]
        default:
            return preState
    }

}