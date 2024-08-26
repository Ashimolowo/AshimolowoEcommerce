// import { createSelector } from "reselect";

// const selectUser = state => state.user;

// //const selectCart = state => state.cart;

// export const selectCurrentUser = createSelector(
//     // [selectUser, selectCart]; instead of using an array u can simply pas them one by one like bellow
//     // selectUser,
//     // selectCart,
//     [selectUser],
//     (user, cart) => {
//       user.currentUser
//     }
    
// ) 


import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => {
         user.currentUser
       }

)