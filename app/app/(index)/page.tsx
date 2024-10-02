import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function LandingPage() {
    return (
        <div><LoginLink>Sign in</LoginLink> <RegisterLink>Sign up</RegisterLink> <LogoutLink>Logout</LogoutLink></div>
    )
}