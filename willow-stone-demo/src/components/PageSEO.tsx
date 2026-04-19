import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
}

const PageSEO = ({ title, description }: PageSEOProps) => {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);

  return null;
};

export default PageSEO;