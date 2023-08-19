import React from "react";
const Modal = ({ showprop, setShowprop }) => {
    function onClose() {
        setShowprop(false)
    }
    return (
        <div>
            <button onClick={() => { setShowprop(true) }}>Show Modal</button>
            {
                showprop &&
                <div className="model-overlay" onClick={onClose}>
                    <button className="model-close" onClick={onClose}>Close</button>
                    <p className="model-p">This is the content of the modal</p>
                </div>
            }
        </div>
    )
}
export default Modal