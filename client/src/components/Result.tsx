import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Result() {
    const location = useLocation();
    const estimate = Math.round(location.state);
    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen flex flex-col bg-slate-900 text-gray-300 items-center justify-center px-4 w-full">
                        <h1 className="text-2xl md:text-3xl font-bold text-center text-sky-400 mb-4">
                            Estimated Price
                        </h1>
                        <div className="text-4xl md:text-5xl font-extrabold text-white mb-6">${estimate} (CAD)</div>
                        <p className="text-gray-400 text-center mb-6">
                            Thank you for using Auto Valuator!
                        </p>

                        <button
                        onClick={() => navigate("/")}
                        className="px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 text-cente"
                    >
                        Go to Home Page
                    </button>
                    </div>
            <Footer />
        </>
    );
}

export default Result;