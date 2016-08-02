import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";

class CrLayout extends Component {

  render() {

    return (
      <div className="wrapper" id="wrapper">

        <Telescope.components.HeadTags />

        <Telescope.components.UsersProfileCheck {...this.props} />

        {/*
        <Telescope.components.Header {...this.props}/>
        */}

        <div className="top">

          <div className="header">

            <div>Crater</div>

            <FlashContainer component={Telescope.components.FlashMessages}/>

            <Telescope.components.Newsletter />

          </div>
        </div>

        <div className="main">

            <div className="main-column">
              {this.props.children}
            </div>
            
            <div className="sidebar">
              this is the sidebar
            </div>

        </div>

        <Telescope.components.Footer {...this.props}/>
      
      </div>
    )

  }
}

CrLayout.displayName = "CrLayout";

module.exports = CrLayout;