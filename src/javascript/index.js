const Parse = require("parse/node");

// Inicialize o Parse com suas credenciais do Back4App
Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");
Parse.serverURL = "https://parseapi.back4app.com";

// Defina a classe que será usada para teste
const TestClass = Parse.Object.extend("TestClass");
const testObject = new TestClass();

// Adicione um valor ao objeto
testObject.set("testField", "Funcionando!");

// Salve o objeto no banco de dados
testObject
  .save()
  .then((object) => {
    console.log("Objeto salvo com sucesso:", object);
  })
  .catch((error) => {
    console.error("Erro ao salvar o objeto:", error);
  });
