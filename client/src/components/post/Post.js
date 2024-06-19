import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const Post = ({ addLike, removeLike, deletePost, auth, post: { _id, text, name, avatar, user, likes, comments, date } }) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {new Date(date).toLocaleDateString()}</p>
        <button onClick={() => addLike(_id)} type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up"></i>{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button onClick={() => removeLike(_id)} type="button" className="btn btn-light">
          <i className="fas fa-thumbs-down"></i>
        </button>
        {!auth.loading && user === auth.user._id && (
          <button onClick={() => deletePost(_id)} type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(Post);
