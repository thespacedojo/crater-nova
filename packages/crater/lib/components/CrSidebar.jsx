import Telescope from 'meteor/nova:lib';
import React from 'react';
import { ListContainer } from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";
import CrPodcast from './CrPodcast.jsx';
import CrCategoriesList from './CrCategoriesList.jsx';

const CrSidebar = () => {
  
  return (
    <div className="sidebar">

      <CrPodcast/>

      <Telescope.components.SearchForm/>

      <ListContainer 
        collection={Categories} 
        limit={0} 
        resultsPropName="categories" 
        component={CrCategoriesList}
        listId="categories"
      />    
      </div>
  )
}

CrSidebar.displayName = "CrSidebar";

module.exports = CrSidebar;
