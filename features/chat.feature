# ./features/hat.feature

Feature: Sending chat on the chat feature
    As a user
    I want to be able to send a chat

    Scenario: User success to send chat
        Given user browse dashboard page
        And user click chat feature
        When user fill message
        Then user click send button
        # When user fill name field
        # Then user click kirim button
        # Then user can get reply from admin