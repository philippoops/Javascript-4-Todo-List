function Button({ onClick, children, btnStyle }) {
  return (
    <div>
      <button onClick={onClick} className="button-9">
        <span style={{ color: btnStyle }}>{children}</span>
      </button>
    </div>
  );
}

export default Button;
