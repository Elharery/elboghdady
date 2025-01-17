import { Link } from "react-router-dom";
import {FaBookOpen, FaNewspaper, FaPen, FaUser, FaVideo} from 'react-icons/fa';
import {AiFillQuestionCircle} from 'react-icons/ai';

import './Sidebar.css';
import UserImage from "../UserImage/UserImage";

function Sidebar() {
	const links = [
		"News",
		"Videos",
		"Lectures",
		"Questions",
		"Exams",
	]

  return (
    <aside className='bg-primary c-white h-100vh flex-column flex-between'>
        <h3 className="userHeading fs-20">
					Amr Tamer
				</h3>

				<FaUser className="userIcon"/>

				<ul className="linksList flex-column gap-10 w-full">
					{
						links.map((link) => (
							<li key={link} >
								<Link
									to={link.toLowerCase()}
									className="c-white flex-row flex-center"
									>
										{
									link === "News" ?
									<FaNewspaper />
									:
									link === "Videos" ?
									<FaVideo />:
									link === "Lectures" ?
									<FaBookOpen /> :
									link === "Exams" ? 
									<FaPen />:
									<AiFillQuestionCircle />
									
								}
									<span className="hide-mobile">
										{link}
									</span>
								</Link>
							</li>
						))
					}
				</ul>


				<div className="img mb-10">
						<UserImage />
				</div>
  </aside>
  )
}

export default Sidebar;