Feature: Login

  I want to Login in swaglabs

  Scenario: Login with right credentials
    Given I am in the right page
    And I fill my username and password
    Then I should see the main screen
