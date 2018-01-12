/*  Reselect Selector:
    Takes a list of available resources AND Ids of all alterady filtered and then spits out a new list
 */

import { createSelector } from 'reselect';

// Create filtering Option from piece of state we care about

const filterResources = state => state.resources;

console.log(filterResources());

const getResources = (filterResources, filteredResources) => {

};