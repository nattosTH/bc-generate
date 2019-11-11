import React from 'react';
import QRCode from 'qrcode';
import ReactToPrint from 'react-to-print';
import ToPrint from './ToPrint';

class EqualSplit extends React.Component {
  state = { datas: [] };

  onSubmit = e => {
    e.preventDefault();
    this.splitCal(e.target.elements);
  };

  splitCal = async event => {
    const { lotText, deliveryQty, lotSize } = event;
    const numberToSplit = Math.ceil(deliveryQty.value / lotSize.value);

    let result = [];
    for (let i = 1; i <= numberToSplit; i++) {
      result.push({
        key: i,
        lot: `${lotText.value}-${i}`,
        svg: await QRCode.toDataURL(`${lotText.value}-${i}`, {
          type: 'svg'
        })
      });
    }
    this.setState({ datas: result });
  };

  render() {
    return (
      <div className='row'>
        <h2 className='ui header'>
          <div className='content'>Lot Spliter</div>
        </h2>
        <form className='ui form' onSubmit={this.onSubmit}>
          <div className='field'>
            <label>Lot TEXT:</label>
            <input type='text' name='lotText' placeholder='LOT TEXT' />
          </div>
          <div className='field'>
            <label>Delevery QTY:</label>
            <input type='text' name='deliveryQty' placeholder='Delevery QTY' />
          </div>
          <div className='field'>
            <label>Lot size:</label>
            <input type='text' name='lotSize' placeholder='Lot size' />
          </div>

          <button className='ui button' type='submit'>
            Submit
          </button>
          <div className='row'>
            {this.state.datas.length > 0 ? (
              <div className='row'>
                <ReactToPrint
                  trigger={() => (
                    <button className='ui button' href='#'>
                      Print this out!
                    </button>
                  )}
                  content={() => this.componentRef}
                />
                <div style={{ display: 'none' }}>
                  <ToPrint
                    datas={this.state.datas}
                    ref={el => (this.componentRef = el)}
                  />
                </div>
              </div>
            ) : (
              ' '
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default EqualSplit;
