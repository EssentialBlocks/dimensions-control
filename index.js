import { useState, useEffect } from "@wordpress/element";

export default function DimensionsControl({
  top,
  right,
  bottom,
  left,
  label,
  onChange,
}) {
  const [dimensions, setDimensions] = useState({
    top,
    right,
    bottom,
    left,
  });

  const [isLinked, setIsLinked] = useState(false);

  const onButtonClick = () => setIsLinked(!isLinked);

  const onInputChange = (event) => {
    let { name, value } = event.target;
    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value,
      });
    } else {
      setDimensions((prevDimensions) => ({ ...prevDimensions, [name]: value }));
    }
    // console.log({ dimensions });
  };

  useEffect(() => {
    onChange(dimensions);
    // console.log("---inside useEffect", { dimensions });
  }, [dimensions]);

  return (
    <div className="dimention-container">
      <div className="dimention-label">{label}</div>

      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="number"
            name="top"
            value={dimensions.top}
            onChange={onInputChange}
          />
          <label className="dimentions-input-label">Top</label>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            name="right"
            value={dimensions.right}
            onChange={onInputChange}
          />
          <label className="dimentions-input-label">Right</label>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            name="bottom"
            value={dimensions.bottom}
            onChange={onInputChange}
          />
          <label className="dimentions-input-label">Bottom</label>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            name="left"
            value={dimensions.left}
            onChange={onInputChange}
          />
          <label className="dimentions-input-label">Left</label>
        </div>
        <button
          className={`linked-btn components-button is-button dashicons dashicons-${
            isLinked ? "admin-links is-primary" : "editor-unlink is-default"
          }`}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
}
