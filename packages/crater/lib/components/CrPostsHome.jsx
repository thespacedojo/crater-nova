import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { ListContainer, DocumentContainer } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";
import { ModalTrigger } from 'meteor/nova:core';
import { Button } from 'react-bootstrap';

class CrPostsHome extends Component {

  getDefaultView() {
    return {view: 'top'}
  }
  
  renderIntro() {
    
    const button = <Button className="posts-home-intro-button" bsStyle="primary">Sign Up</Button>;

    return (
      <div className="posts-home-intro">
        <h2 className="posts-home-intro-tagline">
        Crater.io: the latest programming news lands here first!
        </h2>
        <ModalTrigger title="Sign Up/Log In" size="small" component={button}>
          <Telescope.components.UsersAccountForm />
        </ModalTrigger>
      </div>
    )
  }

  render() {

    const params = {...this.getDefaultView(), ...this.props.location.query, listId: "posts.list.main"};
    const {selector, options} = Posts.parameters.get(params);

    return (
      <div className="posts-home">
        {this.context.currentUser ? null : this.renderIntro()}
        <ListContainer 
          collection={Posts} 
          publication="posts.list"
          selector={selector}
          options={options}
          terms={params} 
          joins={Posts.getJoins()}
          component={Telescope.components.PostsList}
          componentProps={{showHeader: false}}
          cacheSubscription={true}
          listId={params.listId}
          limit={Telescope.settings.get("postsPerPage", 10)}
        />
      </div>
    )
  }
};

CrPostsHome.contextTypes = {
  currentUser: React.PropTypes.object,
}

module.exports = CrPostsHome;