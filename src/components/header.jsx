import logo from "../assets/logo.svg";
import { mdiBellOutline, mdiCogOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function Header() {
    return (
        <header className="secondary flex w-full items-center justify-between bg-rose-50 px-6 py-2">
            <div>
                <img src={logo} alt="Ink & Ginger Logo" className="h-28" />
            </div>

            <div className="flex items-center gap-6">
                <div className="flex gap-4">{/* if (!loggedIn || guest) */}
                    <button className="button-tertiary py-2 px-4">
                        Sign in
                    </button>
                    <button className="button-secondary py-2 px-4">
                        Register
                    </button>
                </div>
                <div className="text-xl font-medium primary"> {/* else*/}
                    Hi, @username
                </div>
                <Icon path={mdiBellOutline} size={1.8} className="primary" />
                <Icon path={mdiCogOutline} size={1.8} className="primary" />
            </div>
        </header>
    );
}
