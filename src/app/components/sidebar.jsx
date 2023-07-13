import Image from "next/image";
import React from "react";

import { Envelope, Linkedin, Medium } from "../components/icons/";

const Sidebar = ({ data }) => {
	const { name, role, education, contactLinks } = data;

	return (
		<div className='bg-deapteal flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed' >
			<div className="text-grey flex flex-col p-10 items-center">
				<Image 

                    priority
                    width={300}
                    height={300}
                    className='rounded-full h-full p-5'
                    src = '/images/Abdul-Qayyum.jpg'
                    alt = 'Abdul-Qayyum.jpg'
                    aria-label="Abdul-Qayyum.jpg"

                
                />
				<h1 className="mb-2">{name}</h1>
				<h2 className="mb-8">{role}</h2>
				<p className="mb-2"> {education}</p>

				<div className="text-white text-center sm:mb-4 mt-4 sm:mt-4 ">
					<h3 className="mb-2" > CONTACT ME</h3>
					<div className="flex flex-row justify-center gap-2">
						<a className="icon-contactme"
					
							href={contactLinks?.[0]}
							aria-label={"email link"}
						>
							<Envelope />
						</a>
					
						<a className="icon-contactme"
							
							href={contactLinks?.[1]}
							aria-label={"linkedin link"}
						>
							<Linkedin />
						</a>
						<a className="icon-contactme"
							
							href={contactLinks?.[2]}
							aria-label={"medium link"}
						>
							<Medium />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;