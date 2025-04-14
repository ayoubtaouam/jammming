import { useEffect } from "react";
import { CLIENT_ID, REDIRECT_URI, TOKEN_ENDPOINT } from "../../Config/authConfig";

export default function Callback({setAccessToken}) {
    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        const verifier = localStorage.getItem("verifier");

        const body = new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
            code_verifier: verifier
        });

        fetch(TOKEN_ENDPOINT,
             {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body})
             .then(res => res.json())
             .then(data => {
                setAccessToken(data.accessToken);
                window.history.replaceState({}, null, '/');
             });
    }, []);

    return <p>Logging....</p>
}