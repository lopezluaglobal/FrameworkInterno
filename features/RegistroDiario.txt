Feature: Registro diario de temperatura

  Scenario Outline: Registro diario de sintomas

    Given Im login on the page "Monitor FCS"
    And I tap on 'Registro diario de sintomas'
    And I should see the daily symptom monitoring screen
    And I fill the Temperature <Temperature>
    And I fill the oximetry <oximetry>
    And I fill the symptom "No"
    And I tap on 'Continuar'
    And I should see the daily symptom monitoring screen
    And I fill the Status <Status>
    When I tap on 'Continuar'
    Then I should see the health condition screen
    Examples:
      | Temperature | oximetry | Status |
