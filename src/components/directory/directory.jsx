import React, { Component } from 'react';
import "./directory.scss";
import MenuItem from '../menu-items/menu-items.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';


const Directory = ({ sections }) => {
  return ( 
      <div className="directory-menu">
          {sections.map(({id, ...otherSectionProps})=> 
          <MenuItem key={id} {...otherSectionProps}/>)}
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
