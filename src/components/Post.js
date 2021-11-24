import React from 'react';
import PropTypes from 'prop-types';

const Post = function ({ author, body }) {
  return (
    <>
      <div>
        Author:
        {' '}
        {author}
      </div>
      <div>
        Body:
        {' '}
        {body}
      </div>
    </>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
