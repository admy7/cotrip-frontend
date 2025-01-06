FROM node:22.12-alpine AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:22.12-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist .

EXPOSE 5173

CMD ["serve", "-s", ".", "-l", "0.0.0.0:5173"]