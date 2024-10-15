import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col justify-center items-center space-y-4">
            <p className="text-white sm:text-5xl text-2xl">Something Went Wrong</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Click here to go to Home Page
            </Link>
        </div>
    );
}
