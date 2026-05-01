export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogSchema({ 
  title, 
  description, 
  date, 
  url, 
  author = "FileNexa Team" 
}: { 
  title: string; 
  description: string; 
  date: string; 
  url: string; 
  author?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": date,
    "author": {
      "@type": "Organization",
      "name": author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "FileNexa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://file-nexa.vercel.app/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
