import React from "react";
import Image from "next/image";


const Projectdata = ({ data }) => {

    const {title , Myprojects} = data;
	
	return (

       
		<section>
           
			<h2 className='flex mb-2 bg-grey sm:justify-around rounded-lg  text-deapteal'>{ title }</h2>
			
           
			<div className='flex flex-col gap-10'>

				{Myprojects.map(({ role, description, current }) => (
					<div key={role} className='flex flex-col rounded-lg'>
						<span className={`h-2 ${current ? "bg-BlueGreen" : "bg-grey"}`} />
						<div className='bg-green-light p-4 drop-shadow-md'>
							<h3>{role}</h3>
							<Image 

// priority
// width={250}
// height={250}
// className='h-full p-5'
// src = '/images/fastfood.jpeg'
// alt = 'fastfood.jpeg'
// aria-label="fastfood.jpeg"


/>


							<p className='mt-2'>{description}</p>
						</div>
					</div>

					
				))}
			</div>
		</section>
        
	);
};

export default Projectdata;
