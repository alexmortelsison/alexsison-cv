import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="flex items-center justify-center bottom-0 text-sm text-muted-foreground tracking-tighter">
      &#169;{year} Alex Sison All rights reserved.
    </div>
  );
}
