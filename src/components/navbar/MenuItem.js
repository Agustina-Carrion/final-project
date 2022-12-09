function MenuItem({ text, onClick }) {
  return (
    <div className="inline-flex items-center border-b-2 border-cyan-400 px-1 pt-1 text-lg font-medium text-white">
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default MenuItem;
