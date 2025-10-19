import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="2xl:max-w-7xl md:max-w-6xl mx-auto px-4 py-20 min-h-screen mt-28 p-6">Loading search results...</div>}>
      <SearchPageClient />
    </Suspense>
  );
}
