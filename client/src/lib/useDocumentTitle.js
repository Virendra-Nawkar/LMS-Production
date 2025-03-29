import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | LMS Virpages`;

    // Cleanup if needed
    return () => {
      document.title = "LMS - VirPages"; // Reset to default when component unmounts
    };
  }, [title]);
};

export default useDocumentTitle;
