import React from "react";
import { connect } from "react-redux";
import { removeError } from "../../actions/error_actions";
import orderToastMessages from '../../util/order_toast_messages';
import Toaster from "./toaster";

const mapStateToProps = ({errors}) => ({
  messages: orderToastMessages(errors)
})

const mapDispatchToProps = (dispatch) => ({
  closeAction: type => {
    return id => {
      switch (type) {
        case 'error' :
          return () => dispatch(removeError(id))
      }
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);