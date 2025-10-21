"use client";

export default function Page() {
  return (
    <div style={{height: "100vh", margin: 0}}>
      <iframe
        src="/original.html"
        style={{width: "100%", height: "100%", border: "none"}}
        title="Original HTML"
      />
    </div>
  );
}
