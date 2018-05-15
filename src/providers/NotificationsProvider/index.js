import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const NotificationsContext = React.createContext()

export const NotificationsConsumer = NotificationsContext.Consumer

export class NotificationsProvider extends PureComponent {
  state = {
    notification: {
      title: '',
      body: '',
      type: 'info',
    },
    show: false,
    setNotification: (notification) => {
      this.setState(
        {
          show: true,
          notification,
        },
        () => { },
      )
    },
    hidenNotification: () => {
      this.setState(
        {
          show: false,
        },
        () => { },
      )
    },
  }

  render() {
    const value = { ...this.state }
    return (
      <NotificationsContext.Provider value={{ state: value }}>
        {this.props.children}
      </NotificationsContext.Provider>
    );
  }
}

NotificationsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
}
