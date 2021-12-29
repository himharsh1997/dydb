import { GenericResponse, HTTPErrorResponse, HTTPResquestEvent } from "@models";
import { ErrorHandle } from "src/shared";
import { DynamoDBClient, BatchExecuteStatementCommand } from '@aws-sdk/client-dynamodb';

const dydb = new DynamoDBClient({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: '',
        secretAccessKey: ''
    }
})

export const handler = async (event: HTTPResquestEvent):Promise<GenericResponse | HTTPErrorResponse> => { 
    try {
    
        const { userName, age } = event.body;
            
} catch (error:any) {
    return ErrorHandle(error.message, error.status, '', { ...error });
}
}

const dynamodbSave = async (): Promise<any> => { 
    return new Promise((resolve, reject) => { 
        const cmd = new BatchExecuteStatementCommand({
            Statements: [{
                Statement: 
            }]
        });
      dydb.send()
    })
}