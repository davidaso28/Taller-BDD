Feature: Using taximeto

  Scenario: As a user I want to open taximetro
    Given I press "Paraderos"
    #button to remove the splash screen
    When I swipe left
    #to open te menu
    And I press "Taximetro"
    Then I should see "Taximetro"

  Scenario: As a user i want to use the taximetro
      #button to remove the splash screen
      Given I swipe left
      #to open te menu
      When I press "Taximetro"
      Then I enter "200" into input field number 1
      Then I should see "$17,100"

      Scenario: As a user i want to use the taximetro with terminal charge
          #button to remove the splash screen
          Given I swipe left
          #to open te menu
          When I press "Taximetro"
          And I enter "200" into input field number 1
          And I press "Terminal"
          Then I should see "$17,600"

          Scenario: As a user i want to use the taximetro with airport charge
              #button to remove the splash screen
              Given I swipe left
              #to open te menu
              When I press "Taximetro"
              Then I enter "200" into input field number 1
              And I press "Aeropuerto"
              Then I should see "$21,700"
