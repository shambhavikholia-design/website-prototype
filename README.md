# MDRConnects — Website Prototype

Basic prototype with elementry APIs and frontend

 Stack

- Frontend — React + Vite + React Router + Lucide React
- Backend — Node.js + Express

 Running Locally

--Backend

npm install
node server.js
 runs on http://localhost:5000


Frontend

npm install
npm run dev
 runs on http://localhost:5173


 Notes

- All API calls go through `Frontend/Src/services/api.js` — if there are any backend URL changes, only update it there
- Images go in `Frontend/Src/Assets/Images/`
- AboutUs, Contact, Resources, Standards pages are placeholders
- When deploying or port forwarding, update `BASE_URL` in `services/api.js` to the live backend URL
