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
    window.open("https://gatewaydoc-backoffice.vercel.app/"+val.id, '_blank');
  }

  return (
    
    <div className='body'>
      <div className='nav'>
        <p className="title-nav"> Les structures</p>
      </div>
      <div className='container'>
        {
          centres && centres?.map((center, index) => (
            <div  key={center.id} className="card">
              <div className="header">
                <p className="title"> {center.title}</p>
              </div>
              <div className="card-body">
                <a href="#" onClick={()=> goto(center)} >{center.body}</a>
               
              </div>
            </div>

          ))
        }
      
      </div>
  </div>
  )
}
