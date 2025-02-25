import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../redux/quotesSlice";

export default function Quotes() {
    const dispatch = useDispatch();
    const { quotes, loading, error } = useSelector((state) => state.quotes);

    useEffect(() => {
        dispatch(fetchQuotes());
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    Quotes
                </h1>

                {loading && <p className="text-center text-blue-500">Loading quotes...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <ul className="space-y-4">
                    {quotes.map((quote) => (
                        <li key={quote.id} className="p-4 border-b">
                            <p className="text-lg italic">"{quote.quote}"</p>
                            <p className="text-sm text-gray-500">- {quote.author}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
