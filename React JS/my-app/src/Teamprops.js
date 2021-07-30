import Team from './Team';
function Teamprops(){
    const myTeam = [
        {
          person : 'Sai Nithin',
          role : '> Creative Head',
          about : 'Having 5 years of industry exp. in creative handleing.'
        },
    
        {
          person : 'Gumma Gopi Krishna',
          role : '> Technology Head',
          about : 'Having 4 years of industry exp. in Technologies used.'
        },
    
        {
          person : 'Srinivas Gode',
          role : '> Dynamic Developer',
          about : 'Having 8 years of industry exp. in product design'
        },
    
        {
          person : 'Kolli Venkatesh',
          role : '> Impacteer',
          about : 'Having 5 years of industry exp. Roleplayed as Team Leader.'
        },
    
        {
          person : 'Manju Vardhan',
          role : '> Peak Performer',
          about : 'Having 4 years of industry exp. as a Performer'
        },
      ]
 
      return (
        <section>
        <h2 className = 'aboutTeam'>Meet Our Team</h2>
        <Team
          person = {myTeam[0].person}
          role = {myTeam[0].role}
          about = {myTeam[0].about}/> 
        <Team
          person = {myTeam[1].person}
          role = {myTeam[1].role}
          about = {myTeam[1].about}/> 
        <Team
          person = {myTeam[2].person} 
          role = {myTeam[2].role}
          about = {myTeam[2].about}/>
        <Team
          person = {myTeam[3].person}
          role = {myTeam[3].role}
          about = {myTeam[3].about}/> 
        <Team
          person = {myTeam[4].person}
          role = {myTeam[4].role}
          about = {myTeam[4].about}/>     
      </section>
      )
}
 
export default Teamprops;