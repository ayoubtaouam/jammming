import { Button } from "react-bootstrap";
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, SCOPES } from "../../Config/authConfig";
import { generateCodeChallenge, generateCodeVerifier } from "../../Config/pkce"

const handleLogin = async () => {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const url = `${AUTH_ENDPOINT}?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&code_challenge_method=S256&code_challenge=${challenge}`;
    window.location = url;
};

export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Button variant="success" size="lg" onClick={handleLogin}>Login with Spotify</Button>
        </div>
            );
}