import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Records from "./Records";
import {
  getTransactionType,
} from "./TransactionAction";

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

export default connect(mapStateToProps, mapDispatchToProps)(Records);
