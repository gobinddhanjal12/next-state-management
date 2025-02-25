import { useLoader } from "../context/LoaderContext";

export default function Loader() {
    const { loading } = useLoader();

    if (!loading) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
        </div>
    );
}
