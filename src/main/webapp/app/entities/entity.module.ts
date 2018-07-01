import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhipster180701BankAccountMySuffixModule } from './test-root/bank-account-my-suffix/bank-account-my-suffix.module';
import { Jhipster180701LabelModule } from './test-root/label/label.module';
import { Jhipster180701OperationModule } from './test-root/operation/operation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Jhipster180701BankAccountMySuffixModule,
        Jhipster180701LabelModule,
        Jhipster180701OperationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster180701EntityModule {}
