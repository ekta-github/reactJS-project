import React, { Component } from 'react';
import { string, bool, func, oneOfType, number, instanceOf } from 'prop-types';

class Input extends Component {

    static propTypes = {
        id: string.isRequired,
        className: string,
        type: string, // oneOfType(['text', 'number', 'tel']),
        ariaDescribedby: string,
        required: bool,
        value: oneOfType([string, number]),
        placeholder: string,
        name: string,
        title: string,
        minLength: number,
        maxLength: number,
        disabled: bool,
        onChange: func,
        onFocus: func,
        onKeyUp: func,
        onKeyPress: func,
        onBlur: func,
        onMouseEnter: func,
        onMouseLeave: func,
        autoComplete: string,
        autoFocus: bool,
        refElement: oneOfType([instanceOf(Element), instanceOf(Object)])
    }

    static defaultProps = {
        type: 'text',
        onKeyUp: () => { },
        onKeyPress: () => { },
        onChange: () => { },
        onFocus: () => { },
        onBlur: () => { },
        onMouseLeave: () => { },
        onMouseEnter: () => { },
        required: false,
        disabled: false,
        autoFocus: false,
        autoComplete: 'off'
    }

    render() {
        const { className, id, name, ariaDescribedby, type, value, title, onKeyPress, onChange, onKeyUp, onFocus, onBlur, onMouseEnter, onMouseLeave, placeholder, refElement, validators, required, minLength, maxLength, disabled, autoComplete, autoFocus } = this.props;
        return <input
            type={type}
            className={className}
            id={id}
            data-pid={id}
            name={name}
            value={value}
            title={title}
            placeholder={placeholder}
            aria-describedby={ariaDescribedby}
            validators={validators}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            disabled={disabled}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onKeyPress={onKeyPress}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            ref={refElement}
        />
    }
}

export default Input;