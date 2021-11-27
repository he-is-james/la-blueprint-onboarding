import React, { useState } from 'react';

const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

const CreatePost = function () {
  const [printer, setPrinter] = useState('');
  const [print, setPrint] = useState('');

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
  };

  return (
    <div>
      <input type="text" placeholder="Printer" value={printer} onChange={(e) => setPrinter(e.target.value)} />
      <input type="text" placeholder="What's happening" value={print} onChange={(e) => setPrint(e.target.value)} />
      <button type="button" onClick={handleSubmit}>Print</button>
    </div>
  );
};

export default CreatePost;
