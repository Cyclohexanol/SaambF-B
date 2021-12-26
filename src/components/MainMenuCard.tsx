import React, { useState, useRef, useEffect, Fragment } from 'react';

// A react compnent that returns a card that take the following props:
// - title: string
// - description: string
// - image: string
// - link: string

export default class MainMenuCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        };
    }

    render() {
        return (
            <Fragment>
                <div className="flex rounded-xl p-8 md:p-0 bg-cover h-40 min-h-full items-center justify-items-center border-4 border-black hover:shadow hover:bg-slate-50">
                    <div className="md:p-8 text-left align-middle">
                        <p className="text-2xl font-semibold text-black">
                            {this.props.title}
                        </p>
                        <p className="text-lg font-medium text-black">
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

interface props {
    title: string;
    description: string;
    image: string;
    link: string;
}

