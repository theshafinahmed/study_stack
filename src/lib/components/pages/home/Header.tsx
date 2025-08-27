import CreateTaskButton from "./CreateTaskButton";
import LogoutButton from "./LogoutButton";

function Header() {
    return (
        <header className="z-50 fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4">
            <h1 className="text-primary font-bold text-2xl">StudyStack</h1>
            <nav className="flex items-center gap-4">
                <CreateTaskButton />
                <LogoutButton />
            </nav>
        </header>
    );
}

export default Header;
