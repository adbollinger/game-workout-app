import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import League from './League.js';
import Warzone from './Warzone.js';
import TabView from './TabView.js';

class TabsView extends Component {
    static propTypes = {
        prop: PropTypes.object
    }

    render() {
        return (
            <div className="tab-container">
                <Tabs defaultActiveKey="lol">
                    <Tab eventKey="lol" title="League of Legends">
                        <TabView
                            form={
                                <League></League>
                            }
                        ></TabView>
                    </Tab>
                    <Tab eventKey="warzone" title="COD: Warzone">
                        <TabView
                            form={
                                <Warzone></Warzone>
                            }
                        ></TabView>
                    </Tab>
                </Tabs>

            </div>
        )
    }
}

export default TabsView;