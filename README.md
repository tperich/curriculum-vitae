### CV

## Running in docker

Make sure you have docker and docker-compose installed!

1. To run a development version, simply run: `sudo docker compose up`, uses port 5173
2. To run a production version, run: `sudo docker compose -f docker-compose.prod.yml up`, uses port 80

## Available npm/yarn scripts

| Command         | Explanation                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| `npm run dev`  | Starts the development server on localhost:5173                                                              |
| `npm run build`| Builds the project using Vite                                                                                |
