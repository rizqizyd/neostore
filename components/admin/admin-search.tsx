"use client";

import { useState, useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";

const AdminSearch = () => {
  const pathname = usePathname();
  const formActionUrl = pathname.includes("/admin/orders")
    ? "/admin/orders"
    : pathname.includes("/admin/products")
    ? "/admin/products"
    : "/admin/users";

  const searchParams = useSearchParams();
  const [queryValue, setQueryValue] = useState(searchParams.get("query") || "");

  useEffect(() => {
    setQueryValue(searchParams.get("query") || "");
  }, [searchParams]);

  // Alternative search without reload the page (client side)
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (queryValue) {
      params.set("query", queryValue);
    } else {
      setQueryValue("");
      params.delete("query");
    }
    router.push(`${formActionUrl}?${params}`);
  };

  return (
    // Search with reload the page
    // <form action={formActionUrl} method="GET">
    <form onSubmit={handleSearch}>
      <Input
        type="search"
        placeholder="Search"
        name="query"
        value={queryValue}
        onChange={e => setQueryValue(e.target.value)}
        className="md:w-[100px] lg:w-[300px]"
      />
      <button className="sr-only" type="submit">
        Search
      </button>
    </form>
  );
};

export default AdminSearch;
