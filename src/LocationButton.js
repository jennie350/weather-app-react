import React from "react";

export default function LocationButton() {
  return (
    <div className="col-3">
      <form>
        <input
          type="submit"
          value="Current location"
          className="locationButton"
        />
      </form>
    </div>
  );
}
