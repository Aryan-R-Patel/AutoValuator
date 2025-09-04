# Auto Valuator - ML Powered Car Valuation Tool    

**Auto Valuator** is a full-stack web application that predicts car prices using the given information via a machine learning model.

---

## Live Demo
Try it out: [Live Demo](https://autovaluator-client.onrender.com/)!

---

## How it works
- 📝 User fills out the form with the relevant car details
- 🤖 Backend takes the details and predicts the car price using the ML model (saved in 'model.joblib'). The ML model ('model.joblib') is already included in the 'server' directory

---

## Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Flask, Python
- **ML Model (used in backend)**: Scikit-learn
- **Libraries**: NumPy, Pandas, Matplotlib

---

## Installation (Run Locally)
Open a terminal and navigate to the directory where you want to install the project:
```bash
# Clone the repository
git clone https://github.com/Aryan-R-Patel/AutoValuator.git

# Change to the app directory
cd AutoValuator

# Install the required libraries/packages

# client (frontend)
cd client
npm install

# server (backend)
cd ../server
pip install -r requirements.txt

# Run the application
# Open 2 terminals and navigate to the 'AutoValuator' directory. Then:

# Terminal 1:
cd client
npm run dev

# Terminal 2:
cd server
flask run
```
Then open http://localhost:5173 in your browser to view the application!

---

## Future Improvements / Todo
- 🔄 Improve UX by filtering the dropdown options. For example, if the user selects 'Honda' for the 'make', then only car models (such as 'Civic') from that 'make' should be displayed in the 'model' dropdown

---

## Contact / Report a Problem
If you have any feedback or would like to report a bug, please reach out to me via the following email.<br>
Email: aryanr.patel@mail.utoronto.ca

> Built with ❤ by **Aryan Patel** - CS Student & Software Engineer