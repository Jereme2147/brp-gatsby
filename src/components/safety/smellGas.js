import React from "react"

const SmellGas = () => {
    const style = {
       p: {
           margin: "20px 0"
       },
       ol: {
           margin: "20px 0"
       },
       li: {
           padding: "5px",
           margin: "10px 0"
       }

    }
    return (
      <div>
        <p style={style.p}>
          When it comes to gas appliances, safety is a top priority. If you
          smell gas in your home, follow these steps:
        </p>
        <ol style={style.ol}>
          <li style={style.li}>
            <strong>NO FLAMES OR SPARKS.</strong> Immediately put out all
            smoking materials and other open flames. Do not operate lights,
            appliances, telephones, or cell phones. Flames or sparks from these
            sources can trigger an explosion or a fire.
          </li>
          <li style={style.li}>
            <strong>LEAVE THE AREA IMMEDIATELY.</strong> Get everyone out of the
            building or area where you suspect gas is leaking.
          </li>
          <li style={style.li}>
            <strong>SHUT OFF THE GAS.</strong> Turn off the main gas supply
            valve on your propane tank if it is safe to do so. To close the
            valve, turn it to the right (clockwise).
          </li>
          <li style={style.li}>
            <strong>REPORT THE LEAK.</strong> From a neighbor’s home or other
            nearby building away from the gas leak, call your propane retailer
            right away. If you can’t reach your propane retailer, call 911 or
            your local fire department.
          </li>
          <li style={style.li}>
            <strong>DO NOT RETURN TO THE BUILDING OR AREA</strong> until your
            propane retailer, emergency responder, or qualified service
            technician determines that it is safe to do so.
          </li>
          <li style={style.li}>
            <strong>GET YOUR SYSTEM CHECKED.</strong> Before you attempt to use
            any of your propane appliances, your propane retailer or a qualified
            service technician must check your entire system to ensure that it
            is leak-free.
          </li>
        </ol>
      </div>
    )
}

export default SmellGas