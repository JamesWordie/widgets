import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
  const [term, setTerm] = useState("cars");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // debouncing action to prevent immediate search's
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });

      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  // old useEffect where you get a warning realting to results.length being a missing dependancy

  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       }
  //     });

  //     setResults(data.query.search);
  //   };
  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     const timerId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       };
  //     }, 500);

  //     // this arrow function CLEANUP is called first before it starting running code above
  //     // has to be an arrow function
  //     return () => {
  //       clearTimeout(timerId);
  //     };
  //   };
  // }, [term]);

  const renderedResults = results.map((res) => {
    return (
      <div className="card my-4" key={res.pageid}>
        <div className="card-body">
          <div className="">
            <a href={`https://en.wikipedia.org?curid=${res.pageid}`}
               className="text-success float-end" target='_blank'
               rel="noreferrer">
               <i className="fas fa-link"></i>
            </a>
          </div>
          <h5 className="card-title">
            {res.title}
          </h5>
          <p className="card-text">
        {/*taking a string in from an api and turning into html
          this is an issue due to security breaches XSS attack!! cross site scripting attack*/}
            <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="row justify-content-center">
      <form className="">
        <div className="my-3">
          <input type="text" className="form-control text-muted"
                 placeholder="Enter Your Search..."
                 value={term}
                 onChange={event => setTerm(event.target.value)}
          />
        </div>
      </form>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {renderedResults}
        </div>
      </div>
    </div>
  );
};

export default Search;
