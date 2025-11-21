// cypress/pages/cryptoPage.js

// Clase que representa la página de intercambio cripto.
// Aquí se seleccionan monedas, monto y se confirma el intercambio.

class CryptoPage {
  // ======================
  // SELECTORES
  // ======================
  //
  // Ajustar según la UI real: selects, inputs, botones, mensaje de éxito.

  fromCurrencySelect = "[data-test='from-currency']";   // select moneda origen
  toCurrencySelect = "[data-test='to-currency']";       // select moneda destino
  amountField = "[data-test='crypto-amount']";          // input monto
  continueButton = "[data-test='crypto-continue']";     // botón continuar
  confirmButton = "[data-test='crypto-confirm']";       // botón confirmar
  successMessage = "[data-test='crypto-success']";      // mensaje de operación exitosa

  // Selecciona ARS como moneda origen
  selectFromCurrencyARS() {
    cy.get(this.fromCurrencySelect).select("ARS"); // Ajusta el value si es distinto
  }

  // Selecciona USDT como moneda destino
  selectToCurrencyUSDT() {
    cy.get(this.toCurrencySelect).select("USDT");
  }

  // Escribe el monto que se va a intercambiar
  enterAmount(amount) {
    cy.get(this.amountField).clear().type(amount);
  }

  // Continúa al siguiente paso del flujo
  clickContinue() {
    cy.get(this.continueButton).click();
  }

  // Confirma la operación
  clickConfirm() {
    cy.get(this.confirmButton).click();
  }

  // Valida que la operación se haya completado correctamente
  assertExchangeSuccess() {
    cy.get(this.successMessage).should("be.visible");
  }

  // Flujo completo de intercambio ARS → USDT
  exchangeArsToUsdt(amount) {
    this.selectFromCurrencyARS();
    this.selectToCurrencyUSDT();
    this.enterAmount(amount);
    this.clickContinue();
    this.clickConfirm();
    this.assertExchangeSuccess();
  }
}

module.exports = new CryptoPage();
