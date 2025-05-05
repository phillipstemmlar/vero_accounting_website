import React from "react";
import Modal from "react-modal";

const ServiceDialog = ({ showDialog, title, description, img, items, onClose }) => {
    const imageWidth = 250;
    const imageHeight = 300;
    const customStyles = {
        content: {
            top: "20%",
            left: "25%",
            right: "25%",
            bottom: "auto",
            minHeight: "400px",
        },
        overlay: {
            backgroundColor: "var(--secondary-color-80)",
        },
    };

    return (
        <Modal
            isOpen={showDialog}
            onAfterOpen={() => {
                console.log("AFTER MODAL OPEN");
            }}
            onRequestClose={() => onClose()}
            style={customStyles}
            contentLabel={title}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <div className="fg-primary d-flex flex-col justify-content-start align-items-center">
                <h2 className="font-semibold my-4 text-2xl text-center">{title}</h2>
                <p className="text-md font-medium text-center w-70p">{description}</p>
                <div className="d-flex flex-row">
                    <img
                        alt="card img"
                        className="flex-0 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mr-20 my-10"
                        width={imageWidth}
                        height={imageHeight}
                        src={img}
                    />
                    <ul className="flex-1 d-flex flex-col justify-content-start align-items-start mt-10">
                        {items
                            .filter((item) => item != null && item != "")
                            .map((item, i) => {
                                return (
                                    <li key={i} className="text-md font-medium fg-secondary service-item mb-2">
                                        {item}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </Modal>
    );
};

export default ServiceDialog;
