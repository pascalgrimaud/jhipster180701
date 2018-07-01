import { element, by, promise, ElementFinder } from 'protractor';

export class BankAccountComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-bank-account-my-suffix div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class BankAccountUpdatePage {
    pageTitle = element(by.id('jhi-bank-account-my-suffix-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    bankNumberInput = element(by.id('field_bankNumber'));
    agencyNumberInput = element(by.id('field_agencyNumber'));
    lastOperationDurationInput = element(by.id('field_lastOperationDuration'));
    meanOperationDurationInput = element(by.id('field_meanOperationDuration'));
    balanceInput = element(by.id('field_balance'));
    openingDayInput = element(by.id('field_openingDay'));
    lastOperationDateInput = element(by.id('field_lastOperationDate'));
    activeInput = element(by.id('field_active'));
    accountTypeSelect = element(by.id('field_accountType'));
    attachmentInput = element(by.id('file_attachment'));
    descriptionInput = element(by.id('field_description'));
    userSelect = element(by.id('field_user'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setNameInput(name): promise.Promise<void> {
        return this.nameInput.sendKeys(name);
    }

    getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    setBankNumberInput(bankNumber): promise.Promise<void> {
        return this.bankNumberInput.sendKeys(bankNumber);
    }

    getBankNumberInput() {
        return this.bankNumberInput.getAttribute('value');
    }

    setAgencyNumberInput(agencyNumber): promise.Promise<void> {
        return this.agencyNumberInput.sendKeys(agencyNumber);
    }

    getAgencyNumberInput() {
        return this.agencyNumberInput.getAttribute('value');
    }

    setLastOperationDurationInput(lastOperationDuration): promise.Promise<void> {
        return this.lastOperationDurationInput.sendKeys(lastOperationDuration);
    }

    getLastOperationDurationInput() {
        return this.lastOperationDurationInput.getAttribute('value');
    }

    setMeanOperationDurationInput(meanOperationDuration): promise.Promise<void> {
        return this.meanOperationDurationInput.sendKeys(meanOperationDuration);
    }

    getMeanOperationDurationInput() {
        return this.meanOperationDurationInput.getAttribute('value');
    }

    setBalanceInput(balance): promise.Promise<void> {
        return this.balanceInput.sendKeys(balance);
    }

    getBalanceInput() {
        return this.balanceInput.getAttribute('value');
    }

    setOpeningDayInput(openingDay): promise.Promise<void> {
        return this.openingDayInput.sendKeys(openingDay);
    }

    getOpeningDayInput() {
        return this.openingDayInput.getAttribute('value');
    }

    setLastOperationDateInput(lastOperationDate): promise.Promise<void> {
        return this.lastOperationDateInput.sendKeys(lastOperationDate);
    }

    getLastOperationDateInput() {
        return this.lastOperationDateInput.getAttribute('value');
    }

    getActiveInput() {
        return this.activeInput;
    }
    setAccountTypeSelect(accountType): promise.Promise<void> {
        return this.accountTypeSelect.sendKeys(accountType);
    }

    getAccountTypeSelect() {
        return this.accountTypeSelect.element(by.css('option:checked')).getText();
    }

    accountTypeSelectLastOption(): promise.Promise<void> {
        return this.accountTypeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }
    setAttachmentInput(attachment): promise.Promise<void> {
        return this.attachmentInput.sendKeys(attachment);
    }

    getAttachmentInput() {
        return this.attachmentInput.getAttribute('value');
    }

    setDescriptionInput(description): promise.Promise<void> {
        return this.descriptionInput.sendKeys(description);
    }

    getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    userSelectLastOption(): promise.Promise<void> {
        return this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    userSelectOption(option): promise.Promise<void> {
        return this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    save(): promise.Promise<void> {
        return this.saveButton.click();
    }

    cancel(): promise.Promise<void> {
        return this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
