import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsList extends Component {
  renderPost(post) {
    return (
      <li className="list-group-item" key={post.id}>
        <Link to={`posts/${post.id}`}>
          {post.title}
        </Link>
      </li>
    );
  }
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {_.map(this.props.posts, this.renderPost)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);