
export default function Header() {

    const navItems = [
        {
            title: 'Demos',
            link: '/demos'
        },
        {
            title: 'Pages',
            link: '/pages'
        },
        {
            title: 'Support',
            link: '/support'
        },
        {
            title: 'Contact',
            link: '/contact'
        }
    ];
    
    return (
        <header className="flex w-full py-2 justify-between items-end text-nowrap">
            <h1 className="font-bold text-2xl company-logo">
                Brainwave.io
            </h1>

            <nav className="items-end flex h-full text-base  text-black font-medium">
                <ul className="flex justify-between w-full items-end space-x-6 border-r border-black px-2">
                    {navItems.map(item =>(
                                     <li className="flex w-full text-center">
                                     <a className=" w-full px-2">
                                         {item.title}
                                     </a>
                                 </li>
                    ))}
   
                </ul>
                <ul className="flex justify-between w-full items-end space-x-4 px-2 ">
                    <li className="flex w-full text-center px-2">
                        <button className=" w-full">
                            Sign In
                        </button>
                    </li>
                    <li className=" flex w-full text-center ">
                        <button className="text-nowrap text-white bg-blue py-2 px-4 rounded-lg translate-y-2 hover:bg-opacity-20 transition duration-500 hover:text-blue">
                            Sign Up
                        </button>
                    </li>

                </ul>
            </nav>
        </header>
    );
}