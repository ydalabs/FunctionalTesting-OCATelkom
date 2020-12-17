# ./features/signup.feature

Feature: Sign up on web
    As a user
    I want to be able to Sign Up

    Scenario: User success to go to Registered page on the website
        Given User browse register page
        And User fill first name to register
        And User fill last name to register
        And User fill active email to register
        And User fill active phone number to register
        And User fill password to register
        When User click button create account
        Then User go to email verification page
