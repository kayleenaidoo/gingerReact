import logo from "../assets/logo.svg";
import { mdiBellOutline, mdiCogOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between bg-rose-50 px-6 py-3">
            <div>
                <img src={logo} alt="Ink & Ginger Logo" className="h-12" />
            </div>

            <div className="flex items-center gap-5">
                <span className="text-base font-medium text-gray-800">
                    username
                </span>
                <Icon path={mdiBellOutline} size={1} className="icon" />
                <Icon path={mdiCogOutline} size={1} className="icon" />
            </div>
        </header>
    );
}
