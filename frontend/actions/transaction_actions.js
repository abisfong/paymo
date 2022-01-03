import * as transactionApi from '../utils/api/transaction_api';

export const RECEIVE_TRANSACTIONS = 'RECIEVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';

export const receiveTransactions = ({transactions, users}, page) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
  users,
  page
});

export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

export const removeTransaction = transaction => ({
  type: REMOVE_TRANSACTION,
  transaction
});

export const receiveTransactionErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
});

export const createTransaction = formInput => dispatch => {
  return transactionApi.createTransaction(formInput).then(
    transaction => dispatch(receiveTransaction(transaction))
  );
}

export const getTransactions = params => dispatch => {
  return transactionApi.getTransactions(params).then(
    payload => dispatch(receiveTransactions(payload, params.page))
  );
}