import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Button from "./Button";

function CreateModal({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-xl flex items-center justify-center p-8"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="card bg-base-100 w-full max-w-96 shadow-xl"
            >
                <div className="card-body">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">Create A New Study Task</h2>
                        <Button
                            className="btn-ghost btn-sm text-error"
                            onClick={onClose}
                        >
                            <Icon
                                icon="mingcute:close-fill"
                                className="size-6"
                            />
                        </Button>
                    </div>
                    <div>
                        <label className="label">Subject</label>
                        <input
                            type="text"
                            placeholder="Enter subject"
                            className="input input-bordered"
                        />
                    </div>
                    <div>
                        <label className="label">Task</label>
                        <textarea
                            placeholder="Enter task"
                            className="textarea textarea-bordered"
                        />
                    </div>
                    <div>
                        <label className="label">Start Date</label>
                        <input type="date" className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">End Date (Optional)</label>
                        <input type="date" className="input input-bordered" />
                    </div>
                    <div className="card-actions justify-end">
                        <Button className="btn-primary">Create</Button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default CreateModal;
