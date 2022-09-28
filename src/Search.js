import React from "react";

export default function Search() {
  return (
    <div className="col-9">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="🔍 Type city and press Enter"
        />
      </form>
    </div>
  );
}
