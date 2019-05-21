import React, { Component } from 'react';
import { string, bool, func, instanceOf, element, oneOfType } from 'prop-types';

class Button extends Component {

    static propTypes = {
        className: string,
        id: string.isRequired,
        name: string,
        ariaDescribedby: string,
        alt: string,
        disabled: bool,
        onClick: func,
        onFocus: func,
        onBlur: func,
        onMouseLeave: func,
        onMouseEnter: func,
        autoFocus: bool,
        refElement: oneOfType([instanceOf(Element), instanceOf(Object)]),
        children: oneOfType([element, string]).isRequired,
    }

    static defaultProps = {
        onClick: () => { },
        onFocus: () => { },
        onBlur: () => { },
        onMouseLeave: () => { },
        onMouseEnter: () => { },
        disabled: false,
        autoFocus: false
    }

    render() {
        const { className, id, name, ariaDescribedby, alt, disabled, onClick, onFocus, onBlur, role, onMouseEnter, onMouseLeave, autoFocus, refElement, children } = this.props;
        return <button
            type="button"
            className={className}
            id={id}
            name={name}
            data-pid={id}
            aria-describedby={ariaDescribedby}
            alt={alt}
            role={role}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            autoFocus={autoFocus}
            ref={refElement}
        >
            {children}
        </button>
    }
}

export default Button;