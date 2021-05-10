import tiger from './tiger.jfif';
import './CardComponent.css';

function CardComponent(props){
    return (
        <section >
            <div className = "card">
                 <img src = {tiger} className = "cardimg" alt = "girl"/>  
                 <div className = "card_description">
                     <h4>Welcome back,</h4>
                     <h2>{props.person}</h2>
                     <button className = "sign-in">Sign-in</button>
                 </div>
            </div>

            <footer>
                <button className = "sign-in">Findout More</button>
            </footer>
        </section>
    );
}

export default CardComponent;