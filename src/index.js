import React from 'react';
import ReactDOM from 'react-dom/client';

const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>Jimmy</td>
      </tr>
      <tr>
        <td>Dougful</td>
      </tr>
    </table>
  );
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(myelement);