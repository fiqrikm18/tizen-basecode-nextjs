import dynamic from "next/dynamic";

export default function Home() {
    const Version = dynamic(() => import("../components/version"), {ssr: false});

  return (
    <>
      <main style={{
          background: "#1c1c1c",
          color: "#fff",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
      }}>
          <Version/>
      </main>
    </>
  )
}
