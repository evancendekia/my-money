import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import {Badge} from 'reactstrap';
// import {Badge} from 'react-bootstrap';
import ReactTable from "react-table";
import withFixedColumns from "react-table-hoc-fixed-columns";
const ReactTableFixedColumns = withFixedColumns(ReactTable);


// import "react-table-hoc-fixed-columns/lib/styles.css";
// import "react-table/react-table.css";

export class BlankPage extends Component {
  render() {

    const columns = [
      {
        Header: "Category",
        accessor: "data1",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150,
        Cell: row => {
          return (<Badge color="primary" className='text-white' pill >{row.value}</Badge>);
        },
      },
      {
        Header: "Value",
        accessor: "data2",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Category",
        accessor: "data3",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Sub Category",
        accessor: "data3",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Budget",
        accessor: "data3",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Note",
        accessor: "data3",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Label",
        accessor: "data3",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Date",
        accessor: "data3",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Time",
        accessor: "data3",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Payment Type",
        accessor: "data3",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Merchant",
        accessor: "data3",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Attachment",
        accessor: "data3",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
    ];

    const data = [
      {
        data1 : 'Expense',
        data2 : 'abc',
        data3 : 'alpha'
      },
      {
        data1 : 'Expense',
        data2 : 'def',
        data3 : 'beta'
      },
      {
        data1 : 'Income',
        data2 : 'ghi',
        data3 : 'gama'
      },
      {
        data1 : 'Transfer',
        data2 : 'ghi',
        data3 : 'gama'
      },
      {
        data1 : 'Expense',
        data2 : 'ghi',
        data3 : 'gama'
      }
    ];
    return (
      <div>
      <div className="page-header">
        <h3 className="page-title"> Records </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Transaction</a></li>
            <li className="breadcrumb-item active" aria-current="page">Records</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        {/* <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Hoverable Table</h4>
              <p className="card-description"> Add className <code>.table-hover</code>
              </p>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Product</th>
                      <th>Sale</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jacob</td>
                      <td>Photoshop</td>
                      <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                      <td><label className="badge badge-danger">Pending</label></td>
                    </tr>
                    <tr>
                      <td>Messsy</td>
                      <td>Flash</td>
                      <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                      <td><label className="badge badge-warning">In progress</label></td>
                    </tr>
                    <tr>
                      <td>John</td>
                      <td>Premier</td>
                      <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                      <td><label className="badge badge-info">Fixed</label></td>
                    </tr>
                    <tr>
                      <td>Peter</td>
                      <td>After effects</td>
                      <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                      <td><label className="badge badge-success">Completed</label></td>
                    </tr>
                    <tr>
                      <td>Dave</td>
                      <td>53275535</td>
                      <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                      <td><label className="badge badge-warning">In progress</label></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card bg-transparent p-0">
            <div className="card-body  p-0" >
              {/* <h4 className="card-title">Striped Table</h4> */}
              {/* <p className="card-description"> Add className <code>.table-striped</code>
              </p> */}
              <ReactTableFixedColumns
                data={data}
                columns={columns}
                pageSize={10}
                showPagination={true}
                // sortable={true}
                style={{fontSize: "0.875rem"}}
                className="-striped -highlight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default BlankPage
