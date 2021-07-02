import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
    };

    search();

  }, [term]);

  return (
    <div>
      <form>
        <div className="my-3">
          <input type="text" className="form-control"
                 placeholder="Enter Your Search..."
                 value={term}
                 onChange={event => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
