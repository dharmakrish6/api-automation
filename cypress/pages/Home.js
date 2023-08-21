class Home {
    visit() {
        cy.visit("/")
    }

    taskInput(text) {
        return cy.get('[placeholder="New task"]').first().type(text)
    }
    dateInput(text) {
        return cy.get('[placeholder="Deadline"]').first().type(text)
    }

    getAddTaskButton() {
        return cy.get(".add-task-button").first()
    }

    getDoneButton(item) {
        return cy.get(
            `:nth-child(${item}) > .mark-done-button`
        )
    }

    getDeleteButton(item) {
        return cy.get(
            `:nth-child(${item}) > .delete-button`
        )
    }
    getMarkAllDoneButton() {
        return cy.get(
            `button.mark-all-button`
        )
    }
    getMarkAllNotDoneButton() {
        return cy.get(
            `button.mark-all-not-done-button`
        )
    }
    getDeleteAllButton() {
        return cy.get(
            `button.delete-all-button`
        )
    }

}

module.exports = Home