import { InjectionToken } from '@angular/core';
import { IAppConstant } from './Iapp.constant';

export let AppConstant = new InjectionToken<IAppConstant>('app.constant');


export const AppValues: IAppConstant = {
    pageSize: 10,
    baseUrl: 'http://localhost:3000',
    color: 'red',
    paginationOptions: [10, 20, 30]
}

