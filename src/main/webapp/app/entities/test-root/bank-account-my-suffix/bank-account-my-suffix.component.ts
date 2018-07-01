import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
import { Principal } from 'app/core';
import { BankAccountMySuffixService } from './bank-account-my-suffix.service';

@Component({
    selector: 'jhi-bank-account-my-suffix',
    templateUrl: './bank-account-my-suffix.component.html'
})
export class BankAccountMySuffixComponent implements OnInit, OnDestroy {
    bankAccounts: IBankAccountMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private bankAccountService: BankAccountMySuffixService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.bankAccountService.query().subscribe(
            (res: HttpResponse<IBankAccountMySuffix[]>) => {
                this.bankAccounts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInBankAccounts();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IBankAccountMySuffix) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    registerChangeInBankAccounts() {
        this.eventSubscriber = this.eventManager.subscribe('bankAccountListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
