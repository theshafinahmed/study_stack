"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Button from "../../custom/Button";

function LogoutButton() {
    const router = useRouter();

    const handleClick = () => {
        router.replace("/");
    };

    return (
        <Button onClick={handleClick} className="btn-error">
            <Icon icon="heroicons-outline:logout" className="size-6" />
        </Button>
    );
}

export default LogoutButton;
