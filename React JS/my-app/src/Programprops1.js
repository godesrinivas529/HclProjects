import Programpart1 from "./Programpart1";
function Programprops1(){
    const myProgramprops1 = [
        {
            model : 'Experience Design',
            about : 'Acquire the mindset, the skills & the confidence that makes designers so valuable.',
            learn : 'What you learn : The full course process',
            duration :'Duration : 3 Months',
            commitment :'Commitment : 10 Hours per week',
            mode: 'Mode : Online', 
        },
        {
            model : 'Experience Engineering',
            about : 'Immerse in a cycle of evaluation & construction of a solution that meet the users need.',
            learn : 'What you learn :To implement design into products.',
            duration :'Duration : 3 Months',
            commitment :'Commitment : 10 Hours per week',
            mode: 'Mode : Online', 
        }
    ]

return(
    <main>
    <section>
          <h2 className = 'program'>About</h2>
          <p className = 'progDes'>Design or Engineering - we have you covered</p> 
        </section> 

    <section>
        <Programpart1
    model = {myProgramprops1[0].model}
    about = {myProgramprops1[0].about}
    learn = {myProgramprops1[0].learn}
    duration ={myProgramprops1[0].duration}
    commitment ={myProgramprops1[0].commitment}
    mode = {myProgramprops1[0].mode} />
    <Programpart1
    model = {myProgramprops1[1].model}
    about = {myProgramprops1[1].about}
    learn = {myProgramprops1[1].learn}
    duration ={myProgramprops1[1].duration}
    commitment ={myProgramprops1[1].commitment}
    mode = {myProgramprops1[1].mode} />
    </section>

    <section className='aboutus'>
            <h2>Vision</h2>
            <p>Code.Hub is your ideal HR partner whether you are a multinational company, a startup company or an ICT professional.
                 Our vision is to meet every professional in ICT sector, either by Code.Career, Code.
                Learn or Code.Event services and connect them to create a powerful Code.Community.</p>
            <h2>Our Values</h2>
            <p>In our Code.Hub team, we respect diversity, have fun, welcome and respect new ideas and love working on them.
                     Working together, we create value for the ICT community.</p>
        </section>
    </main>
    
)
}

export default Programprops1;