import React from 'react'
import PropaneDelivery from './propaneDelivery.js'
import SafeInstallation from './safeInstallation.js'
import ServicePropaneAppliances from './servicePropaneAppliances.js'
const PrimaryServices = () => {
    return (
      <div>
        <PropaneDelivery />
        <SafeInstallation />
        <ServicePropaneAppliances />
      </div>
    )
}

export default PrimaryServices
