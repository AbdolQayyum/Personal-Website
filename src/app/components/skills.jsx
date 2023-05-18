"use client";
import React, { useState } from "react";
import { skills } from "./data/page-data";

const Skills = (data) => {
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
			className={`flex flex-row flex-wrap content-start list-none py-3 gap-2 text-lg ml-auto ${
				activeTab === "SOFT" ? "justify-start" : "justify-end"
			}`}
		>
			{activeTab === 'SOFT'?skills.SOFT.map(({ icon, text }) => (
				<li key={text} className='skill'>
					<span> {icon}</span>
					<label htmlFor="file">{text}</label>
					<progress id="file" value="70" max="100"></progress>
				</li>
			)):
			skills.HARD.map(({ icon, text }) => (
				<li key={text} className='skill'>
<span> {icon}</span>
					<label htmlFor="file">{text}</label>
					<progress className = " bg-deapteal" id="file" value="75" max="100">  </progress>				</li>
			))
		
		}
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