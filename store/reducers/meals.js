import {MEALS} from '../../data/dummy-data'
import { SET_FILTERS, TOGGLE_FAVOURITE } from '../actions/meals';

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[],
}

const mealsReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case TOGGLE_FAVOURITE:
            const existingIndex=state.favouriteMeals.findIndex(meal=>meal.id===action.mealId);
            if(existingIndex>=0){
                const updatedFavMeals=[...state.favouriteMeals]
                updatedFavMeals.splice(existingIndex,1);
                  return {
                      ...state,favouriteMeals:updatedFavMeals
                  }
            }else{
                const meal=state.meals.find(meal=>meal.id===action.mealId)
                    return{
                        ...state,
                        favouriteMeals:state.favouriteMeals.concat(meal)

                    }
            }
    
    case SET_FILTERS:
        const appliedFilters=action.filteredMeals;
        const updatedFilteredMeals=state.meals.filter(meal=>{
            if(appliedFilters.glutenFree && !meal.isGlutenfree){
                return false;
            }
            if(appliedFilters.lactoseFree && !meal.isLactosefree){
                return false;
            }
            if(appliedFilters.vegetarian && !meal.isVegeterian){
                return false;
            }
            if(appliedFilters.vegan && !meal.isVegan){
                return false;
            }
            return true
        })
        return {...state,filteredMeals:updatedFilteredMeals}
            default:
        return state;
    }
   
}
export default mealsReducer;