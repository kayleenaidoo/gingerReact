import {
    mdiHomeVariant,
    mdiMenu,
    mdiAccount,
    mdiBell,
    mdiMessage,
    mdiAccountGroup,
    mdiClipboardText,
    mdiStarSettings,
} from "@mdi/js";

import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const getNavLinkClass = ({ isActive }) => {
        return isActive ? "nav-link active" : "nav-link";
    };

    return (
        <nav className="navbar overflow-hidden">
            <div className="nav-toggle">
                <Icon path={mdiMenu} size={1} />
            </div>
            <ul className="nav-menu">
                <li>
                    <NavLink to="/" className={getNavLinkClass}>
                        <Icon path={mdiHomeVariant} size={1} />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={getNavLinkClass}>
                        <Icon path={mdiAccount} size={1} />
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notifications" className={getNavLinkClass}>
                        <Icon path={mdiBell} size={1} />
                        <span>Notifications</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" className={getNavLinkClass}>
                        <Icon path={mdiMessage} size={1} />
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li>
                    {/* Removed the hardcoded 'active' class here */}
                    <NavLink to="/groups" className={getNavLinkClass}>
                        <Icon path={mdiAccountGroup} size={1} />
                        <span>Groups</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lists" className={getNavLinkClass}>
                        <Icon path={mdiClipboardText} size={1} />
                        <span>Lists</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/review" className={getNavLinkClass}>
                        <Icon path={mdiStarSettings} size={1} />
                        <span>Review</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
