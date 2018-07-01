import { browser } from 'protractor';
import { NavBarPage } from './../../../page-objects/jhi-page-objects';
import { LabelComponentsPage, LabelUpdatePage } from './label.page-object';

describe('Label e2e test', () => {
    let navBarPage: NavBarPage;
    let labelUpdatePage: LabelUpdatePage;
    let labelComponentsPage: LabelComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Labels', () => {
        navBarPage.goToEntity('label');
        labelComponentsPage = new LabelComponentsPage();
        expect(labelComponentsPage.getTitle()).toMatch(/jhipster180701App.testRootLabel.home.title/);
    });

    it('should load create Label page', () => {
        labelComponentsPage.clickOnCreateButton();
        labelUpdatePage = new LabelUpdatePage();
        expect(labelUpdatePage.getPageTitle()).toMatch(/jhipster180701App.testRootLabel.home.createOrEditLabel/);
        labelUpdatePage.cancel();
    });

    it('should create and save Labels', () => {
        labelComponentsPage.clickOnCreateButton();
        labelUpdatePage.setLabelNameInput('labelName');
        expect(labelUpdatePage.getLabelNameInput()).toMatch('labelName');
        labelUpdatePage.save();
        expect(labelUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
