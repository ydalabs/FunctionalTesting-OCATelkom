# ./features/login.feature

Feature: Login on Ocatelkom user Dashboard
    As a user
    I want to be able to login

    Scenario: Valid Login - Active Account
        Given user browse login page case 1
        And user fill email to login
        And user fill password to login
        When user click login button case 1
        Then user redirect to dashboard page
        
    
    Scenario: Invalid Login - Not Registered Account
        Given user browse login page case 2
        And user fill invalid email to login
        And user fill invalid password to login
        And user click login button case 2
        When user see invalid pop up notification
        

    Scenario: Invalid Login - Fill null value to Email and Password
        Given user browse login page case 3
        And user fill null to email to login
        And user fill null to password to login
        And user click login button case 3
        When user see invalid input validation null user and password input form

    
    Scenario: Invalid Login - Fill invalid value to Email and Password
        Given user browse login page case 4
        And user fill invalid value to email to login
        And user fill invalid value to password to login
        And user click login button case 4
        When user see invalid input validation at email and password input form
        
    
    
