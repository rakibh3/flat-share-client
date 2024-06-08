# RoomSync

## Installation

Step-by-step instructions on how to install the application.

- Clone the repository:

```
git clone https://github.com/rakibh3/flat-share-client
```

- Navigate to the project directory:

```
cd flat-share-client
```

- Install dependencies:

```
pnpm install
```

- If you don't have pnpm install on your device:

```
npm install -g pnpm
```

### Set up environment variables

Create a .env file in the root directory and add necessary environment variables like database connection strings, DATABASE_URL and PORT

```
NEXTAUTH_URL = your_nextauth_server_url/api
EDGE_STORE_ACCESS_KEY = your_edge_store_access_key
EDGE_STORE_SECRET_KEY = your_edge_store_secret_key
```

## Admin Login Credential For Testing Purpose Only

```
Email: admin@roomsync.com

Password: 123456
```

## Usage

Instructions on how to use or run the application.

Start the application:

```
pnpm dev
```

## Live Deploy Link

```
https://fs-client.vercel.app/
```
