import { SignInButton } from "@clerk/nextjs";
import Button from "../../custom/Button";

function GetStartedButton() {
    return (
        <SignInButton
            mode="modal"
            forceRedirectUrl={"/home"}
            signUpForceRedirectUrl={"/home"}
        >
            <Button className="btn-primary">Get Started</Button>
        </SignInButton>
    );
}

export default GetStartedButton;
