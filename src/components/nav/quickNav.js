 import React from 'react'
 import quickStyles from '../../styles/quickStyles.module.scss'
 import { Link } from 'gatsby'

 const QuickNav = () => {
     return (
       <div className={quickStyles.quickNav}>
         <button>
           <Link to={"/contact"}>
             <h2>Become a Customer</h2>
           </Link>
         </button>
         <button>
           <Link to={"/billPay"}>
             <h2>Pay Your Bill</h2>
           </Link>
         </button>
       </div>
     )
 }

 export default QuickNav