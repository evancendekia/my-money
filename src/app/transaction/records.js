import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import {Badge} from 'reactstrap';
import * as generalHelper from "../../helper/general"

// import {Badge} from 'react-bootstrap';
import ReactTable from "react-table";
import withFixedColumns from "react-table-hoc-fixed-columns";
import { BackgroundTokenizer } from 'brace';
const ReactTableFixedColumns = withFixedColumns(ReactTable);


// import "react-table-hoc-fixed-columns/lib/styles.css";
// import "react-table/react-table.css";

export class BlankPage extends Component {
  render() {
    const dataTransaction = [
      {
        id : 1,
        title : "Income",
        color : "#a3dc6c" 
      },{
        id : 2,
        title : "Expense",
        color : "#f76775" 
      },{
        id : 3,
        title : "Transfer",
        color : "#63c3ff" 
      }
      
    ]
    const dataCategory = [
      {
        id : 1,
        title : "Food & Drinks",
        color : "#d62b2b" 
      },{
        id : 2,
        title : "Shopping",
        color : "#5ac0ff" 
      }
    ]
    const a = dataCategory.filter(opt => opt.id === 1)[0].title;
    console.log(a)
    const columns = [
      {
        Header: "Transaction",
        accessor: "transaction",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150,
        Cell: row => {
          const transaction = dataTransaction.filter(opt => opt.id === row.value) ? dataTransaction.filter(opt => opt.id === row.value)[0] : '';  
          return (<Badge color="" style={{backgroundColor: transaction.color}} className='text-white' pill >{transaction.title}</Badge>);
        }
      },
      {
        Header: "Value",
        accessor: "data2",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150,
        Cell: row => {
          return generalHelper.FormatIDR(row.value);
        }
      },
      {
        Header: "Category",
        accessor: "category",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 150,
        Cell: row => {
          const category = dataCategory.filter(opt => opt.id === row.value) ? dataCategory.filter(opt => opt.id === row.value)[0] : '';  
          return (<Badge color="" style={{backgroundColor: category.color}} className='text-white' pill >{category.title}</Badge>);
        }
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
        transaction : 2,
        data2 : 10000,
        category: 1,
        data3 : 'alpha'
      },
      {
        transaction : 2,
        data2 : 20000,
        category: 1,
        data3 : 'beta'
      },
      {
        transaction : 1,
        data2 : 150000,
        category: 1,
        data3 : 'gama'
      },
      {
        transaction : 3,
        data2 : 15000,
        category: 1,
        data3 : 'gama'
      },
      {
        transaction : 2,
        data2 : 7500,
        category: 1,
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
