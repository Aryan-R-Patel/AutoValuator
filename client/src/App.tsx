import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-slate-900 text-gray-300 items-center justify-center h-screen px-4 w-full">
                <h1 className="text-4xl md:text-5xl text-center text-white mb-4">Auto Valuator</h1>
                <p className="text-lg md:text-xl text-gray-400 text-center mb-8">
                    Predict your car price within minutes!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Link
                        to="/form"
                        className="px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 text-center"
                    >
                        Get Started
                    </Link>
                    <a
                        href="https://colab.research.google.com/drive/1etfAYnvWKtQ-TzNu_W0VNE8Kjk2y-CJa?usp=sharing"
                        target="_blank"
                        className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 text-center"
                    >
                        View the Model
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default App;
