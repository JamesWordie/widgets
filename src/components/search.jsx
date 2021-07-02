import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState("");

  console.log(term)

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
