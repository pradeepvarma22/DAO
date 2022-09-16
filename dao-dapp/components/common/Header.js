import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';



export default function Header() {


    function changeMe() {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");


    }

    return (
        <div>
            <Head>
                <title>DAO</title>
                <meta name="description" content="DAO" />
                <link rel="icon" href="/favicon.ico" />


                <div>
                    <div className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">


                        <div className="flex items-center justify-between mb-4 md:mb-0">
                            <h1 className="leading-none text-2xl text-grey-darkest">
                                <a className="no-underline text-grey-darkest hover:text-black" href="#">

                                    <img src="./dao-icon.png" width="50" height="50" />
                                </a>
                            </h1>

                            <a className="text-black hover:text-orange md:hidden" href="#">
                                <i className="fa fa-2x fa-bars"></i>
                            </a>
                            DAO
                        </div>


                        <form className="mb-4 w-full md:mb-0 md:w-1/4">
                            <label className="hidden" for="search-form">Search</label>
                            <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
                            <button className="hidden">Submit</button>
                        </form>

                        <nav>
                            <ul className="list-reset md:flex md:items-center">
                                <li className="md:ml-4">
                                    {/* <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="/"> */}
                                    <Link href="/">
                                        DAO
                                    </Link>

                                    {/* </a> */}
                                </li>
                                <li className="md:ml-4">
                                    <Link href="/addproposal">


                                        Add Proposal

                                    </Link>
                                </li>
                                <li className="md:ml-4">
                                    {/* <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="/token"> */}
                                    <Link href="/token">
                                        Token
                                    </Link>
                                    {/* </a> */}
                                </li>

                            </ul>
                        </nav>


                    </div>
                </div>




            </Head>
        </div>
    )
}