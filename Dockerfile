FROM node:10.16

ENV PORT 8080
ENV NODE_ENV development

COPY . /workspace

WORKDIR /workspace

RUN npm install && \
    npm run build

EXPOSE 8080

CMD npm run start:prod
