# ./features/signupinvalid2.feature

Feature: Sign up on web but failed #2
    As a user
    I want to be unable to Sign Up

    Scenario: User failed to go to Registered page on the website because null firstname
        Given User browse register page Failed Version 2
        And User fill first name to register Failed Version 2
        And User fill last name to register Failed Version 2
        And User fill active email to register Failed Version 2
        And User fill active phone number to register Failed Version 2
        And User fill password to register Failed Version 2
        When User click button create account Failed Version 2
        Then User get alert 2
