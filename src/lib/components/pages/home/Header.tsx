import { Icon } from "@iconify/react";
import Button from "../../custom/Button";
import CreateTaskButton from "./CreateTaskButton";

function Header() {
    return (
        <header className="w-full h-16 flex items-center justify-between px-4">
            <h1 className="text-primary font-bold text-2xl">StudyStack</h1>
            <nav className="flex items-center gap-4">
                <CreateTaskButton />
                <Button className="btn-neutral">
                    <Icon icon="tabler:menu-deep" className="size-6" />
                </Button>
            </nav>
        </header>
    );
}

export default Header;
