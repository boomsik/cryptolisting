import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ColectModal.css";

function ColectModal({ close, coinName, coinToken, del, idElement }) {
    return (
        <div
            className="modal show"
            style={{
                display: "block",
                position: "absolute",
                top: "500px",
                // left: "40px",
            }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton backdrop="static" onClick={close}>
                    <Modal.Title>
                        {coinName}/{coinToken}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className="custom-button">Token name: {coinToken}</p>
                    <p className="custom-button">Twitter: {coinToken}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => del(idElement)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ColectModal;

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// function ColectModal({ close, coinName, coinToken, del }) {
//     return (
//         <div
//             className="modal show"
//             style={{
//                 display: "block",
//                 position: "absolute",
//                 top: "500px",
//                 // left: "40px",
//             }}
//         >
//             <Modal.Dialog>
//                 <Modal.Header closeButton backdrop="static" onClick={close}>
//                     <Modal.Title>{coinName}</Modal.Title>
//                 </Modal.Header>

//                 <Modal.Body>
//                     <p>{coinToken}</p>
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={close}>
//                         Close
//                     </Button>
//                     <Button variant="danger">Delete</Button>
//                 </Modal.Footer>
//             </Modal.Dialog>
//         </div>
//     );
// }

// export default ColectModal;
