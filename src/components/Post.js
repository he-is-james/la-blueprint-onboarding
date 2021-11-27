import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = function ({ author, body }) {
  return (
    <div className="Tweet">
      <div className="Printer">
        {author}
      </div>
      <div className="Print">
        {body}
      </div>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
