import { useId } from "react";

function UseId() {
  const nameId = useId();
  return (
    <div>
      <label htmlFor={`${nameId}+1`}>Nama</label>
      <input id={`${nameId}+1`} type="text" className="border" />
      <label htmlFor={`${nameId}+2`}>Alamat</label>
      <input id={`${nameId}+2`} type="text" className="border" />
    </div>
  );
}

export default UseId;
