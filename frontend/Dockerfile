FROM node:18.18.0

WORKDIR /code/frontend

RUN npm install -g react-scripts

RUN chown -Rh node:node /code/frontend

USER node

EXPOSE 3000


CMD [ "sh", "-c", "npm install && npm run start" ]
