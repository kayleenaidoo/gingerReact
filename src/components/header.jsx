import logo from "../assets/logo.svg";
import { mdiBellOutline, mdiCogOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function Header() {
    return (
        <header className="secondary flex w-full items-center justify-between bg-rose-50 px-6 py-3">
            <div>
                <img src={logo} alt="Ink & Ginger Logo" className="h-24" />
            </div>

            <div className="flex items-center gap-5">
                <span className="text-base font-medium text-xl primary">
                    username
                </span>
                <Icon path={mdiBellOutline} size={2} className="icon" />
                <Icon path={mdiCogOutline} size={2} className="icon" />
            </div>
        </header>
    );
}
