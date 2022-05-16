import { useState } from "react"
import styles from "./ContactList.module.css"

export const ContactList=({name,email,img_url,no})=>{
   

const [myno,setMyno]=useState(false)
    

    return (
        <div  className={styles.main}  >
               
               <div onClick={()=>(setMyno(!myno))}  className={styles.list}>
                   <div>
                   <img src={img_url} alt="" />
                   </div>
                   <div>
                   <h3>{name}</h3>
                   <p>{email}</p>
                   {myno?<h5>{no}</h5>:null}
                   </div>
                   
                   
               </div>
                  
              
                  
                   
        
        </div>
    )
}