import { format } from 'date-fns';
import { RequestHandler } from 'express';

const loggerMiddleware: RequestHandler = (req, res, next) => {
  const { method, url, query, body, headers } = req;

  // Log the incoming request information
  console.log('-----------------------------------------');
  console.log(
    `New Request! on ${format(new Date(), 'dd/mm/yy')} at ${format(
      new Date(),
      'hh:mm:ss:ms'
    )}`
  );
  console.log(`From IP :  ${req.ip} and HOST : ${headers.host}`);
  console.log(`Method: ${method}`);
  console.log(`URL: ${url}`);
  console.log(`Query Parameters: ${JSON.stringify(query)}`);
  console.log(`Request Body: ${JSON.stringify(body)}`);
  console.log(`Request Headers: ${JSON.stringify(headers.authorization)}`);
  console.log('-----------------------------------------\n\n');

  // Continue to the next middleware in the chain

  next();
};

export default loggerMiddleware;
