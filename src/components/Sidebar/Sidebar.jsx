import React, { useEffect } from "react";
import SidebarList from "./SidebarList";
import { useLocation } from "react-router-dom";
import FilterList from "./FilterList";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

	const location = useLocation().pathname


	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	useEffect(() => {
		if (sidebarOpen) {
			if (typeof window !== "undefined" && window.document) {
				document.body.style.overflow = "hidden";
			}
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [sidebarOpen]);


	return (
		<div>
			<div className={`fixed inset-0 bg-slate-900 bg-opacity-30 cursor-pointer   transition-opacity duration-200 ${sidebarOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
				onClick={() => setSidebarOpen(false)}
				aria-hidden="true" ></div>

			{/* Sidebar */}
			{location === "/products" ?
				<FilterList  setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
				:
				<SidebarList setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
			}
		</div>
	);
}

export default Sidebar;