 import React from 'react'
 import quickStyles from '../../styles/quickStyles.module.scss'

 const QuickNav = () => {
     return (
       <div className={quickStyles.quickNav}>
         <button>
           <a href="#">
             <h2>Become a Customer</h2>
           </a>
         </button>
         <button>
           <a href="#">
             <h2>Pay Your Bill</h2>
           </a>
         </button>
       </div>
     )
 }

 export default QuickNav