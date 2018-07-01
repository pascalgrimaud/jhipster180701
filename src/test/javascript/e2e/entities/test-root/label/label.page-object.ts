import { element, by, promise, ElementFinder } from 'protractor';

export class LabelComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-label div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class LabelUpdatePage {
    pageTitle = element(by.id('jhi-label-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    labelNameInput = element(by.id('field_labelName'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setLabelNameInput(labelName): promise.Promise<void> {
        return this.labelNameInput.sendKeys(labelName);
    }

    getLabelNameInput() {
        return this.labelNameInput.getAttribute('value');
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
