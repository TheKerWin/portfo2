import { ABOUT_ME_TEXT, TITLE_TEXT_STYLE, SUBTITLE_TEXT_STYLE } from "@/app/constants/apiConstants"
import React from "react";
import styles from "./style.module.css"; // Uncomment this line
import { OverlapWords } from "../overlapWords";
import Image from "next/image";
import profilePic from "@/app/img/ProfileCircleFinal.png";

const AboutMe = () => {
    
        return (
            <div className="flex items-center justify-center">
            <div className="flex-auto mt-5 mr-20">
                <Image
                src={profilePic}
                alt={"Kerwin Mercado"}
                 width={500}
                 height={500}
                className="object-cover rounded-lg overflow-hidden shadow-md"
                />
            </div>
            <div className="flex-grow mt-20 text-center uppercase leading-none mb-24">
                <OverlapWords
                stylePhrasePairs={[
                    [TITLE_TEXT_STYLE, "About"],
                    [SUBTITLE_TEXT_STYLE, "Myself"]
                ]}
                />
            </div>
            <div className="ml-7 max-w-2xl">
                <p className="text-center">
                    Hello, Kerwin Here! {ABOUT_ME_TEXT}
                </p>
            </div>
            </div>
        );
    }

export default AboutMe;