import TabComponent from "../components/tabComponent";

const Desktop = () => {
  const data: Map<string, Array<string>> = new Map();

  data.set("ab_statements", ["abc", "def", "ghi", "jkl", "mno"]);
  data.set("view_statements", ["abc", "def", "ghi", "jkl", "mno"]);
  data.set("ddl_statements", ["abc", "def", "ghi", "jkl", "mno"]);
  data.set("error_statements", ["abc", "def", "ghi", "jkl", "mno"]);

  return (
    <div>
      {Array.from(data.keys()).map((element) => (
        <TabComponent element={element} value={data.get(element)} />
      ))}
    </div>
  );
};

export default Desktop;
