import { Divider, Tab, Tabs, Avatar } from '@mui/material';
import React, { useState } from 'react';
import strings from '../../localization';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import './tabs.scss'

const TabsControl = () => {
    const [activeTab, setActiveTabs] = useState(0);
    return <div id='tabs'>
        <div className='tabs-header'><h1>{strings.pages.home.tabs.pageTitle}</h1></div>
        <Tabs className='vertical-tabs' value={activeTab} onChange={(e,tab) => setActiveTabs(tab)}>
            <Tab label={strings.pages.home.tabs.title1} icon={<Avatar alt="test avatar" src="images/contact.svg" />} />
            <Tab label={strings.pages.home.tabs.title2} icon={<Avatar alt="test avatar" src="images/maintenance2.svg" />} />
            <Tab label={strings.pages.home.tabs.title3} icon={<Avatar alt="test avatar" src="images/process-svgrepo-com.svg" />} />
        </Tabs>
            {
                activeTab === 0 && <Tab1 />
            }
            {
                activeTab == 1 && <Tab2 />
            }
            {
                activeTab == 2 && <Tab3 />
            }
        </div>
}

export default TabsControl;