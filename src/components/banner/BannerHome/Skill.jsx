function Skill(props) {
  return (
    <div className="skill-item">
      <div className="skill-item-main">
        <div className="skill-item-main__icon">
          <img src={props.icon} />
        </div>
        <div className="skill-item-main__title">{props.title}</div>
      </div>
    </div>
  );
}

export default Skill;
