const Child1 = (props: { avatar: string; title: string }) => {
    const { avatar, title } = props;
    return (
      <div style={{ width: "200px", height: "250px", marginRight:'10px' }}>
        <img src={avatar} style={{ width: "100%", height: "100%" }} />
        <p>{title}</p>
      </div>
    );
  };
  export default Child1;
  