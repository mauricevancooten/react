import React from 'react'
import Loadable from 'react-loadable'
import Loading from './loading'

const LoadableComponent = Loadable({
  loader: () => import('./hello-world'),
  loading: Loading,
  delay: 200
})

export default class LoadableTest extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}