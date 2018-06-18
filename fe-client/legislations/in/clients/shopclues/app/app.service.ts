import { BaseAppService } from '@baseServices/app.service';

export class AppService extends BaseAppService {
    x = 5;
    constructor() {
        super();
        console.log(34);
    }
}
