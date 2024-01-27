import React, { Component } from 'react'
import {Badge} from 'reactstrap';
import * as generalHelper from "../../helper/general"

import ReactTable from "react-table";
import withFixedColumns from "react-table-hoc-fixed-columns";
const ReactTableFixedColumns = withFixedColumns(ReactTable);

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
    const dataPaymentType = [
      {
        id : 1,
        title : "Cash",
        color : "#9c9fa6" 
      },{
        id : 2,
        title : "Bank Transfer",
        color : "#9c9fa6" 
      },{
        id : 3,
        title : "QRIS",
        color : "#9c9fa6" 
      },{
        id : 4,
        title : "Debit Card - EDC",
        color : "#9c9fa6" 
      },{
        id : 5,
        title : "Credit Card - EDC",
        color : "#9c9fa6" 
      },{
        id : 6,
        title : "Auto Debit",
        color : "#9c9fa6" 
      },{
        id : 7,
        title : "e-wallet (Gopay)",
        color : "#9c9fa6" 
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
        accessor: "note",
        // filterable: true,
        headerClassName: "bg-primary py-3 text-white",
        width : 250
      },
      {
        Header: "Label",
        accessor: "label",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Payee",
        accessor: "payee",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Date",
        accessor: "date",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Time",
        accessor: "time",
        headerClassName: "bg-primary py-3 text-white",
        width : 150
      },
      {
        Header: "Payment Type",
        accessor: "paymentType",
        headerClassName: "bg-primary py-3 text-white",
        width : 150,
        Cell: row => {
          const paymentType = dataPaymentType.filter(opt => opt.id === row.value) ? dataPaymentType.filter(opt => opt.id === row.value)[0] : '';  
          return (<Badge color="" style={{backgroundColor: paymentType.color}} className='text-white' pill >{paymentType.title}</Badge>);
        }
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
        transaction: 2,
        data2: 10000,
        category: 1,
        data3: 'alpha',
        note: 'note1',
        label: '',
        payee: '',
        date: '2024-01-01',
        time: '09:10',
        paymentType: 1
      },
      {
        transaction: 2,
        data2: 20000,
        category: 1,
        data3: 'beta',
        note: 'note2',
        label: '',
        payee: '',
        date: '2024-01-02',
        time: '10:10',
        paymentType: 2
      },
      {
        transaction: 1,
        data2: 150000,
        category: 1,
        data3: 'gama',
        note: 'note3',
        label: '',
        payee: '',
        date: '2024-01-03',
        time: '11:10',
        paymentType: 2
      },
      {
        transaction: 3,
        data2: 15000,
        category: 1,
        data3: 'gama',
        note: 'note4',
        label: '',
        payee: '',
        date: '2024-01-04',
        time: '12:10',
        paymentType: 3
      },
      {
        transaction: 2,
        data2: 7500,
        category: 2,
        data3: 'gama',
        note: 'note5',
        label: '',
        payee: '',
        date: '2024-01-05',
        time: '13:10',
        paymentType: 7
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
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card bg-transparent p-0">
            <div className="card-body  p-0" >
              <ReactTableFixedColumns
                data={data}
                columns={columns}
                pageSize={10}
                showPagination={true}
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
