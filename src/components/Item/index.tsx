import "./index.css"

type ItemPropsAhihi = {
  label: string;
}

const Item = (props: ItemPropsAhihi) => {
  return (
    <div className={"item-label"}>
      {props.label}
    </div>
  );
};

export default Item;
