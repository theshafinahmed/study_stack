import { Icon } from "@iconify/react";
import Button from "./Button";

function StudyCard() {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">Subject</h2>
                    <Button className="btn-ghost btn-sm text-error">
                        <Icon
                            icon="mingcute:close-fill"
                            width="24"
                            height="24"
                        />
                    </Button>
                </div>
                <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                </p>
                <div className="card-actions justify-between">
                    <div className="flex flex-col opacity-70">
                        <p>Created At: </p>
                        <p>Due Date: </p>
                    </div>
                    <Button className="btn-primary">Done</Button>
                </div>
            </div>
        </div>
    );
}

export default StudyCard;
