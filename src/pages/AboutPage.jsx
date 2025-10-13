export default function AboutPage() {
    return (
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg space-y-8 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-gray-800">
                About This Project
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                This is the About Page, rendered at the '/about' path. The
                content is swapped without a full page reload.
            </p>
        </div>
    );
}
