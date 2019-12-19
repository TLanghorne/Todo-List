//React function rather than class based component
//This is a page that will be routed as the About page under the main page, gives details about the version
import React from 'react';

const About = () => {
    return (     //when you return something it must be wrapped in a single element but if you do not need an element in the dom use a react fragment
        <React.Fragment>
            <h1>About</h1>  
            <p>This is the TodoList app v1.0.0. Part of a React crash course</p> 
        </React.Fragment> 
    );
}

export default About;
