import React, {Component} from 'react';
import Header from "./header";

class Layout extends Component {
    render() {
        return (
            <div className="container full-layout">
                <div className="row">
                    <div className="col">
                        <Header/>
                    </div>
                </div>
                <div className="container m-1">
                    <div className="row">
                        <div className="col left-panel m-1">Input
                        <div>
                           <button/> 
                        </div>
                        </div>
                        <div className="col workspace-panel m-1">Workspace</div>
                        <div className="col right-panel m-1">Output</div>
                    </div>
                    <div className="container footer m-1">Footer</div>
                </div>
            </div>
        );
    }
}


export default Layout;
