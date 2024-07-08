import { ProfilePage } from "./Profile"

class Progress {
    visit() {
        ProfilePage.linkProgress.click()
    }

    get innerJavaScript() { return cy.get('div:nth-child(2) > .ant-progress .ant-progress-inner > .ant-progress-bg') }
    get innerJavaScriptText() { return cy.get('div:nth-child(2) > .ant-progress >.ant-progress-text') }
    get innerJavaScriptCircle() { return cy.get('div > div:nth-child(2) > div > span > .anticon-check-circle') }

    get innerQAManual() { return cy.get('div:nth-child(3) > .ant-progress .ant-progress-inner > .ant-progress-bg') }
    get innerQAManualText() { return cy.get('div:nth-child(3) > .ant-progress > .ant-progress-text') }
    get innerQAManualCircle() { return cy.get('div > div:nth-child(3) > div > span > .anticon-check-circle') }

}



export const ProgressPage = new Progress()