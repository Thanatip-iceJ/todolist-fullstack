import Item from "./Item";

function List() {
  return (
    <ul className="flex flex-col gap-2">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ul>
  );
}

export default List;
