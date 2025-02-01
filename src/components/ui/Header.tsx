"use client";

import {
    ClerkLoaded,
    SignedIn,
    SignInButton,
    UserButton,
    useUser
} from "@clerk/nextjs";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import Form from "next/form";
import Link from "next/link";

function Header() {
    const { user } = useUser();

    // const createClerkPasskey = async () => {
    //     try {
    //         const response = await user?.createPasskey();
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <header className="flex flex-wrap gap-2 justify-between items-center px-4 py-2">
            {/* Top Row */}
            <Link href="/">
                <h1 className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0">
                    E-commerce
                </h1>
            </Link>
            <Form
                action="search"
                className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
            >
                <input
                    type="text"
                    name="query"
                    placeholder="Search products..."
                    className="w-full sm:w-2/3  bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </Form>

            <div>
                <Link
                    href="/basket"
                    className="flex-1 relative flex items-center sm:justify-start 
                sm:flex-none items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                    <TrolleyIcon className="w-6 h-6" />
                    <span>My Basket</span>
                </Link>
            </div>
            {/* User Profile */}
            <ClerkLoaded>
                <SignedIn>
                    <div className="">

                    <Link
                        href="/orders"
                        className="flex-1 relative flex items-center sm:justify-start sm:flex-none items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                        <PackageIcon className="w-6 h-6" />
                        <span>My Orders</span>
                    </Link>
                    </div>
                </SignedIn>

                {user ? (
                    <div className="flex items-center space-x-2">
                        <UserButton />

                        <div className="hidden sm:block text-xs">
                            <p className="text-gray-400">Welcome Back</p>
                            <p className="font-bold">{user.firstName}</p>
                        </div>
                    </div>
                ) : (
                    <SignInButton mode="modal" />
                )}

                {/* Pro feature for passkeys */}
                {/* {user?.passkeys?.length === 0 && (
                    <button
                        onClick={createClerkPasskey}
                        className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                        Create a passkey now
                    </button>
                )} */}
            </ClerkLoaded>
        </header>
    );
}

export default Header;
