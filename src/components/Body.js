import React, { useEffect } from 'react';
import "./body.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCenter,  } from '../redux/actions/centre.actions';




export default function Body() {

  
  const centres = useSelector((state) => state.CenterReducer.List_Centers);
  
  
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getAllCenter());
    
    
  }, []);
  
  const goto = (val)=>{
    window.open("https://gatewaydoc-backoffice.vercel.app/" + val._id, '_blank');
  }

  return (
    
    <div className='body'>
      <div className='nav'>
        <p className="title-nav"> Les structures</p>
      </div>
      <div className='container'>
        {
          centres.data && centres.data?.map((center, index) => (
            <div  key={center._id} className="card">
              <div className="header">
                <p className="title"> {center.nom}</p>
              </div>
              <div className="card-body">
                <ul>
                  <li><a href="#" onClick={()=> goto(center)} >{center.urlSite}</a></li>
                  <li><a href="#" >{center.addresse}</a></li>
                  <li><a href="#"  >{center.telephone}</a></li>
                  <li><a href="#" >{center.email}</a></li>
                  <li><a href="#"  >{center.formeJuridque}</a></li>
                  <li><a href="#"  >{center.localisation}</a></li>
                  <li><a href="#"  >{center.raisonSocial}</a></li>
                  <li><a href="#"  >{center.typeCentre}</a></li>
                </ul>
                
              </div>
            </div>

          ))
        }
      
      </div>
  </div>
  )
}
