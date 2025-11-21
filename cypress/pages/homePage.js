// cypress/pages/homePage.js

// Representa la "home" después de loguearse,
// donde existe un acceso a la sección de Cripto.

class HomePage {

  //Selectores page principal
  logIn = "//div[@class='elementor-element elementor-element-250b88c6 elementor-align-right elementor-widget__width-inherit elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']";
  registerFree = "div[class='elementor-element elementor-element-a91467d elementor-align-center elementor-widget__width-inherit elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']";
  cryptoMenuButton = "[data-test='menu-crypto']"; // ajustar según el DOM real

  // metodo para hacer click
goToRegister() {
    cy.get(this.registerFree).click();
}

  // Va a la sección de Cripto
  goToCrypto() {
    cy.get(this.cryptoMenuButton).click();
  }
}

// instancia lista para usar en los tests
export const homePage = new HomePage();
