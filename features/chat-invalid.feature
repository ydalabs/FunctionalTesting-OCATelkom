# ./features/hat.feature

Feature: Sending chat on the chat feature
    As a user
    I want to be able to send a chat

    Scenario: User does not success to send the chat
        Given user browse dashboard page
        And user click chat feature again
        When user does not fill message
        Then user just click send button 
        
        # Then user can not send chat