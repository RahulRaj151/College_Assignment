# Secure Password Manager using MERN Stack

## Setup
### Backend
```bash
cd project-root/server
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd project-root/client
npm install
npm run dev
```

## API examples
- `POST /api/register` `{ "username": "alice", "email": "alice@mail.com", "masterPassword":"Pass@123" }`
- `POST /api/login` `{ "email":"alice@mail.com", "masterPassword":"Pass@123" }`
- `POST /api/password/add` `{ "website":"github.com", "username":"alice", "password":"myPass", "userId":"..." }`
- `GET /api/password/view/:userId`
- `POST /api/revalidate` `{ "userId":"...", "masterPassword":"Pass@123" }`
- `POST /api/students`
- `GET /api/students/aggregate`

## Example documents
User:
```json
{ "username":"alice", "email":"alice@mail.com", "masterPassword":"$2a$10$..." }
```
Password:
```json
{ "website":"github.com", "username":"alice", "password":"myPass", "userId":"<ObjectId>" }
```
Student:
```json
{ "name":"John", "registrationNumber":"REG101", "marks":88, "address":"City", "email":"john@mail.com", "password":"Strong@123" }
```
