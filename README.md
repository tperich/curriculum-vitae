### CV

## Running in docker

Make sure you have docker and docker-compose installed!

1. Install dependencies by running `yarn install` or `npm install`
2. To run a development version, simply run: `sudo docker-compose up`
3. To run a production version, run: `sudo docker-compose -f docker-compose.prod.yml up`

## Available npm/yarn scripts

| Command         | Explanation                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| `yarn start`    | Starts the development server on localhost:3000                                                              |
| `yarn lint`     | Runs eslint to check all `.ts` and `.tsx` files                                                              |
| `yarn lint:fix` | Same as above but applies auto-fixes                                                                         |
| `yarn test`     | Launches the test runner (jest)                                                                              |
| `yarn build`    | Builds the app for production to the `build` folder                                                          |
| `yarn eject`    | Ejects the application from CRA. **Note: this is a one-way operation. Once you `eject`, you can’t go back!** |
