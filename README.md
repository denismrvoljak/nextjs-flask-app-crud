# Friends Manager CRUD Application

This project is a full-stack CRUD application for managing friends, built with Flask (backend) and Next.js (frontend).

I have build this project to learn how to integrate Next.js and Flask (and create pretty UI using ShadCn Library)

The final version of this project isn't perfect, but I achived my main goal which was to learn how to integrate some of these tools together.

## Project Structure

```
NEXTJS-FLASK-PROJECT/
├── backend/               # Flask backend
│   ├── __pycache__/
│   ├── .venv/
│   ├── instance/
│   ├── .env               # Environment variables
│   ├── app.py             # Flask application entry point
│   ├── models.py          # Database models
│   ├── requirements.txt   # Python dependencies
│   ├── routes.py          # API routes
├── frontend/              # Next.js frontend
│   ├── app/               # Next.js App Router structure
│   ├── components/        # React components
│   ├── node_modules/
│   ├── public/            # Static assets
│   ├── package.json       # Node dependencies
│   └── ... (other Next.js files)
├── .gitignore
├── README.md
```

## Technology Stack

### Backend
- **Flask**: Lightweight Python web framework
- **SQLAlchemy**: ORM for database operations
- **Flask-CORS**: For handling Cross-Origin Resource Sharing
- **SQLite**: Database for development

### Frontend
- **Next.js**: React framework with server components
- **TypeScript**: Type-safe JavaScript
- **shadcn/ui**: Component library built on Tailwind CSS
- **Sonner**: Toast notification system

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows, use: .venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask application:
   ```bash
   python app.py
   ```
   The API will be available at http://localhost:5000

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000

## API Endpoints

- GET `/api/friends`: Retrieve all friends
- POST `/api/friends`: Create a new friend
- PATCH `/api/friends/<id>`: Update friend details
- DELETE `/api/friends/<id>`: Delete a friend

## Package Updates & Deprecation Notes

### shadcn/ui Updates
The `shadcn-ui` package is deprecated and has been replaced with `shadcn`. Use the following commands instead:

```bash
# Initialize shadcn
npx shadcn@latest init

# Add components
npx shadcn@latest add button card input dialog form
```

For more information, visit: https://ui.shadcn.com/docs/cli

### Toast Component Replacement
The toast component from shadcn/ui is deprecated. Use Sonner instead:

1. Install Sonner:
   ```bash
   npm install sonner
   ```

2. Import and use in your layout:
   ```tsx
   import { Toaster } from "sonner"
   
   // In your layout component
   <Toaster position="bottom-right" />
   ```

3. Trigger toasts in your components:
   ```tsx
   import { toast } from "sonner"
   
   // Show success toast
   toast.success("Operation successful!")
   
   // Show error toast
   toast.error("An error occurred")
   ```

For more information on Sonner, visit: https://sonner.emilkowal.ski/

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://react.dev/)