import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import {
  getTransactionType,
} from "./DashboardAction";

const mapStateToProps = (state, ownProps) => {
  return {
    TransactionPayload: state.Transaction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTransactionType
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
