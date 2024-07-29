import { Link, Outlet } from "react-router-dom"
import "./rootLayout.scss"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: [dark, neobrutalism],
        variables: { colorPrimary: 'red' },
        signIn: {
          baseTheme: [shadesOfPurple],
          variables: { colorPrimary: 'blue' }
        }
      }}
      publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to= "/">
            {/* <img src="/logo-queen-crown.png" alt="logo" /> */}
            <span>💫🌎🪐 A.I. PLANET 🪐🌎💫 </span>
          </Link>
          <div className="user">
              {/* <SignedOut>
                <SignInButton />
              </SignedOut> */}
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
