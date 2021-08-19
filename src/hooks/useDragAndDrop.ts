import { useState } from "react";

export default function useDragAndDrop() {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [fileDropError, setFileDropError] = useState<string>("");

  const onDragOver = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  return {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  };
}
