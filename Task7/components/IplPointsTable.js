'use client'
import './IplPointsTable.module.css'
import { useEffect, useState } from 'react';

const IplPointsTable = () => {
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Sort data by NRR (Net Run Rate) in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setPointsData(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPointsData();
  }, []);

  return (
    <div className="ipl-points-table">
      <h2>IPL Season 2022 Points Table</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {pointsData.map((team, index) => (
            <tr key={index}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IplPointsTable;
