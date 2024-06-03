import Additem from "@/app/TravelList/components/AddItem";
export default function TravelList() {
  const headerStyle = {
    header: {
      borderBottom: "1px solid black",
      textAlign: "center",
    },
  };
  return (
    <>
      {" "}
      <div style={headerStyle.header as React.CSSProperties}>
        <Header />
      </div>
      <Additem />
    </>
  );
}

function Header() {
  return <h1>Travel List</h1>;
}
