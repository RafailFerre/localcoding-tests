class Base {
    get toast() {
        return cy.get('.ant-notification-notice-message')
    }
}
export const BasePage = Base;
