import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { truncateText } from '../Utils/constant';

const ApiDataTable = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.apis.guru/v2/list.json');
        const data = Object.entries(response.data).map(([key, value]) => ({
          name: key,
          ...value
        })).slice(0,100);
        setApiData(data);
      } catch (error) {
        console.error('Error In fetching API data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <table className="api-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Preferred Version</th>
            <th>Title</th>
            <th>Description</th>
            <th>Contact Email</th>
            <th>Contact Name</th>
            <th>Provider Name</th>
            <th>Logo</th>
            <th>Swagger URL</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map(api => (
            <tr key={api.name}>
              <td>{truncateText(api.name, 20)}</td>
              <td>{api.preferred}</td>
              <td title={api.versions[api.preferred]?.info.title}>{api.versions[api.preferred]?.info.title}</td>
              <td className="truncate" title={api.versions[api.preferred]?.info.description}>{truncateText(api.versions[api.preferred]?.info.description, 50)}</td>
              <td>{api.versions[api.preferred]?.info.contact?.email || "Not Exist"}</td>
              <td>{truncateText(api.versions[api.preferred]?.info.contact?.name, 20) || "Not Exist"}</td>
              <td>{api.versions[api.preferred]?.info['x-providerName']}</td>
              <td>
                {<img src={api.versions[api.preferred]?.info['x-logo'].url} alt="Logo" style={{ height: 50 }}/> || "not exist"}
              </td>
              <td>
                <a
                  href={api.versions[api.preferred]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Swagger Docs
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default ApiDataTable;
