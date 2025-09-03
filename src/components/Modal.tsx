import React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
        },
        exit: {
            y: "100vh",
            opacity: 0,
        },
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 bg-secondary/50 backdrop-blur-[5px]"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="relative z-10 rounded-xl shadow-xl flex flex-col items-center"
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Modal
