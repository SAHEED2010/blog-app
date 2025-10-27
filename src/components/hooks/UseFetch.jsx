import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch data");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            console.error("Fetch error:", err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  // ✅ Expose setData so Home can update after deleting
  return { data, isPending, setData };
};

export default UseFetch;
