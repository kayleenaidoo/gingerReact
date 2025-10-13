import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import * as Pages from "./pages/index.js";

export default function App() {
    return (
        <div class="bg-gray-100 min-h-screen w-screen font-sans">
            <div className="flex">
                <Navbar className="mr-4" />
                <div className="mt-8">
                    <Routes className="relative bg-white p-8 md:p-12 rounded-2xl shadow-lg overflow-hidden text-center">
                        <Route path="/" element={<Pages.Home />} />
                        <Route path="/profile" element={<Pages.Profile />} />
                        <Route
                            path="/notifications"
                            element={<Pages.Notifications />}
                        />
                        <Route path="/messages" element={<Pages.Messages />} />
                        <Route path="/groups" element={<Pages.Groups />} />
                        <Route path="/lists" element={<Pages.Lists />} />
                        <Route path="/review" element={<Pages.Reviews />} />
                    </Routes>
                </div>
            </div>
            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}</style>
        </div>
    );
}
