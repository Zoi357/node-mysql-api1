import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from './_middleware/error-handler';
import accountController from './accounts/accounts.controller';
import swaggerDocs from './_helpers/swagger';
import cookieParser from 'cookie-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({origin:(origin,callback) => callback(null, true), credentials: true}));

app.use('/accounts', accountController);

app.use('/api-docs',swaggerDocs);

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
