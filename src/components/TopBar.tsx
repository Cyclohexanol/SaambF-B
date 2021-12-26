import React, { Fragment } from 'react';

const TopBar: React.FC<SEOProps> = ({ children, ...rest }) => {
    return (
        <Fragment>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    Saamb Food & Drinks
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default TopBar;