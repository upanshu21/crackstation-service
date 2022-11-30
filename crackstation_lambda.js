const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();
AWS.config.update({region: "us-east-1"})
  
exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
	"Content-Type": "application/json",
	 'Content-Type': 'application/json',
   "Access-Control-Allow-Headers" : "Content-Type",
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET"
  };

  try {
	switch (event.routeKey) {
  	case "GET /password/{hash}":
    	body = await dynamo
      	.get({
        	TableName: "hash_table",
        	Key: {
          	hash: event.pathParameters.hash
        	}
      	})
      	.promise();
    	break;
  	default:
    	throw new Error(`Unsupported route`);
	}
  } catch (err) {
	 
	  body = err.message;
  } finally {
	    body = JSON.stringify(body);
  }
  
    if(body === '{}') {
          statusCode = 404
          body = JSON.stringify("Decryption failed: value does not exist in lookup table")
      } else if(body === JSON.stringify("Unsupported route")) {
         statusCode = 400;
         body = JSON.stringify("Error: Invalid API route")
      }
      else {
        let decrypted_password = {}
        body = JSON.parse(body)
        decrypted_password[body.Item.hash] = body.Item.value
        body = JSON.stringify(decrypted_password)
      }

  return {
	statusCode,
	body,
	headers
  };
};
