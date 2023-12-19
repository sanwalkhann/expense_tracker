import React , {createContext , useReducer} from "react";
import AppReducer from "./appreducer"

const initialState = {
    transactions: []
}

// function GlobalContext(){
//     createContext(initialState)
// }

// export default GlobalContext;

export const GlobalContext = createContext(initialState)

function GlobalProvider({children}){

    const [state , dispatch ] = useReducer(AppReducer , initialState)

    function deletetransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        });
    }


    function addtransactions(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                deletetransaction,
                addtransactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider