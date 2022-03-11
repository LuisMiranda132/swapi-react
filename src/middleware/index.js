import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { applyMiddleware } from 'redux';

const logger = createLogger({ collapsed: true })

export default applyMiddleware(
    thunk,
    logger
);
