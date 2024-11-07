import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="text-muted-foreground flex items-center justify-center max-w-4xl py-6 mx-auto border-t border-muted-foreground tracking-tighter">
      &#169;{year} Alex Sison All rights reserved.
    </div>
  );
}
