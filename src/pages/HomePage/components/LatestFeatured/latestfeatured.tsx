import React, { useState, MouseEvent } from 'react';

const LatestFeatured: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('FEATURED');

    const changeTab = (tabName: string): void => {
        setActiveTab(tabName);
    };

    const handleTabClick = (tabName: string, event: MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        changeTab(tabName);
    };

    return (
        <div >
            <div className="bg-white text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 md:container md:mx-auto">
                <div className={"w-full"}>
                    <ul className="flex flex-wrap -mb-px">
                        <li className="me-2 w-[49%]">
                            <a
                                href="#"
                                onClick={(event: MouseEvent<HTMLAnchorElement>) => handleTabClick('FEATURED', event)}
                                className={`inline-block p-4 border-b rounded-t-lg ${activeTab === 'FEATURED' ? 'text-red-600 border-red-600' : 'text-gray-500 hover:text-gray-600 hover:border-red-600 dark:hover:text-gray-300'
                                    }`}
                            >
                                FEATURED
                            </a>
                        </li>
                        <li className="me-2 w-[49%]">
                            <a
                                href="#"
                                onClick={(event: MouseEvent<HTMLAnchorElement>) => handleTabClick('LATEST NEWS', event)}
                                className={`inline-block p-4 border-b rounded-t-lg ${activeTab === 'LATEST NEWS' ? 'text-red-600 border-red-600' : 'text-gray-500 hover:text-gray-600 hover:border-red-600 dark:hover:text-gray-300'
                                    }`}
                            >
                                LATEST NEWS
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="p-4">
                    {activeTab === 'FEATURED' && (
                        <div className={"text-black"}>
                            <div className={"flex gap-4 items-center"}>
                                <img
                                    className="w-48 h-48 object-cover m-2 "
                                    src="https://fastly.picsum.photos/id/259/200/200.jpg?hmac=F9blvALDAoKm-lOnYw9g0q_RC51-6K1Msawm_dQzhIs"
                                    alt="FEATURED" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Architecto,
                                    porro.</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img
                                    className="w-48 h-48 object-cover m-2 "
                                    src="https://fastly.picsum.photos/id/127/200/200.jpg?hmac=WYBTvlVHFeXjWOUvDgKRt6YUtVxGF2ZdUGO9aoYimdg"
                                    alt="FEATURED" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Obcaecati, optio?</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img
                                    className="w-48 h-48 object-cover m-2 "
                                    src="https://fastly.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U"
                                    alt="FEATURED" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ullam!</p>
                            </div>


                        </div>
                    )}
                    {activeTab === 'LATEST NEWS' && (
                        <div className={"text-black"}>
                            <div className={"flex gap-4 items-center"}>
                                <img
                                    className="w-48 h-48 object-cover m-2 "
                                    src="https://fastly.picsum.photos/id/817/200/200.jpg?hmac=c7RMfV0IboK5oZwkIxQ9Ofx8Bml5x-j42i9DKdKrTwo"
                                    alt="LATEST NEWS" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, tenetur.</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img
                                    className="w-48 h-48 object-cover m-2 "
                                    src="https://fastly.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk"
                                    alt="LATEST NEWS" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, tempora.</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img
                                    className="w-48 h-48 object-cover m-2 "
                                    src="https://fastly.picsum.photos/id/1076/200/200.jpg?hmac=KTOq4o7b6rXzwd8kYN0nWrPIeKI97mzxBdWhnn-o-Nc"
                                    alt="LATEST NEWS" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, vitae.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LatestFeatured;
