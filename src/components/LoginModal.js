import { Modal, Button } from "react-bootstrap";
import { Button2 } from "./Button2";

function LoginModal({ handleClose }) {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="username">
          <p>Username/Email</p>
          <input type="text" placeholder="example@gmail.com"></input>
        </div>
        <div className="password">
          <p>Password</p>
          <input type="password"></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button2 variant="primary" onClick={handleClose}>
          Login
        </Button2>
      </Modal.Footer>
    </Modal>
  );
}
