import Programpart2 from './Programpart2';
function Programprops2(){
    const myProgramprops2 = [
        {
          cname : 'Introduction to UX design',
          info : 'Get familiar with the design process, includimg aspects of branding, design usability and function.', 
        },
        {
            cname : 'User research & analysis',
            info :'Understand the behaviour of user through data available to draw inferences and need for the product.',
        },
        {
            cname : 'Design principles & patterns',
            info :'Learn the psycological aspects of design.',
        },
        {
            cname : 'Design ideation',
            info :'Try variety of ideation techniques that combine your consicious and unconsicious to match the design ideas.',
        },
        {
            cname : 'Information Architecture',
            info :'Learn to organize, structure and label content effectively to help users find information and complete tasks.',
        },
        {
            cname : 'Protyping & Wireframing',
            info :'Validate your product design ideas and design your solution blueprint.',
        },
    ]

    return (
        <main>
                <section>
                      <h2 className = 'program'>Programs</h2>
                      <p className = 'progDes'>Design or Engineering - we have you covered</p> 
                      
                    </section>
                <section>
                    <Programpart2
                     cname = {myProgramprops2[0].cname}
                     info =  {myProgramprops2[0].info}/>
                     <Programpart2
                     cname = {myProgramprops2[1].cname}
                     info =  {myProgramprops2[1].info}/>
                     <Programpart2
                     cname = {myProgramprops2[2].cname}
                     info =  {myProgramprops2[2].info}/>
                     <Programpart2
                     cname = {myProgramprops2[3].cname}
                     info =  {myProgramprops2[3].info}/>
                     <Programpart2
                     cname = {myProgramprops2[4].cname}
                     info =  {myProgramprops2[4].info}/>
                     <Programpart2
                     cname = {myProgramprops2[5].cname}
                     info =  {myProgramprops2[5].info}/>
                </section>
                </main>
            )
        }
         
        export default Programprops2;