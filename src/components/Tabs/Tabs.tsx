import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { TabInterface } from '../../types';

const TabsContainer = styled.div`
    position: fixed;
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    box-shadow: 0 0 10px black;
`;

interface TabsProps {
    tabs: Array<TabInterface>;
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

const Tabs: React.SFC<TabsProps> = props => {
    const { activeTab, tabs, onTabChange } = props;

    return (
        <TabsContainer>
           {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    onTabChange={onTabChange}
                    selected={activeTab === tab.id}
                />
            ))} 
        </TabsContainer>
    );
}

export default Tabs;