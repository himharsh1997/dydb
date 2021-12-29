import { HTTPErrorResponse } from "@models";

export const ErrorHandle = (
  errorPropsMsg = '',
  errorPropsCode = 500,
  errorPropsType = '',
  data = ['']
): HTTPErrorResponse => {
  return {
    errorType: errorPropsType,
    errorMessage: errorPropsMsg,
    errorInfo: {
      errorCode: errorPropsCode,
    },
    data,
  };
};
