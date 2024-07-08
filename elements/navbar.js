class NavbarElement {

    get dropdownUserName() { return cy.get('.ms-2.me-2') }

    get buttonLogOut() { return cy.get('[data-qa="logout"]') }

    get linkCourses() { return cy.get('[data-qa="topmenu-Courses"]') }

    get linkChallenges() { return cy.get('[data-qa="topmenu-Challenges"]') }

    get linkInterviewQuestions() { return cy.get('[data-qa="topmenu-Interview Questions"]') }

    get linkDiary () { return cy.get('[data-qa="topmenu-Diary"]') }
    
}

export const Navbar = new NavbarElement()