import { browser, protractor } from 'protractor';
import { NavBarPage } from './../../../page-objects/jhi-page-objects';
import { BankAccountComponentsPage, BankAccountUpdatePage } from './bank-account-my-suffix.page-object';
import * as path from 'path';

describe('BankAccount e2e test', () => {
    let navBarPage: NavBarPage;
    let bankAccountUpdatePage: BankAccountUpdatePage;
    let bankAccountComponentsPage: BankAccountComponentsPage;
    const fileToUpload = '../../../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load BankAccounts', () => {
        navBarPage.goToEntity('bank-account-my-suffix');
        bankAccountComponentsPage = new BankAccountComponentsPage();
        expect(bankAccountComponentsPage.getTitle()).toMatch(/jhipster180701App.testRootBankAccount.home.title/);
    });

    it('should load create BankAccount page', () => {
        bankAccountComponentsPage.clickOnCreateButton();
        bankAccountUpdatePage = new BankAccountUpdatePage();
        expect(bankAccountUpdatePage.getPageTitle()).toMatch(/jhipster180701App.testRootBankAccount.home.createOrEditLabel/);
        bankAccountUpdatePage.cancel();
    });

    it('should create and save BankAccounts', () => {
        bankAccountComponentsPage.clickOnCreateButton();
        bankAccountUpdatePage.setNameInput('name');
        expect(bankAccountUpdatePage.getNameInput()).toMatch('name');
        bankAccountUpdatePage.setBankNumberInput('5');
        expect(bankAccountUpdatePage.getBankNumberInput()).toMatch('5');
        bankAccountUpdatePage.setAgencyNumberInput('5');
        expect(bankAccountUpdatePage.getAgencyNumberInput()).toMatch('5');
        bankAccountUpdatePage.setLastOperationDurationInput('5');
        expect(bankAccountUpdatePage.getLastOperationDurationInput()).toMatch('5');
        bankAccountUpdatePage.setMeanOperationDurationInput('5');
        expect(bankAccountUpdatePage.getMeanOperationDurationInput()).toMatch('5');
        bankAccountUpdatePage.setBalanceInput('5');
        expect(bankAccountUpdatePage.getBalanceInput()).toMatch('5');
        bankAccountUpdatePage.setOpeningDayInput('2000-12-31');
        expect(bankAccountUpdatePage.getOpeningDayInput()).toMatch('2000-12-31');
        bankAccountUpdatePage.setLastOperationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(bankAccountUpdatePage.getLastOperationDateInput()).toContain('2001-01-01T02:30');
        bankAccountUpdatePage
            .getActiveInput()
            .isSelected()
            .then(selected => {
                if (selected) {
                    bankAccountUpdatePage.getActiveInput().click();
                    expect(bankAccountUpdatePage.getActiveInput().isSelected()).toBeFalsy();
                } else {
                    bankAccountUpdatePage.getActiveInput().click();
                    expect(bankAccountUpdatePage.getActiveInput().isSelected()).toBeTruthy();
                }
            });
        bankAccountUpdatePage.accountTypeSelectLastOption();
        bankAccountUpdatePage.setAttachmentInput(absolutePath);
        bankAccountUpdatePage.setDescriptionInput('description');
        expect(bankAccountUpdatePage.getDescriptionInput()).toMatch('description');
        bankAccountUpdatePage.userSelectLastOption();
        bankAccountUpdatePage.save();
        expect(bankAccountUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
