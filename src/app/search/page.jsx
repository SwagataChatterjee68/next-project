import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mt-28 p-6">Loading search results...</div>}>
      <SearchPageClient />
    </Suspense>
  );
}
