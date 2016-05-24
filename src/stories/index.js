import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Progress from '../index';

const boxStyles = {
  height: 100,
  position: 'relative',
  overflow: 'hidden'
}

storiesOf('Progress', module)
  .add('Progress shown', () => {
    return (
      <div style={{...boxStyles}}>
        <Progress percent={0.3} />
      </div>
  )})
  .add('Progress percent', () => {
    let Foo = React.createClass({
      getInitialState: function () {
        return {percent: 0}
      },
      setPercent: function (p) {
        this.setState({
          percent: p
        })
      },
      render: function () {
        return (
          <div style={boxStyles}>
            <button onClick={this.setPercent.bind(this, 0)}>0</button>
            <button onClick={this.setPercent.bind(this, 0.4)}>0.4</button>
            <button onClick={this.setPercent.bind(this, 0.8)}>0.8</button>
            <button onClick={this.setPercent.bind(this, 1)}>1</button>
            <Progress color="#333" inc={0.05} percent={this.state.percent}/>
          </div>
        )
      }
    })
    return <Foo />
  })
