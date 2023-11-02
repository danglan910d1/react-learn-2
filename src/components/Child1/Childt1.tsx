const Child1 = (props: {isSmallAvatar?: boolean, avatar: string; title: string }) => {
    const { avatar, title, isSmallAvatar} = props;
    return (
      <div style={{ width: "200px", height: "250px", marginRight:'10px' }}>
        <img src={avatar} style={{ width: isSmallAvatar ? "50px" : "100%", height:isSmallAvatar ? "50px" : "100%"  }} />
        <p>{title}</p>
      </div>
    );
  };
  export default Child1;
  