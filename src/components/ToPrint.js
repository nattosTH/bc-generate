import React from 'react';

class ToPrint extends React.Component {
  render() {
    return (
      <table className='ui fixed table'>
        <thead>
          <th>Key1</th>
          <th>Lot No</th>
          <th>QR CODE</th>
        </thead>
        <tbody>
          {this.props.datas.map(data => (
            <tr key={data.key}>
              <td>{data.key}</td>
              <td>{data.lot}</td>
              <td>
                <img src={data.svg}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ToPrint;
