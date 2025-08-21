import React from 'react'
import Heading from '../Heading'
import PlumbingServicesTabs from '../PlumbingServicesTabs'

const RecentWorksSection = () => {
  return (
    <div className='py-[60px] md:py-[80px] lg:py-[100px] flex flex-col items-center gap-4 mainContainer' id='recentworks'>
        <Heading head='Our Recent Works' title='Featured Projects' />
        <PlumbingServicesTabs/>
    </div>
  )
}

export default RecentWorksSection