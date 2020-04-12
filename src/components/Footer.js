import React from 'react';
import { connect } from "react-redux";

const mapStateToLinkProps = (state, ownProps) => {
    return {active: ownProps.filter === state.visibilityFilter};
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(
                {
                    type: 'SET_VISIBILITY_FILTER',
                    filter: ownProps.filter,
                }
            )
        }
    };
};
const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>;
    }
    return (
        <a href='/'
           onClick={e => {
               e.preventDefault();
               onClick();
           }}
        >
            {children}
        </a>
    );
};
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
export const Footer = () => (
    <p>
        Show:
        {' '}<FilterLink filter='SHOW_ALL'>All</FilterLink>
        {' '}<FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
        {' '}<FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
    </p>
);
