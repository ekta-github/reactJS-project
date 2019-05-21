import React, { Component } from 'react';
class Error extends Component {
    render() {
        return <p className="pl-3 pt-3 text-error" role="alert">We're sorry, but our systems are experiencing some temporary problems.
        We're aware of the issue and are working hard to resolve. Please try again later.</p>;
    }
}

export default Error;