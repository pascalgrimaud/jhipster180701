import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster180701SharedModule } from 'app/shared';
import { Jhipster180701AdminModule } from 'app/admin/admin.module';
import {
    BankAccountMySuffixComponent,
    BankAccountMySuffixDetailComponent,
    BankAccountMySuffixUpdateComponent,
    BankAccountMySuffixDeletePopupComponent,
    BankAccountMySuffixDeleteDialogComponent,
    bankAccountRoute,
    bankAccountPopupRoute
} from './';

const ENTITY_STATES = [...bankAccountRoute, ...bankAccountPopupRoute];

@NgModule({
    imports: [Jhipster180701SharedModule, Jhipster180701AdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BankAccountMySuffixComponent,
        BankAccountMySuffixDetailComponent,
        BankAccountMySuffixUpdateComponent,
        BankAccountMySuffixDeleteDialogComponent,
        BankAccountMySuffixDeletePopupComponent
    ],
    entryComponents: [
        BankAccountMySuffixComponent,
        BankAccountMySuffixUpdateComponent,
        BankAccountMySuffixDeleteDialogComponent,
        BankAccountMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster180701BankAccountMySuffixModule {}
