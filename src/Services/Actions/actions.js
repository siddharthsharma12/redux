import {Add_To_Cart} from "../constants"

export const addToCart = (data) => {
    // console.warn("action",data)
    return{
        data:data,
        type: "Add_To_Cart"
    }
 
}

