import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Search = () => {

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [searchData, setSearchData] = useState('');
  const apiKey = 'KAF236EQNXXTJSIE';
  const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchQuery}&apikey=${apiKey}`;
  async function fetchQuery() {

    let response = await axios(apiUrl);
    let val = await response.data;
    setSearchData(val);
  }

  useEffect(() => {

    fetchQuery();
  }, [])

  return (
    <div>

      <div>
        {searchData && searchData['Global Quote'] && (


          <div class="card my-3" style={{ width: "18rem",marginLeft:'34px' }}>
            <div class="card-body">
              <h5 class="card-title">{searchData['Global Quote']['01. symbol']}</h5>


              <p>Open: {searchData['Global Quote']['02. open']}$</p>
              <p>High: {searchData['Global Quote']['03. high']}$</p>
              <p>Low: {searchData['Global Quote']['04. low']}$</p>
              <p>Price: {searchData['Global Quote']['05. price']}$</p>
              <button type="button" class="btn btn-primary btn-sm" style={{marginLeft:'12px'}}$>Buy Now</button>
              <button type="button" class="btn btn-primary btn-sm" style={{marginLeft:'12px'}}$>Read News</button>
            </div>
          </div>


        )}

      </div>
    </div>
  )
}

export default Search