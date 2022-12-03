FROM node:lts-alpine

#criando a arquitetura de pastas aonde trabalhar
RUN mkdir -p /home/node/app

#setup do ponteiro para a pasta
WORKDIR /home/node/app

#Copiar o package
COPY package.json package-lock.json

#adicionando o git no container (para versionamento)
RUN  apk add --no-cache git

COPY . /home/node/app/

RUN chown -R node:node /home/node

RUN  npm install

USER node

ENTRYPOINT ["node", "ace", "serve", "--watch"]
