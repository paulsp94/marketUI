import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';


class ProfileSidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            Currenticon:'',
            Currentstate:'',
            expanded: false,
            showCheckboxes: false,
        };
    }

    render(){
        return (
                <div className="sidebar">
                 <Tabs>
                 <Tab label="header" >
                    <Card expanded={this.state.expanded}>
                            <CardText>
                                <div className="userdescribation">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                        <br/>
                                        by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                    <h2> stripe connect button here </h2>
                                </div>
                            </CardText>
                    </Card>
                     </Tab>
                    </Tabs>
                </div>
        )
    }
}


export default ProfileSidebar ;



