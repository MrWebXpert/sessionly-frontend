import React from "react";

import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

import "./modern.css";
const Modern = () => {
    return (
        <>
            <div className="container">
                <div className="cards">
                    {/* color change progress bar */}
                    <div className="card-01">
                        <h4> Daily Sales </h4>
                        <p>
                            {" "}
                            <FaArrowDown />
                            $120{" "}
                        </p>
                        <p>Today Income</p>
                        <h5>80%</h5>
                        <div className="w3-light-grey">
                            <div className="custom-progress">
                                <div className="custom-progress-bar">
                                    <h1>......................</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-01">
                        <h4> Weekly Sales </h4>
                        <p>
                            {" "}
                            <FaArrowUp />
                            $5000{" "}
                        </p>
                        <p>Today Income</p>
                        <h5>30%</h5>
                        <div className="w3-light-grey">
                            <div className="custom-progress">
                                <div className="custom-progress-bar">
                                    <h1>......................</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-01">
                        <h4> Monthly Sales </h4>
                        <p>
                            {" "}
                            <FaArrowUp />
                            $8000
                        </p>
                        <p>Today Income</p>
                        <h5>60%</h5>
                        <div className="w3-light-grey">
                            <div className="custom-progress">
                                <div className="custom-progress-bar">
                                    <h1>......................</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-01">
                        <h4> Yearly Sales </h4>
                        <p>
                            {" "}
                            <FaArrowDown />
                            $12000{" "}
                        </p>
                        <p>Today Income</p>
                        <h5>80%</h5>
                        <div className="w3-light-grey">
                            <div className="custom-progress">
                                <div className="custom-progress-bar">
                                    <h1>......................</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="graph">
                    <img src="./images/graph.jpg" alt="" />
                </div>
                {/* graph end */}

                <div className="design">
                    <div className="sales"> 2div </div>
                    {/* sales section end */}
                    <div>3rd div </div>
                    {/* cooper start */}

                    <div className="cooper">
                        <img
                            src="https://monster-react-main.netlify.app/assets/user4-094019cb.jpg"
                            alt=""
                            height={60}
                            width={60}
                        />

                        <h4>Milan Cooper</h4>
                        <h5>Ui/Ux Designer</h5>
                        <p>Design is intelligence made visible 😎.</p>

                        <button>
                            {" "}
                            <GoPlus /> Fellow
                        </button>

                        <div className="line">
                            <div className="fellower">
                                <h5>1M</h5>
                                <p>Followers</p>
                            </div>
                            {/* foller-section end */}
                            <div className="following">
                                <h5>0</h5>
                                <p>Following</p>
                            </div>
                            {/* following section end */}

                            <div className="post">
                                <h5>1,000</h5>
                                <p>Posts</p>
                            </div>
                            {/* post end */}
                        </div>

                        {/* line end */}
                        <div className="ctn">
                            <button>Massage</button>
                            <button>Share Profile</button>
                        </div>
                    </div>

                    {/* cooper end */}
                </div>
                {/* design section end */}
            </div>
        </>
    );
};

export default Modern;
