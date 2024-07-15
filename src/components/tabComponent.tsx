const TabComponent = ({
  element,
  value,
}: {
  element: string;
  value: Array<string> | undefined;
}) => {
  return (
    <div>
        <p>
        {element}
        </p>
        <ul>
        {value!.map((inner) => (
            <li>{inner}</li>
        ))}
        </ul>
    </div>
  );
};

export default TabComponent;
