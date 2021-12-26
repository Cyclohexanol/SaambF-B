import React, { Fragment } from 'react';
import TopBar from 'components/TopBar';
import { Coffee } from 'server/graphql';

const LayoutPage: React.FC<SEOProps> = ({ children, ...rest }) => {
    return (
        <Fragment>
            <div className="min-h-full">
                <TopBar {...rest}/>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="flex px-4 py-6 sm:px-0 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <MainMenuCard {...rest} title={Coffee} description={""} image={""} link={""}/>
                        </div>
                    </div>
                </main>
            </div>
        </Fragment>
    )
}

function MainMenuCard(props) {
    return (
        <Fragment>
            <div className="flex rounded-xl p-8 md:p-0 bg-cover h-40 min-h-full items-center justify-items-center border-4 border-black hover:shadow hover:bg-slate-50">
                <div className="md:p-8 text-left align-middle">
                    <p className="text-2xl font-semibold text-black">
                        {props.title}
                    </p>
                    <p className="text-lg font-medium text-black">
                        {props.description}
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

interface SEOProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default LayoutPage;