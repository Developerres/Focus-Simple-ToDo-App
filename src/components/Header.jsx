import pc from "../assets/images/pc.svg";

function Header() {
  return (
    <header>
      <h1>Focus</h1>
      <p>let your focus on value things</p>
      <div className="pc-image">
        <img src={pc} alt="User Exp" />
      </div>
    </header>
  );
}

export default Header;
