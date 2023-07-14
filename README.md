# Ida Bot

Ida Bot is a Discord bot that allows users to search for and retrieve images from Imgur based on keywords. It utilizes the `discord.js` library for interacting with the Discord API and the `axios` library for making HTTP requests to the Imgur API.

## Features
- **Image Search**: Users can search for images by using the `^^search` command followed by the desired keywords. The bot will fetch and display the first four images related to the search query.
- **Image Search with Fields**: Users can use the `^^searchf` command followed by keywords to search for images. The bot will display the first four images as separate fields in an embed.
- **Help Menu**: The bot provides a `^^help` command to display a list of available commands and their descriptions.

## Prerequisites
Before running the bot, make sure you have the following prerequisites installed:
- Node.js (v12.0.0 or newer)
- npm (Node Package Manager)

## Installation
1. Clone this GitHub repository to your local machine or download the source code as a ZIP file.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run the following command to install the required dependencies:
`npm install`
4. Obtain a Discord bot token by creating a new bot on the [Discord Developer Portal](https://discord.com/developers/applications).
5. Obtain an Imgur API client ID by registering a new application on the [Imgur API documentation](https://apidocs.imgur.com/).
6. Replace `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` in the code with your Discord bot token and Imgur API client ID.
7. Save the changes.

## Usage
1. Invite the bot to your Discord server using the OAuth2 URL generated from the Discord Developer Portal.
2. Start the bot by running the following command in the terminal or command prompt: `node index.js`
3. In your Discord server, use the available commands to interact with the bot. Type `^^help` to see the list of commands and their descriptions.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Submit a pull request with a description of your changes.

## Resources
- [Discord.js Documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Imgur API Documentation](https://apidocs.imgur.com/)

## License
This project is licensed under the [MIT License](LICENSE).

## Disclaimer
This project is not affiliated with or endorsed by Discord or Imgur. Please use the bot responsibly and in accordance with the Discord and Imgur terms of service.
