import type { APIGatewayProxyHandlerV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const { headers } = event;

    const host = headers['x-forwarded-host'];

    const response: APIGatewayProxyStructuredResultV2 = {
        statusCode: 200,
        headers: {
            'content-type': 'text/html; charset=UTF-8'
        },
        body: JSON.stringify({ message: 'Hello, Babo World!', host})
    };
    return response;
};