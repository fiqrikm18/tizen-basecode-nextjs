import {useEffect, useState} from "react";
import {network, systeminfo} from "tizen-tv-webapis";

export default function Version() {
    const [version, setVersion] = useState("");
    const [mac, setMac] = useState("");

    useEffect(() => {
        setVersion(systeminfo.getVersion)
        setMac(network.getMac)
    }, []);

    return (
        <div>
            <p>System Version: {version}</p>
            <p>Mac Address: {mac}</p>
        </div>
    )
}