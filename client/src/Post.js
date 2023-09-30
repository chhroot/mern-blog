import React from 'react';

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1601469961.jpg?w=730&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Cisco to acquire Splunk in $28B mega deal</h2>
        <p className="info">
          <a className="author">Amruth Kiran</a>
          <time>2023-01-06 23:45</time>
        </p>
        <p className="summary">
          Cisco has a reputation of building the company through acquisitions,
          but it has tended to stay away from the really huge ones. That changed
          this morning when the company announced it was acquiring Splunk for
          $28 billion.
        </p>
      </div>
    </div>
  );
};

export default Post;
