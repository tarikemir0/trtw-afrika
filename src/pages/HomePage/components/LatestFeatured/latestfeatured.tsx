import React, { useState, MouseEvent } from "react";

const LatestFeatured: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("FEATURED");

    const changeTab = (tabName: string): void => {
        setActiveTab(tabName);
    };

    const handleTabClick = (tabName: string, event: MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        changeTab(tabName);
    };

    return (
        <div className="shadow-2xl">
            <div className="bg-white text-sm font-medium text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700 md:container md:mx-auto">
                <div className="w-full">
                    <ul className="flex -mb-px">
                        <li className="me-2 w-[48%]">
                            <a
                                href="#"
                                onClick={(event: MouseEvent<HTMLAnchorElement>) => handleTabClick("FEATURED", event)}
                                className={`p-4 border-b-2 block rounded-t-lg ${
                                    activeTab === "FEATURED" ? "text-red-600 hover:text-red-300 border-red-600" : "text-gray-500 hover:text-red-300"
                                }`}
                            >
                                FEATURED
                            </a>
                        </li>
                        <li className="me-2 w-[48%]">
                            <a
                                href="#"
                                onClick={(event: MouseEvent<HTMLAnchorElement>) => handleTabClick("LATEST NEWS", event)}
                                className={`p-4 border-b-2 block rounded-t-lg ${
                                    activeTab === "LATEST NEWS"
                                        ? "text-red-600 hover:text-red-300 border-red-600"
                                        : "text-gray-500 hover:text-red-300"
                                }`}
                            >
                                LATEST NEWS
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="p-4">
                    {activeTab === "FEATURED" && (
                        <div className={"text-black text-left"}>
                            <div className={"flex gap-4 items-center"}>
                                <img className="object-cover m-2 " src="https://picsum.photos/80/80?random=1" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, porro.</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img className="object-cover m-2 " src="https://picsum.photos/80/80?random=2" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, optio?</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img className="object-cover m-2 " src="https://picsum.photos/80/80?random=3" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ullam!</p>
                            </div>
                        </div>
                    )}
                    {activeTab === "LATEST NEWS" && (
                        <div className={"text-black text-left"}>
                            <div className={"flex gap-4 items-center"}>
                                <img className="object-cover m-2 " src="https://picsum.photos/80/80?random=4" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, porro.</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img className="object-cover m-2 " src="https://picsum.photos/80/80?random=5" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, optio?</p>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <img className="object-cover m-2 " src="https://picsum.photos/80/80?random=6" />
                                <p className={"font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ullam!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LatestFeatured;
