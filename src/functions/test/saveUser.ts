import { GenericResponse, HTTPErrorResponse, HTTPResquestEvent } from "@models";
import { ErrorHandle } from "src/shared";
// import { DynamoDBClient, BatchExecuteStatementCommand } from '@aws-sdk/client-dynamodb';

// const dydb = new DynamoDBClient({
//     region: 'ap-south-1',
//     credentials: {
//         accessKeyId: '',
//         secretAccessKey: ''
//     }
// })

export const handler = async (
    event: HTTPResquestEvent,
    context: any,
    callback: any): Promise<any | HTTPErrorResponse> => { 
    try {
        // console.log(event.body, typeof event.body);
        const { userName, age } = event.body;
        const body = { message: 'Success', data: JSON.parse(event.body) }
        const response = {
          statusCode: 200,
          body: JSON.stringify(body),
        };

        return response;
            
} catch (error:any) {
    return ErrorHandle(error.message, error.status, '', { ...error });
}
}

// const dynamodbSave = async (): Promise<any> => { 
//     return new Promise((resolve, reject) => { 
//         const cmd = new BatchExecuteStatementCommand({
//             Statements: [{
//                 Statement: 
//             }]
//         });
//       dydb.send()
//     })
// }