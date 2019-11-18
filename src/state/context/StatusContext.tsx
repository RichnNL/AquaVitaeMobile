import React from 'react';
import {IStatusStore} from '../stores/Status/StatusStore';

const StatusContext = React.createContext<IStatusStore | null>(null);
export default StatusContext;