import { toast } from 'react-toastify';
import { toastProps, toastTypes } from '../constants';

const notify = (type, message) => {
    switch (type) {
        case toastTypes.success:
            toast.success(message, toastProps);
            break;
        case toastTypes.info:
            toast.info(message, toastProps);
            break;
        case toastTypes.warning:
            toast.warn(message, toastProps);
            break;
        case toastTypes.error:
            toast.error(message, toastProps);
            break;
        default:
            break;
    }
};

export default notify;
