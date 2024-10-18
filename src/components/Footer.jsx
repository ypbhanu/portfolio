import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
export const Footer = () => {
    return (
        <div className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2021 Y.Bhanu Prasad. All Rights Reserved.</p>
            <div className="flex justify-center">
                <div className="flex justify-center m-2">
                    <MdOutlineEmail />
                </div>
                <p className="p-1">ybhanu@gmail.com</p>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center m-2">
                    <MdLocalPhone />
                </div>
                <p className="pt-1">+91 9912996788</p>
            </div>
        </div>
    )
};