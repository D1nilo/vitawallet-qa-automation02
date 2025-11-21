// cypress/pages/registerPage.js
// Page Object del flujo de registro como usuario Argentina.

export class RegisterPage {


    // Selectores de ejemplo, AJUSTA mirando el HTML real con F12
    dniInput = "input[name='dni']";
    emailInput = "input[name='email']";
    passwordInput = "input[name='password']";
    confirmPasswordInput = "input[name='confirmPassword']";
    countrySelect = "select[name='country']";
    submitBtn = "[data-test='register-submit']";



    // metodo para hacer click solo escribiendo el texto exacto
    // PERSONAL
    clicStaff() {
        cy.contains("Personal").click();
    }
    // SIGUIENTE
    clicNext() {
        cy.contains("Siguiente").click();
    }
    // SELECIONAR UN PAIS
    clicSelecCountry() {
        cy.contains("div","Selecciona un país", { timeout: 4000 }).click();
    }
    // SELECIONAR UN PAIS - Wait 4 segundos
    countryArgentina() {
        cy.contains("div","Argentina", { timeout: 4000 }).click();
    }

    // Métodos de interacción
    typeDni(dni) {
        cy.get(this.dniInput).clear().type(dni);
    }

    typeEmail(email) {
        cy.get(this.emailInput).clear().type(email);
    }

    typePassword(password) {
        cy.get(this.passwordInput).clear().type(password);
    }

    typeConfirmPassword(password) {
        cy.get(this.confirmPasswordInput).clear().type(password);
    }

    selectCountryArgentina() {
        cy.get(this.countrySelect).select("Argentina"); // o "AR", según el value real
    }

    submit() {
        cy.get(this.submitBtn).click();
    }
}

// instancia lista para usar en los tests
export const registerPage = new RegisterPage();
