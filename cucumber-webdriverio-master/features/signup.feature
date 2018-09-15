Feature: signup into losestudiantes
    As an user I want to sign up  to losestudiantes website in order to use the application

Scenario Outline: Signup failed with incorrect info

  Given I go to losestudiantes home screen
    When I open the login screen
    And I complete with <name> and <lastname> and <email> and  <selectCareer> and <checkTerms> and <password>
    And I try to signup
    Then I want to see <error>

    Examples:
      | name            | lastname | email                    |selectCareer                | checkTerms |password                    |error                       |
      |                 |          |                          |false                       | false        |                            |Ingresa tu correo           |
      |                 |          |                          |true                        | false        |                            |Ingresa tu correo           |
      | David           |          |                          |false                       | false        |                            |Ingresa tu correo           |
      | David           |          |                          |false                       | false        |                            |Ingresa tu correo           |
      | David           |          | da.saavedra@outlook.com |false                       | false        |                             |Ingresa una contraseña      |      
      | David           |Saavedra  | da.saavedra@uniandes.edu.co |true                       | true       |        123456789           |Error: Ya existe un usuario registrado |
      
Scenario Outline: Signup with correct info

  Given I go to losestudiantes home screen
    When I open the login screen
    And I complete with <name> and <lastname> and <email> and  <selectCareer> and <checkTerms> and <password>
    And I try to signup
    Then I want to signup

    Examples:
      | name            | lastname | email                    |selectCareer                | checkTerms |password                    |
      |       David     |Saavedra  | mcormier503@mailbox52.ga |true                       | true        |     123456789a             |