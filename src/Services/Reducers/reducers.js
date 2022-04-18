import {Add_To_Cart} from "../constants"

const initialState = {
    cardData:[]
}

export default function cardItems (state=[],actions) {
  switch (actions.type){
      case "Add_To_Cart":
        //   console.log("reducer",actions)
      return [
      ...state,
     { cardData:actions.data}
    ]
     break;
     default: 
     return state
  }
}