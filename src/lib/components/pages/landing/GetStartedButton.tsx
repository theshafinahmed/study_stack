"use client";

import { useRouter } from "next/navigation";
import Button from "../../custom/Button";

function GetStartedButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/home");
    };

    return (
        <Button className="btn-primary" onClick={handleClick}>
            Get Started
        </Button>
    );
}

export default GetStartedButton;
