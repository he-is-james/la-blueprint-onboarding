import React, { useState, useEffect } from 'react';
import Post from './Post';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

const PostsDisplay = function () {
  const [posts, setPosts] = useState([]);
  const [printer, setPrinter] = useState('');
  const [print, setPrint] = useState('');
  const [update, setUpdate] = useState(false);

  const handleSubmit = () => {
    base('Posts').create([
      {
        fields: {
          Body: print,
          Author: printer,
        },
      },
    ], (err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach((record) => {
        console.log(record.getId());
      });
    });
    setPrinter('');
    setPrint('');
    setUpdate(true);
  };

  const getPosts = () => {
    base('Posts').select({ view: 'Grid view' }).all()
      .then((records) => {
        setPosts(records);
        console.log(records);
      });
  };

  useEffect(() => {
    if (posts.length && !update) {
      return;
    }
    getPosts();
  }, [update, posts]);

  return (
    <>
      <div>
        <input type="text" placeholder="Printer" value={printer} onChange={(e) => setPrinter(e.target.value)} />
        <input type="text" placeholder="What's happening" value={print} onChange={(e) => setPrint(e.target.value)} />
        <button type="button" onClick={handleSubmit}>Print</button>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          author={post.fields.Author}
          body={post.fields.Body}
        />
      ))}
    </>
  );
};

export default PostsDisplay;
