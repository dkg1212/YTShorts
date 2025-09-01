"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, Menu, X, Search } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <nav className="flex items-center justify-between h-14 px-4 border-b border-border sticky top-0 bg-background z-50">
      {/* Logo */}
      <div>
        <Link href="/" className="font-bold text-xl">
          YT<span className="text-red-500">Shorts</span>
        </Link>
      </div>

      {/* Search Input */}
      <div className="hidden md:flex w-1/2 items-center gap-2">
        <Input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button variant="secondary" onClick={handleSearch}>
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <SignedIn>
          <Link href="/upload">
            <Button>
              <Plus className="mr-1 h-4 w-4" /> Create
            </Button>
          </Link>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <ModeToggle />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-background border-t border-border flex flex-col items-start p-4 space-y-4 md:hidden">
          <div className="flex w-full gap-2">
            <Input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch}>
              <Search className="w-4 h-4" />
            </Button>
          </div>

          <SignedIn>
            <Link href="/upload" className="w-full">
              <Button className="w-full">
                <Plus className="mr-1 h-4 w-4" /> Create
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="w-full">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
