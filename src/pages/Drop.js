import React, { useCallback, useState } from "react";
import cuid from "cuid";
import Dropzone from "../organism/DropZone";
import ImageGrid from "../organism/ImageGrid";

const Drop = () => {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <div className="flex justify-center h-auto mt-20 flex-col ">
      <div className="w-1/2 m-auto border border-dashed border-gray-600">
        <h1 className="text-center">Drag and Drop</h1>
        <Dropzone className="" onDrop={onDrop} accept={"image/*"} />
      </div>

      <ImageGrid images={images} />
    </div>
  );
};

export default Drop;
