export const initState = {
    data:[],
    loading:true
}

export const reducer = (state,action)=>{
    if(action.type=="ADD_DATA"){
        return {
            ...state,
            data:action.payload
        }
    }
    if(action.type=="SELECT_LOADING"){
        return {
            ...state,
            loading:action.payload
        }
    }
    
    return state
}