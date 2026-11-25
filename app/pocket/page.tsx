import Navbar from "../components/Navbar";

export default function PocketPage() {
  return (
    <>
      <Navbar />
      <iframe
        src="/pocketledger.html"
        title="PocketLedger app"
        style={{ border: 0, width: "100%", height: "calc(100vh - 58px)", display: "block" }}
      />
    </>
  );
}