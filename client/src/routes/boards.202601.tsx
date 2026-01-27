import { createFileRoute } from "@tanstack/react-router";
import "../components/new-bubble.css";

export const Route = createFileRoute("/boards/202601")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        id="bgVideo"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="new-bubble">
        Welcome to the Message Board for the January 2026 Lion&rsquo;s Awards!
      </div>
      <div className="new-bubble">hello!</div>
      <div className="new-bubble">hi</div>
    </div>
  );
}
