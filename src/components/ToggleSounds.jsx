import { memo } from "react";

function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔊" : "🔇"}
    </button>
  );
}

// Memo the ToggleSounds component to avoid unnecessary re-renders
export default memo(ToggleSounds);
