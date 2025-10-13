import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-rose-50 p-6 text-gray-700 text-center text-sm mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                        <Icon path={mdiFacebook} size={1} className="icon" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                    >
                        <Icon path={mdiTwitter} size={1} className="icon" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                        <Icon path={mdiInstagram} size={1} className="icon" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                    >
                        <Icon path={mdiLinkedin} size={1} className="icon" />
                    </a>
                </div>

                <p>&copy; {currentYear} Ink & Ginger. All rights reserved.</p>

                {/* <div className="mt-2 text-xs">
                    <a
                        href="/privacy"
                        className="text-gray-600 hover:text-gray-900 mx-2"
                    >
                        Privacy Policy
                    </a>
                    <span className="text-gray-400">|</span>
                    <a
                        href="/terms"
                        className="text-gray-600 hover:text-gray-900 mx-2"
                    >
                        Terms of Service
                    </a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
