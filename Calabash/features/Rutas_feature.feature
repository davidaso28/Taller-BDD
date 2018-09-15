Feature: Using rutas

  Scenario: As a user I want to open rutas
    Given I press "Paraderos"
    #button to remove the splash screen
    When I press "Rutas"
    #to open te menu
    Then I should see "Rutas"

    Scenario: As a user i want to check a transmilenio route
      Given I press "Rutas"
      #button to remove the splash screen
      When I press "1"
      #to open te menu
      Then I should see "Modelia"

      Scenario: As a user i want to check a guaymaral route
        Given I press "Rutas"
        #button to remove the splash screen
        When I swipe right
        #to open te menu
        And I swipe right
        And I press "2-6"
        Then I should see "Caramely"
