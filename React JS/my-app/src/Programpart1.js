import './Program.css';
function Programpart1(props){
    return(
        <main>
           
        
        <section className = 'experience'>
            <div className = 'proDescription'>
                <h5 className = 'model'>{props.model}</h5>
                <p className = 'aboutmodel'>{props.about}</p>
                <p className = 'details'>{props.learn}</p>
                <p className = 'details'>{props.duration}</p>
                <p className = 'details'>{props.commitment}</p>
                <p className = 'details'>{props.mode}</p>
            </div> 
        </section> 
        
        </main>
    )
    
}
 
export default Programpart1;