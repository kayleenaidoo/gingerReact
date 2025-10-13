import {
    mdiMenu,
    mdiHomeVariantOutline,
    mdiAccountOutline,
    mdiBellOutline,
    mdiMessageOutline,
    mdiAccountGroupOutline,
    mdiClipboardTextOutline,
    mdiStarSettingsOutline,
} from "@mdi/js";

import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const getNavLinkClass = ({ isActive }) => {
        return isActive ? "nav-link active w-100" : "nav-link w-100";
    };

    return (
        <div className="overflow-hidden flex flex-col items-center gap-2 w-20 font-sans">
            <Icon path={mdiMenu} size={1} />
            <li>
                <NavLink to="/" className={getNavLinkClass}>
                    <Icon
                        path={mdiHomeVariantOutline}
                        size={1}
                        className="icon"
                    />
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" className={getNavLinkClass}>
                    <Icon path={mdiAccountOutline} size={1} className="icon" />
                    <span>Profile</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/notifications" className={getNavLinkClass}>
                    <Icon path={mdiBellOutline} size={1} className="icon" />
                    <span>Notifications</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/messages" className={getNavLinkClass}>
                    <Icon path={mdiMessageOutline} size={1} className="icon" />
                    <span>Messages</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/groups" className={getNavLinkClass}>
                    <Icon
                        path={mdiAccountGroupOutline}
                        size={1}
                        className="icon"
                    />
                    <span>Groups</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/lists" className={getNavLinkClass}>
                    <Icon
                        path={mdiClipboardTextOutline}
                        size={1}
                        className="icon"
                    />
                    <span>Lists</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/review" className={getNavLinkClass}>
                    <Icon
                        path={mdiStarSettingsOutline}
                        size={1}
                        className="icon"
                    />
                    <span>Review</span>
                </NavLink>
            </li>
        </div>
    );
}
