# AI Snippet Service

This README would normally document whatever steps are necessary to get your application up and running.

## Tech Stack

- Node.js v20.10.0;
- Javascript;
- MongoDB;
- Mongoose;
- Docker and Docker Compose;
- Jest.


## Configuration, Install dependencies and Database

- Install Node.js v20.10.0;
- Run the following commands:
- `cp .env.example .env`
- `npm install`
- `mkdir data`
- `docker-compose -f docker-compose.yml down`
- `docker-compose -f docker-compose.yml up -d`
- `npm run start:local`


## To run tests: `npm run test`


## Endpoints

### Create a snippet

```
POST /snippets
```

Example:

```json
{
  "title": "My first snippet",
  "code": "console.log('Hello World!')",
  "summary": "Prints 'Hello World!'"
}
```

### List all snippets

```
GET /snippets
```

Example:

```json
[
  {
    "id": "123",
    "title": "My first snippet",
    "code": "console.log('Hello World!')",
    "summary": "Prints 'Hello World!'"
  }
]
```

### Get a snippet by ID

```
GET /snippets/:id
```

Example:

```json
{
  "id": "123",
  "title": "My first snippet",
  "code": "console.log('Hello World!')",
  "summary": "Prints 'Hello World!'"
}
```

### Update a snippet by ID

```
PUT /snippets/:id
```

Example:

```json
{
  "id": "123",
  "title": "My first snippet",
  "code": "console.log('Hello World!')",
  "summary": "Prints 'Hello World!'"
}
```

### Delete a snippet by ID

```
DELETE /snippets/:id
```

### Generate a summary for a snippet

```
GET /snippets/generate-summary/:promptFromUser
```

Example:

```json
{
  "summary": "Prints 'Hello World!'"
}
```
