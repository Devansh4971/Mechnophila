
"use client"

import Appbar from './components/appbar';
import Section1 from './components/section';

import { Spotlight } from './components/ui/spotlight';
import UpcomingSection from './components/upcoming-event';
import ConductedEvents from './components/conducted-events';
import LatestNews from './components/latest-news';
import TeamMembers from './components/team';
import Section5 from './components/footer';
import { GridBackgroundDemo } from './components/ui/dot-background';


export default function LandingPage() {

  return (
    <div className='w-full h-full overflow-y-auto min-h-screen'>
      <div>
        <div><GridBackgroundDemo>

          <div><Appbar></Appbar></div>
          <div><Section1></Section1></div>
          <div><UpcomingSection></UpcomingSection></div>
          <div><ConductedEvents></ConductedEvents></div>
          <div><LatestNews></LatestNews></div>
          <div><TeamMembers></TeamMembers></div>
          {/* the following is the footer section , was having troubles with naming conventions */}
          <div><Section5></Section5></div>
          
          
          
          </GridBackgroundDemo></div>
        
        
        
      </div>
      
    </div>
  )

}