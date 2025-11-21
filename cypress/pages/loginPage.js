// cypress/pages/loginPage.js

// Clase que modela la pantalla de login.
// Encapsula todo lo que tenga que ver con iniciar sesión.

class LoginPage {
  // Ajustar selectores según el HTML real
  emailField = "//input[@id='i-login-email']";
  passwordField = "//input[@id='i-login-password']";


  // Navega a la pantalla de login/menú
  visit() {
    cy.visit("/menu");
  }

  // Flujo de login
  login(email, password) {
    this.visit();
    cy.get(this.emailField).clear().type(email);
    cy.get(this.passwordField).clear().type(password);
    cy.get(this.loginButton).click();
  }
}

// instancia lista para usar en los tests
export const loginPage = new LoginPage();
