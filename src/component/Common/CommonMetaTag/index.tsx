// Define the props interface for the Metadata component
interface Props {
  seoTitle: string; // The SEO title for the page
  seoDescription: string; // The SEO description for the page
}

// Define and export the Metadata functional component
export default function Metadata({ seoTitle, seoDescription }: Props) {
  return (
    <>
      {/* Set the page title using the seoTitle prop */}
      <title>{seoTitle + " | ecoSYS"}</title>

      {/* Set the meta description using the seoDescription prop */}
      <meta name="description" content={seoDescription} />
    </>
  );
}
