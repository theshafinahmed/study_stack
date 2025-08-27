import { SignOutButton } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Button from "../../custom/Button";

function LogoutButton() {
    return (
        <SignOutButton>
            <Button className="btn-error">
                <Icon icon="heroicons-outline:logout" className="size-6" />
            </Button>
        </SignOutButton>
    );
}

export default LogoutButton;
