// cypress/e2e/auth/userRegister.cy.js

import { registerPage } from "../../pages/registerPage";
import { homePage } from "../../pages/HomePage";

// 2. Datos dummy
const dni = "12345678";
const email = `qa.${Date.now()}@mailinator.com`;
const password = "PasswordSegura123!";

describe("Registro de usuario residente en Argentina", () => {

    it("Debe registrar un nuevo usuario y dejar iniciada la verificación", () => {
        // 1. Abrir la página principal (usa baseUrl de config)
        cy.visit("/");

        // 2. Acceder a registrarme gratis
        homePage.goToRegister();
        registerPage.clicStaff();
        registerPage.clicNext();
        registerPage.clicSelecCountry();
        registerPage.countryArgentina();
        registerPage.clicNext();

    });
});
