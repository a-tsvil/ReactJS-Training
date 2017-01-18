import { Action } from 'redux';

import Data from './Data';

interface IAppAction extends Action {
    data: Data[],
    timeStamp?: Date
}

export default IAppAction;