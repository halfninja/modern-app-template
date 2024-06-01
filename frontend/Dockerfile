FROM node:20
RUN useradd -ms /bin/sh -u 1001 app
USER app 

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

COPY --chown=app:app . /app

CMD [ "npm", "run", "dev", "--host" ]