export const createIncreatementAction = (data)=>{
    return {
        type: 'increatement',
        data: data
    }
}

export const createDecreatementAction = (data)=>{
    return {
        type: 'decreatement',
        data: data
    }
}

export const createIncreatementAsynAction = (data, time)=>{
    return (dispatch)=>{
        setTimeout(()=>{dispatch(createIncreatementAction(data))},time)
    }   
}
