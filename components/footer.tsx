import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="flex h-full w-full flex-row bottom-o bg-slate-800 text-white text-center align-middle">
            <div className="flex justify-center items-center w-32 text-sm md:w-60 md:h-full">
                2024 Shido Nakajima, updated Feb. 2026
            </div>

            <div className="flex w-full">
                {/* Spacing between copyright and link icons */}
                <div className="hidden h-auto w-full grow items-center md:block"></div>

                <div className="flex grow flex-row justify-between items-center gap-3 md:px-3">
                    {/* Linkedin icon and hyperlink */}
                    <Link href="https://www.linkedin.com/in/shido-nakajima/">
                        <FaLinkedin fontSize={40} />
                    </Link>

                    {/* Github icon and hyperlink */}
                    <Link href="https://github.com/sNakajima1632">
                        <FaGithub fontSize={40}/>
                    </Link>

                    {/* Mail icon and email hyperlink */}
                    <Link href="mailto:nakajima1632@gmail.com">
                        <TbMailFilled fontSize={40}/>
                    </Link>
                    
                    {/* Mail icon and email hyperlink */}
                    <Link href="tel:+15128259581">
                        <FaPhoneAlt fontSize={30}/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}