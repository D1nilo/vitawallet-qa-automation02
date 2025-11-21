// cypress/pages/verificationPage.js

// Esta clase modela la parte de verificación KYC.
// Aquí ingresamos datos ficticios (dummy) y enviamos la solicitud de verificación.

class VerificationPage {
  // ======================
  // SELECTORES
  // ======================
  //
  // ⚠️ Ajustar según la UI real:
  // - Cómo se entra al perfil / verificación
  // - Campos del formulario de verificación
  // - Botón de enviar
  // - Mensaje de éxito

  profileMenuButton = "[data-test='menu-profile']";        // botón para abrir el menú de perfil
  verifySectionLink = "[data-test='go-to-verification']";  // link o botón "Verificar cuenta"

  documentField = "[data-test='verification-document']";   // input documento (DNI/CUIT, etc.)
  addressField = "[data-test='verification-address']";     // input dirección
  cityField = "[data-test='verification-city']";           // input ciudad

  submitVerificationButton = "[data-test='verification-submit']";
  successMessage = "[data-test='verification-sent']";

  // ======================
  // MÉTODOS
  // ======================

  // Navega desde el home/perfil hacia la sección de verificación
  goToVerificationSection() {
    cy.get(this.profileMenuButton).click();
    cy.get(this.verifySectionLink).click();
  }

  // Completa el formulario con datos ficticios (dummy)
  fillDummyData() {
    cy.get(this.documentField).clear().type("12345678");         // DNI ficticio
    cy.get(this.addressField).clear().type("Calle Falsa 123");   // Dirección dummy
    cy.get(this.cityField).clear().type("Buenos Aires");         // Ciudad dummy
  }

  // Envía la solicitud de verificación
  submitVerification() {
    cy.get(this.submitVerificationButton).click();
  }

  // Valida que se muestre un mensaje indicando que la solicitud fue enviada
  assertVerificationSent() {
    cy.get(this.successMessage).should("be.visible");
  }

  // Flujo completo: ir a verificación, llenar datos y enviar
  startVerificationWithDummyData() {
    this.goToVerificationSection();
    this.fillDummyData();
    this.submitVerification();
    this.assertVerificationSent();
  }
}

module.exports = new VerificationPage();
