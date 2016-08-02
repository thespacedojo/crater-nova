import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";
import CrSidebar from './CrSidebar';

class CrLayout extends Component {

  render() {

    const logoUrl = Telescope.settings.get("logoUrl");
    const siteTitle = Telescope.settings.get("title", "Nova");
    const tagline = Telescope.settings.get("tagline");

    return (
      <div className="wrapper" id="wrapper">

        <Telescope.components.HeadTags />

        <Telescope.components.UsersProfileCheck {...this.props} />

        <div className="top">

          <div className="top-inner">

            <Telescope.components.Header {...this.props}/>

            <Telescope.components.Newsletter />

            <FlashContainer component={Telescope.components.FlashMessages}/>

          </div>

        </div>

        <div className="main">

            <div className="main-column">
              {this.props.children}
            </div>
            
            <CrSidebar/>

        </div>

        <Telescope.components.Footer {...this.props}/>
      
      </div>
    )

  }
}

CrLayout.displayName = "CrLayout";

module.exports = CrLayout;