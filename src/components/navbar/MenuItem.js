function MenuItem({ text }) {
  return (
    <div
      className="inline-flex items-center border-b-2 border-cyan-400 px-1 pt-1 text-lg font-medium text-gray-900"
    >
      {text}
    </div>
  );
}

export default MenuItem;
