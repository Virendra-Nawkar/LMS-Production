import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | StudyTree`;

    // Cleanup if needed
    return () => {
      document.title = "StudyTree"; // Reset to default when component unmounts
    };
  }, [title]);
};

export default useDocumentTitle;
