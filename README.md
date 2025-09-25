# chat-bot

⚙️ Setup & Installation

Clone the repository

git clone <your-repo-url>
cd backend


Install dependencies

npm install


or

yarn install


Setup environment variables
Create a .env file in the root directory:

PORT=4000
DATABASE_URL=your_database_url_here


Run the development server

npm run dev


or

yarn dev


The server will start at:

http://localhost:4000

📌 Scripts

npm run dev → Start development server with hot reload

npm run build → Build for production

npm start → Run production build

🛠 API Endpoints
Method	Endpoint	Description
GET	/api/conversations	Get all conversations
POST	/api/conversations	Create a new conversation
GET	/api/messages/:id	Get messages in a conversation
POST	/api/messages	Send a new message

Example:

curl http://localhost:4000/api/conversations

📖 Notes

Update .env with your real configs (DB, API keys, etc).

All routes are versioned under /api/*.

Extend routes/ and controllers/ as needed for new features.
