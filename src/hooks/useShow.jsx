import { useState } from "react";

export const useShow = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  return {
    show,
    handleShow,
    handleHide,
  };
};
