import { useEffect, useState } from "react"
import { network, systeminfo } from "tizen-tv-webapis";

function useSystemInfo() {
  const [sysInfo, setSysInfo] = useState({
    version: "",
    macAddr: "",
    ipAddr: ""
  });

  useEffect(() => {
    setSysInfo({
      version: systeminfo.getVersion(),
      macAddr: network.getMac(),
      ipAddr: network.getIp()
    })
  }, []);

  return sysInfo;
}

export { useSystemInfo }
