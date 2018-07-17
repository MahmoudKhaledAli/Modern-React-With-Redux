import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  onDeleteClick(event) {
    this.props.deletePost(this.props.match.params.id, () => this.props.history.push('/'));
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  
  render() {
    const { post } = this.props;
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);