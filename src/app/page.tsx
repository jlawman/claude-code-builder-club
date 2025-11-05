export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <style jsx>{`
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .penguin {
          display: inline-block;
          animation: jump 0.6s ease-in-out infinite;
        }
        .penguin:nth-child(2) {
          animation-delay: 0.2s;
        }
        .penguin:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>
      <div className="text-8xl">
        <span className="penguin">🐧</span>
        <span className="penguin">🐧</span>
        <span className="penguin">🐧</span>
      </div>
      <h1 className="text-6xl font-bold">claude code builder club</h1>
      <div className="text-8xl">
        <span className="penguin">🐧</span>
        <span className="penguin">🐧</span>
        <span className="penguin">🐧</span>
      </div>
    </div>
  );
}
