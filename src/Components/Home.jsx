import WelcomeWidget from "./WelcomeWidget";

export default function Home({email}) {

    return (
        <>
            <h1>Your at home</h1>
            <WelcomeWidget email={email} />
        </>
    );
}