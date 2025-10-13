export default function Home() {
    return (
        <div className="animate-fade-in">
            <div className="">
                <div className="">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        Welcome Home
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        This is the Home Page, rendered by React Router at the
                        '/' path.
                    </p>
                </div>
            </div>
        </div>
    );
}
