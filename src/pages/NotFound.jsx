import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <div>
      <p>此頁面不存在</p>
    </div>
  );
};

export default NotFound;
