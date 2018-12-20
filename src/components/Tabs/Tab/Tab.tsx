import React, { Component } from 'react';
import styled from 'styled-components';
import TabButton from './TabButton';

interface TabPropTypes {
    title: string;
    onTabChange: (tabId: string) => void,
    selected: boolean;
    id: string;
}

export default class Tab extends Component<TabPropTypes> {
    private onTabClick = () : void => {
        const { selected, onTabChange, id } = this.props;

        if (!selected) {
            onTabChange(id);
        }
    }

    public render(): JSX.Element {
        const { title, selected } = this.props;

        return (
            <TabButton selected={selected} onClick={this.onTabClick}>
                {title}
            </TabButton>
        );
    }
}