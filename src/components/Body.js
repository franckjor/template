import React from 'react';
import "./body.css";

export default function Body() {
  
    const structures = [
      {
        id: 1,
        title: " centre ophtamologique ",
        param1: "Le backoffice",
        param2: "Lien backoffice propre",
        param3: "e widject de prise de RDV",
        param4: "Le widject en bas",
        param5: "Le widject compte client",
        param6: "Site du client",
        param7: "Bare de lieux",
        param8: "Use actions client seul",
        param9: "Project....",
        param10: "tel: 000000000",
        param11: "module ecterne",
      },
      {
        id: 2,
        title: " centre ophtamologique ",
        param1: "Le backoffice",
        param2: "Lien backoffice propre",
        param3: "e widject de prise de RDV",
        param4: "Le widject en bas",
        param5: "Le widject compte client",
        param6: "Site du client",
        param7: "Bare de lieux",
        param8: "Use actions client seul",
        param9: "Project....",
        param10: "tel: 000000000",
        param11: "module ecterne",
      },
      {
        id: 3,
        title: " centre ophtamologique ",
        param1: "Le backoffice",
        param2: "Lien backoffice propre",
        param3: "e widject de prise de RDV",
        param4: "Le widject en bas",
        param5: "Le widject compte client",
        param6: "Site du client",
        param7: "Bare de lieux",
        param8: "Use actions client seul",
        param9: "Project....",
        param10: "tel: 000000000",
        param11: "module ecterne",
      }
     

    ];
  
  return (
    
    <div className='body'>
      <div className='nav'>
        <p className="title-nav"> Les structures</p>
      </div>
      <div className='container'>
        {
          structures.map(({id, title, param1, param2, param3, param4,param5, param6, param7, param8, param9, param10, param11}) =>{
            return(
              <div key={id} className="card">
              <div className="header">
                <p className="title"> {title}</p>
              </div>
              <div className="card-body">
                <ul>
                  <a href="#"><li>{param1}</li></a>
                  <a href="#"><li> { param2 } </li></a>
                  <a href="#"><li> { param3 } </li></a>
                  <a href="#"><li> { param4 } </li></a>
                  <a href="#"><li> { param5 } </li></a>
                  <a href="#"><li> { param6 } </li></a>
                  <a href="#"><li> { param7 } </li></a>
                  <a href="#"><li> { param8 } </li></a>
                  <a href="#"><li> { param9 } </li></a>
                  <li> { param10 } </li>
                  <li> { param11 } </li>
                  
                </ul>

                </div>
              </div>
              
            )
          })
        }
      
      </div>
  </div>
  )
}


      
      
      
    