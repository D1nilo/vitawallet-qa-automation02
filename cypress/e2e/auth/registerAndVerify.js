// cypress/e2e/auth/register_and_verify.cy.js

const RegisterPage = require("../../pages/registerPage");
const VerificationPage = require("../../pages/verificationPage");

describe("Registro y verificación de usuario Argentina", () => {
  it("Registra un usuario como residente en Argentina e inicia verificación", () => {
    // Generamos un correo único usando timestamp para evitar conflictos
    const timestamp = Date.now();
    const email = `qa.automation.${timestamp}@mailinator.com`;
    const password = "PasswordSegura123!";

    // 1) Registro como Argentina
    RegisterPage.registerAsArgentina(email, password);

    // 2) Iniciar flujo de verificación con datos dummy
    VerificationPage.startVerificationWithDummyData();

    // A este punto, el sistema debería haber registrado la solicitud de verificación.
    // La aprobación final la realiza el equipo (Esteban) de forma manual.
  });
});
