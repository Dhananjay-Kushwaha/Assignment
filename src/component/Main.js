import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/main.css';
import Toplevelcomponent from './Toplevelcomponent';
import Card from './Card';
import { BsThreeDots } from 'react-icons/bs';

function Main() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setApiData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error during API call:', error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const uniqueStatusValues = new Set();

  const renderedComponents = apiData?.tickets.map((item) => {
    if (!uniqueStatusValues.has(item.status)) {
      uniqueStatusValues.add(item.status);

      return (
        <div key={item.id}>
          <Toplevelcomponent data={item.status} len={item.status.length} />
          <div className="grid-item">
            <Card data={item.id} />
            <p>{item.title}</p>
            <br />
            <div className='req'>
              <BsThreeDots className='ico' />
              <p className='ptag'>{item.tag[0]}</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  });

  return (
    <div className="grid-container">
      {renderedComponents}
      <div>
        <Toplevelcomponent data="Cancelled" len="0" />
      </div>
      <div>
        <Toplevelcomponent data="Done" len="0" />
      </div>
    </div>
  );
}

export default Main;
