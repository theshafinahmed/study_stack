import { Icon } from "@iconify/react";
import Button from "../../custom/Button";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4">
            <h1 className="text-primary font-bold text-2xl">StudyStack</h1>
            <nav className="flex items-center gap-4">
                <Button className="btn-secondary">
                    <Icon icon="hugeicons:quill-write-02" className="size-6" />
                </Button>
                <Button className="btn-neutral">
                    <Icon icon="tabler:menu-deep" className="size-6" />
                </Button>
            </nav>
        </header>
    );
}

export default Header;
