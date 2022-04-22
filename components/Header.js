import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";

function Header() {
	return (
		<header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10">
			{/* Left */}
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
			</div>

			{/* Middle */}
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input className="outline-none border-none pl-5 bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your Search" />
				<SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer md:mx-2" />
			</div>

			{/* Right */}
			<div className="flex items-center space-x-4 justify-end text-gray-500">
				<p className="hidden md:inline cursor-pointer hover:text-gray-700 hover:underline">Become a host</p>
				<GlobeAltIcon className="h-6 hover:text-gray-700 cursor-pointer" />
				<div className="flex items-center space-x-2 border-2 p-2 rounded-full">
					<MenuIcon className="h-6 hover:text-gray-700 cursor-pointer" />
					<UserCircleIcon className="h-6 hover:text-gray-700 cursor-pointer" />
				</div>
			</div>
		</header>
	);
}
export default Header;
