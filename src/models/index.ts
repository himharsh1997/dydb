export interface HTTPResquestEvent { 
  body: any;
  method: string;
  headers: any;
  query: any;
  requestPath: string;
  stage: string;
}

export interface GenericResponse { 
    message: string;
    data: any;
}

export interface HTTPErrorResponse { 
  errorType: string;
  errorMessage: string;
  errorInfo: {
    errorCode: number;
  };
  data: string[];
}