import React, { PropTypes, Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router';

class CrCategoriesList extends Component {

  renderCategory(category) {
    return (
      <Link className="posts-category" key={category._id} to={{pathname: "/", query: {cat: category.slug}}} activeClassName="posts-category-active">{category.name}</Link>
    )
  }

  render() {
    
    const categories = this.props.categories;
    const context = this.context;
    const currentQuery = _.clone(this.props.router.location.query);
    delete currentQuery.cat;
    
    return (
      <div className="categories-list posts-categories">
        <Link className="posts-category" to={{pathname: "/", query: {currentQuery}}}>All Categories</Link>
        {categories.map(this.renderCategory)}
      </div>
    )

  }
};

CrCategoriesList.propTypes = {
  categories: React.PropTypes.array
}

module.exports = withRouter(CrCategoriesList);
export default withRouter(CrCategoriesList);