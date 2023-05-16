"use client";
import React, { useState } from "react";

const Skills = ({ data }) => {
	const [activeTab, setActiveTab] = useState("SOFT");
    

	const setBg = (active) => (activeTab === active ? "bg-deapteal" : "bg-grey");
	const setTabsAlignment = (tab) =>
		tab === "SOFT" ? "text-left" : "text-right";

	const tabs = (
		<div className='flex'>
			{["SOFT", "HARD"].map((el) => (
				<button
					key={el}
					type='button'
					className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
					onClick={() => setActiveTab(el)}
				>
					{el} Skills
				</button>
			))}
		</div>
	);
	const content = (
		<ul
			className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
				activeTab === "SOFT" ? "justify-start" : "justify-end"
			}`}
		>
			{data?.map(({ icon, text }) => (
				<li key={text} className='skill'>
					<span> {icon}</span> {text}
				</li>
			))}
		</ul>
	);
	return (
		<div>
			{tabs}
			{content}
		</div>
	);
};

export default Skills;