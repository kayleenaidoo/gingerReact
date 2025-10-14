import logo from "../assets/logo.svg";
import { mdiBellOutline, mdiCogOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function Header() {
    return (
        <header className="secondary flex w-full items-center justify-between bg-rose-50 px-6 py-4">
            <div>
                <img src={logo} alt="Ink & Ginger Logo" className="h-24" />
            </div>

            <div className="flex items-center gap-4">
                <div className="flex gap-4">{/* if (!loggedIn || guest) */}
                    <div>
                        sign in
                    </div>
                    <div>
                        register
                    </div>
                </div>
                <div className="text-xl font-medium primary"> {/* else*/}
                    username
                </div>
                <Icon path={mdiBellOutline} size={2} className="icon" />
                <Icon path={mdiCogOutline} size={2} className="icon" />
            </div>
        </header>
    );
}
