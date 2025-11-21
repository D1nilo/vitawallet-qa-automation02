# 🚀 Automatización Vita Wallet – Cypress + POM + POO

Framework de automatización construido para la prueba técnica de **Vita Wallet**, siguiendo buenas prácticas de desarrollo, diseño modular y estructura escalable utilizando **Cypress**, **Page Object Model (POM)** y enfoque de **Programación Orientada a Objetos (POO)**.

Este proyecto automatiza el flujo principal solicitado:

- Registro de usuario como residente de Argentina.
- Preparación para iniciar el flujo de intercambio ARS → USDT.
- Estructura modular pensada para extender fácilmente nuevos casos de prueba.

---

## 📌 Tecnologías utilizadas

- **Cypress 12+**
- **Node.js 16+**
- **JavaScript ES6**
- **POM (Page Object Model)**
- **POO (Programación Orientada a Objetos)**
- **WebStorm / IntelliJ IDEA (opcional)**

---

## 📁 Estructura del proyecto
cypress/
│── e2e/
│ └── userRegister.cy.js → Test del registro de usuario
│
│── pages/
│ ├── homePage.js → PageObject de la página principal
│ └── registerPage.js → PageObject del formulario de registro
│
│── fixtures/
│ └── testData.json → Datos estáticos o mockeados
│
│── support/
│ ├── commands.js → Comandos globales personalizados
│ └── e2e.js → Configuración previa a los tests
│
└── cypress.config.js → Configuración principal de Cypress


### 🧠 ¿Por qué esta arquitectura?

✔ Mantiene el código separado por responsabilidades  
✔ Facilita el mantenimiento y escalamiento  
✔ Permite reutilizar acciones en múltiples tests  
✔ Mejora legibilidad y trazabilidad

---

## ⚙️ Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/vitawallet-qa-automation.git
cd vitawallet-qa-automation

