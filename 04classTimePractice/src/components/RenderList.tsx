const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
const RenderList = () => {
  return (
    <div>
      <ul>
        {products.map((element, index) => {
          return (
            <li>{`On index ${index} we have value title as "${element.title}" with ID "${element.id}"`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderList;
