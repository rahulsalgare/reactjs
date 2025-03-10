import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
