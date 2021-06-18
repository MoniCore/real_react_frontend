import React from 'react';
import { Table } from 'reactstrap';
import '../index.css';

import EditItemModal from './ExistingStocksModals/EditItemModal';
import OrderStockModal from './ExistingStocksModals/OrderStockModal';
import StopSellingModal from './ExistingStocksModals/StopSellingModal';


export default class ExistingStocks extends React.Component {
  render() {
    return (
      <div>
        <p id="list-name">Existing Stock</p>
        <div id="business-table-container">
          <Table className="mb-0" bordered>
            <thead className="tablehead">
              <tr>
                <th>Stock Items</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="faction-tablebody">
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr><tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row"></td>
                <td scope="row" id="fontawesome-container">
                  <EditItemModal />
                  <OrderStockModal />
                  <StopSellingModal />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
