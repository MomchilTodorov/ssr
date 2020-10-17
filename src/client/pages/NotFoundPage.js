import React from 'react';

const NotFoundPage = ({ staticContext = {}/*internally the static router renames this prop from context to staticContext */ }) => {
    
    staticContext.notFound = true;
    
    return <h1>Ooops, route not found.</h1>
}

export default {
    component: NotFoundPage
}