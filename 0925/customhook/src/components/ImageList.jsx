import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ imageList }) {
  return (
    <ul>
      {imageList.map((imgData) => {
        return (
          <li key={imgData.id} style={{ listStyle: "none" }}>
            <ImageItem imgData={imgData} />
          </li>
        );
      })}
    </ul>
  );
}
