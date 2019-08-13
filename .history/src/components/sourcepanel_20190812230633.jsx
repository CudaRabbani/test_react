import React, {Component} from 'react';
import Source from "./source";

class SourcePanel extends Component {
    render() {
        return (
            <div>
                {this.props.sources.map(s =>
                    <Source
                        key={s.id}
                        label={s.name}
                        onDragStart = {this.props.onDragStart}
                        sourceId={s.id}
                    />
                )}
            </div>
        );
    }
}


export default SourcePanel;
