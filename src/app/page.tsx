import Image from 'next/image'
import AboutMe from "./components/about-me";
import { aboutMe , skills, projectsdetail} from './components/data/page-data';
import Projectdata from './components/Projects';

export const metadata = {

  title : 'Qayyum-Portfolio'
}

export default function Home() {
  return (

    <div>

      <AboutMe data={aboutMe} skills={skills} />
			<Projectdata data={projectsdetail} />

    </div>


    )

    }

