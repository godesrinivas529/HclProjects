import './Team.css';
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
function Team(props){
    return (
        <section>
            <div className = 'tName'>
                <h5 >{props.person}</h5>
                <h6 className = 'role'>{props.role}</h6>
                <p className = 'about'>{props.about}</p>
                <p>{props.add}</p>
                <div className = 'fIcons'>
                    <p className = 'icon'><FaFacebookF color = 'darkblue'/></p>
                    <p className = 'icon'><FaInstagram color = 'purple'/></p>
                    <p className = 'icon'><FaTwitter color = 'skyblue'/></p>
                </div>
            </div>
            
        </section>
    )
    
}
 
export default Team;