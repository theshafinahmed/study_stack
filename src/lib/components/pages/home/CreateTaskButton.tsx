"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Button from "../../custom/Button";
import CreateModal from "../../custom/CreateModal";

function CreateTaskButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <Button className="btn-primary" onClick={openModal}>
                <Icon icon="hugeicons:quill-write-02" className="size-6" />
            </Button>
            <AnimatePresence>
                {isModalOpen && <CreateModal onClose={closeModal} />}
            </AnimatePresence>
        </>
    );
}

export default CreateTaskButton;
