import React from 'react'

const page = () => {
    return (
        <>
            <header style={{ top: 0 }} className="fixed z-50 w-full bg-white" id="header_container">
                <div className="flex flex-row items-center px-4 py-4 h-18 md:px-10">
                    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                        <img src="/logo.png" className="w-10 h-10" alt="" />
                        <span className="ml-3 text-3xl font-bold text-black">Sessionly</span>
                    </a>
                    <div className="flex justify-end flex-1">
                        <div className="hidden p-2 mr-2 cursor-pointer language-currency-select lg:inline-block">
                            <div className="flex text-gray2 hover:text-gray1">
                                <span>EnglishUSD $</span>
                            </div>
                        </div>
                        <a className="hidden p-2 mr-2 lg:inline-block" href="/en/teachers/">
                            <div className="small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-teachers">Find a teacher</div>
                        </a>
                        <a className="hidden p-2 mr-4 md:inline-block" href="/en/group-class/english">
                            <div className="small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-groupclass">Group Class</div>
                        </a>
                        <a className="hidden p-2 mr-2 lg:inline-block" href="/en/community/for-you">
                            <div className="small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-community">Community</div>
                        </a>
                        <a className="hidden p-2 mr-2 lg:inline-block" href="https://teach.italki.com/application">
                            <div className="small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-application">Become a teacher</div>
                        </a>
                        <div className="hidden p-2 mr-2 cursor-pointer lg:inline-block small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-signin">Log in</div>
                        <div className="hidden p-2 cursor-pointer lg:inline-block small-secondary text-gray2 hover:text-gray1" data-cy="hp-menu-signup">Sign up</div>
                    </div>
                </div>
            </header>

            <div className="flex items-center justify-between w-4/5 py-40 mx-auto md:px-6">
                <div className="">
                    <h1 className="text-4xl font-bold " style={{ lineHeight: '60px' }}>Become fluent in any language</h1>
                    <ul className="grid text-sm font-medium list-none gap-y-1 mt-7">
                        <li className="flex items-center">
                            <div className="shrink-0 me-3">
                                <img height="12" width="12" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png" alt="" />
                            </div>
                            <span>Take customizable 1-on-1 lessons trusted by millions of users</span>
                        </li>
                        <li className="flex items-center">
                            <div className="shrink-0 me-3">
                                <img height="12" width="12" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png" alt="" />
                            </div>
                            <span>Learn from certified teachers that fit your budget and schedule</span>
                        </li>
                        <li className="flex items-center">
                            <div className="shrink-0 me-3">
                                <img height="12" width="12" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png" alt="" />
                            </div>
                            <span>Connect with a global community of language learners</span>
                        </li>
                    </ul>
                    <button type="button" className="mt-5 ant-btn w-50 sm:mt-7 sm:mx-auto bg-[#10b981] py-3 px-6 rounded">
                        <span>Start now</span>
                    </button>
                </div>
                <div className="flex items-center ">
                    <picture>
                        <source srcSet="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w_1.5x.webp" type="image/webp" />
                        <img height="360" width="560" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w.png" alt="" />
                    </picture>
                </div>
            </div>
        </>
    )
}

export default page 