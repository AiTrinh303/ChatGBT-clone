import { Link, Outlet } from "react-router-dom"
import "./rootLayout.scss"
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
// import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to= "/">
            <span>💫🌎🪐 <h1></h1>A.I. PLANET 🪐🌎💫 </span>
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
    </ClerkProvider>
  )
}

export default RootLayout
