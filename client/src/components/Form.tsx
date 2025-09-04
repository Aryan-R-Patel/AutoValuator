import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
// store all the dropdown options in a hashmap so it is more scalable in the future
// also this avoids harcoding values upto some extent
import { DROPDOWNS } from "../dropdowns";

function Form() {
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        getData(data);
    };

    // the url provided by render after deplying the web service
    const PREDICT_ROUTE = "https://autovaluator-4f6t.onrender.com/api/predict";

    async function getData(data: any) {
        const response = await fetch(PREDICT_ROUTE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        navigate("/result", { state: result.prediction });
    }

    return (
        <>
            <div className="min-h-screen flex flex-col bg-slate-900 text-gray-300 items-center justify-center px-4 w-full">
                <div className="mt-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Car Details Form</h1>
                    <p className="text-lg md:text-xl text-gray-400">
                        Enter your car details below to get an instant price estimate
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-2xl p-6 md:p-10">
                    {/* Miles */}
                    <div className="flex flex-col">
                        <label htmlFor="miles" className="mb-1 text-sky-400 font-medium">
                            Miles
                        </label>
                        <input
                            required
                            type="number"
                            name="miles"
                            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-slate-900 text-gray-100"
                        />
                    </div>
                    {/* Year */}
                    <div className="flex flex-col">
                        <label htmlFor="year" className="mb-1 text-sky-400 font-medium">
                            Year
                        </label>
                        <input
                            required
                            type="number"
                            name="year"
                            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-slate-900 text-gray-100"
                        />
                    </div>

                    {/* Engine Size */}
                    <div className="flex flex-col">
                        <label htmlFor="engine_size" className="mb-1 text-sky-400 font-medium">
                            Engine Size
                        </label>
                        <input
                            required
                            type="number"
                            step="0.1"
                            name="engine_size"
                            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-slate-900 text-gray-100"
                        />
                    </div>

                    {/* dropdown fields: */}
                    {Object.entries(DROPDOWNS).map(([key, values]) => (
                        <div key={key} className="flex flex-col">
                            <label htmlFor={key} className="mb-1 text-sky-400 font-medium">
                                {key.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                                {/* some keys are named as body_type, so replace '_' with ' ' */}
                            </label>
                            <select
                                required
                                name={key}
                                className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-slate-900 text-gray-100"
                            >
                                <option value="">Select {key.replace("_", " ")}</option>
                                {values.map((val) => (
                                    <option key={val} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-white bg-sky-600 rounded-full hover:bg-sky-700 transition"
                    >
                        Submit
                    </button>
                </form>

                <Footer />
            </div>
        </>
    );
}

export default Form;
