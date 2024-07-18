
export default function Animatext({ text }){
  return (
    <div className="relative">
      <div className="animate-slide-in text-white font-thin p-4">
        {text}
      </div>
    </div>
  );
};
