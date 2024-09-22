"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose
} from './shadcn/dialog';
import { Button } from './shadcn/button';

// Adding types for `closeDrawer`
interface LogoutButtonProps {
  closeDrawer?: () => void;
}

export default function LogoutButton({ closeDrawer }: LogoutButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from cookies
    document.cookie = 'token=; path=/; max-age=0;'; // Deleting the token

    // Close the dialog and trigger the drawer close if in mobile
    setIsOpen(false);
    if (closeDrawer) closeDrawer();

    // Redirect to the login page
    router.push('/auth/login');
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full bg-red-500 text-white hover:bg-red-600 transition">
            Logout
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>Are you sure you want to log out?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleLogout}>Logout</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
