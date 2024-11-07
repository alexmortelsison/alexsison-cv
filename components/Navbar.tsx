"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, SquareCode } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between max-w-4xl px-12 py-6 mx-auto border-b border-muted-foreground lg:h-36 tracking-tighter mb-24">
      <Link
        href={"/"}
        className="font-bold flex text-lg items-center md:text-xl"
      >
        <SquareCode />
        alex<span className="dark:text-blue-600">Sison.</span>
      </Link>

      <div className="hidden md:flex gap-4 border border-slate-600 rounded-full px-6 py-2">
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? "text-blue-600 font-bold" : "text-base"
          } hover:font-semibold`}
        >
          Home
        </Link>
        <Link
          href={"/portfolio"}
          className={`${
            pathname === "/portfolio" ? "text-blue-600 font-bold" : "text-base"
          } hover:font-semibold`}
        >
          Portfolio
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=alexmortelsison@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            pathname === "/contact" ? "text-blue-600" : "text-base"
          } hover:font-semibold`}
        >
          Contact
        </a>
      </div>

      <div className="hidden md:flex">
        <ModeToggle />
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger onClick={() => setIsOpen(true)}>
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-[300px]">
            <SheetHeader className="mt-12 tracking-tighter">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="text-base flex flex-col hover:text-muted-foreground gap-2">
                <Link
                  href={"/"}
                  className={`${
                    pathname === "/" ? "text-blue-600" : "text-base"
                  } hover:font-semibold`}
                  onClick={handleClose}
                >
                  Home
                </Link>
                <Link
                  href={"/portfolio"}
                  className={`${
                    pathname === "/portfolio" ? "text-blue-600" : "text-base"
                  } hover:font-semibold`}
                  onClick={handleClose}
                >
                  Portfolio
                </Link>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=alexmortelsison@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:font-semibold"
                >
                  Contact
                </a>
              </SheetDescription>
            </SheetHeader>
            <div className="pt-24">
              <Footer />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
