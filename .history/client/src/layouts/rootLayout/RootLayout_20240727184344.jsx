import { Link, Outlet } from "react-router-dom"
import "./rootLayout.scss"
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>

      <div className="rootLayout">
        <header>
          <Link to= "/">
            <span>💫🌎🪐 <h3>A.I. PLANET </h3> 🪐🌎💫 </span>
          </Link>
          <div className="user">
              <SignedIn>
                <UserButton />
              </SignedIn>
          </div>
        </header>

        <main>
            <Outlet />
        </main>
      </div>
      </QueryClientProvider>
    </ClerkProvider>
  )
}

export default RootLayout
