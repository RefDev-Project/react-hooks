/* eslint-disable react/display-name */
import { useRef, forwardRef, useImperativeHandle } from "react";

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusBanget: () => inputRef.current.focus(),
  }));

  return <input className="border mb-10" {...props} ref={inputRef} />;
});

const ParentComponent = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.focusBanget();
  };

  return (
    <div>
      <ChildComponent value="Hello" ref={childRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
