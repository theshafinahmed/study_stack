import { Icon } from "@iconify/react";
import Button from "./Button";

function StudyCard({
    subject,
    task,
    createdAt,
    dueDate,
}: {
    subject: string;
    task: string;
    createdAt: string;
    dueDate: string;
}) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{subject}</h2>
                    <Button className="btn-ghost btn-sm text-error">
                        <Icon
                            icon="mingcute:close-fill"
                            width="24"
                            height="24"
                        />
                    </Button>
                </div>
                <p className="whitespace-pre-wrap">{task}</p>
                <div className="card-actions justify-between">
                    <div className="flex flex-col opacity-70">
                        <p>Created At: {createdAt}</p>
                        <p>Due Date: {dueDate}</p>
                    </div>
                    <Button className="btn-primary">Done</Button>
                </div>
            </div>
        </div>
    );
}

export default StudyCard;
