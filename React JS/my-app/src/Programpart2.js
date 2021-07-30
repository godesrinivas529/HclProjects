import './Program.css';
import { BiGlassesAlt } from "react-icons/bi";
function Programpart2(props) {
    return (
        <main className = 'mainPro'>
 
            <section className = 'proDetails'>
                 <div className = 'courses'>
                     
                     <p className = 'cIcon'><BiGlassesAlt color = 'tomato'/></p> 
                    <h5 className = 'cName'>{props.cname}</h5>
                    <p className = 'courseInfo'>{props.info}</p>
                </div> 
            </section>
        </main>
              
    )
}
export default Programpart2;