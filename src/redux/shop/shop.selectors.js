import { createSelector } from "reselect";

// Selector to get the shop state
const selectShop = state => state.shop;

// Selector to get all collections
export const selectCollections = createSelector( 
    [selectShop],
    shop => shop.collections
);
 
//
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

// Selector to get a specific collection based on the URL parameter
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
        );

