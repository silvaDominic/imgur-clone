# Web Take Home Exercise
Create an app that displays albums for a given query from the Imgur API.
Upon selecting an album, the app should display a gallery of images for
that album. The project is very open ended so feel free to have some fun with it!

## Requirements:
- UI built in React
- Utilize Async/Await for api calls

## Additional details
- You can use any third-party libraries that you deem appropriate, but you should provide a brief explanation of why you decided to use them
- You are free to implement any design/architecture you think will help you solve the problem
- Write code with the same quality you would on a normal project, and leave comments as you deem appropriate
- A text entry component should exist to query the albums
- To query the albums from Imgur, use the API described here: https://apidocs.imgur.com/#3c981acf-47aa-488f-b068-269f65aee3ce
#### NOTE: you don’t need to create any account, just use the credentials provided below
- OPTIONAL: the user should be able to select an image from the gallery and the app should display it fullscreen, with the ability to refresh and see the same image

### Example Request:
```
curl --location --request GET "https://api.imgur.com/3/gallery/search?
q_all=cats&q_type=album" --header "Authorization: Client-ID 2d086962f60c89e"
```

## Instructions for submitting the exercise
- Create a GIT repo for the exercise and commit like you would do on a normal project
- Add a README with a brief overview of the project and the choices you made to implement it
- Share the url of the GIT repo with us or zip it up and send it to us at mike.schmidt@lucrasports.com

### Credentials

Imgur API Client ID: `2d086962f60c89e`
Please feel free to reach out if you have any questions!
