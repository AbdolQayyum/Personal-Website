import React,{useId} from 'react'
import Skills from './skills'



const AboutMe = ({data, skills}) => {

    const {title,body} = data;
    const id = useId();
  return (

    <section >
   
        <h2 className=' flex mt-1 bg-grey sm:justify-around rounded-lg mb-2' >{title}</h2>
        {body?.map ((el,i) => (

            <p key={`${id}_${i}`} className='mb-4'>
                {el}
            </p>

       ))}


    <Skills data = {skills}/>
  

    </section>
  )
}

export default AboutMe
