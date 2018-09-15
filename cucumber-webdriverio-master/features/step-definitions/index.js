var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });
  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

   var mailInput = cajaLogIn.element('input[name="correo"]');
   mailInput.click();
   mailInput.keys(email);

   var passwordInput = cajaLogIn.element('input[name="password"]');
   passwordInput.click();
   passwordInput.keys(password)
});

Then('I expect to see {string}', error => {
   browser.waitForVisible('.aviso.alert.alert-danger', 5000);
   var alertText = browser.element('.aviso.alert.alert-danger').getText();
   expect(alertText).to.include(error);
});

Then('I login', () => {
     browser.isExisting('a=Salir');
  });

  When(/^I complete with (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,(name, lastname, email, selectCareer, checkTerms, password) => {
    var cajaSignUp = browser.element('.cajaSignUp');

   var nameInput = cajaSignUp.element('input[name="nombre"]');
   nameInput.click();
   nameInput.keys(name);
   var lastnameInput = cajaSignUp.element('input[name="apellido"]');
   lastnameInput.click();
   lastnameInput.keys(lastname);
   var emailbox = cajaSignUp.element('input[name="correo"]');
   emailbox.click();
   emailbox.keys(email);

   var passwordInput = cajaSignUp.element('input[name="password"]');
   passwordInput.click();
   passwordInput.keys(password)
   if(selectCareer)
   {
       var selectBox=cajaSignUp.element('select[name="idPrograma"]');
        selectBox.selectByValue('12')
   }
   if(checkTerms)
   {
        var checkb=cajaSignUp.element('input[name=acepta]'); 
        checkb.click();      
   }


});
When('I try to signup', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click()
  });
  Then('I want to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
 });

 Then('I want to signup', () => {
  browser.isExisting('h2=Registro exitoso!');
});


}); 