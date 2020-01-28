import {GET} from '../tools/axios';

class CoverService {
    getCover() {
        return GET('/cover', null);
    }
}

export default new CoverService();