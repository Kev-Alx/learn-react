import ListItem from "./ListItem.js";

const List = (props) => {
  return (
    <>
      <h2 style={{ marginTop: "-0.75rem" }}>Users: </h2>
      {props.listData.map((item) => (
        <ListItem data={item} key={item.name} />
      ))}
    </>
  );
};

export default List;
