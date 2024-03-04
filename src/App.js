import "./App.css";
import { useGetAllPostQuery, useGetPostByIdQuery } from "./services/post";
function App() {
  // const responseInfo = useGetAllPostQuery();
  const responseInfo = useGetPostByIdQuery(5);
  // console.log("Response Information:", responseInfo);
  // console.log("Data", responseInfo.data);

  if (responseInfo.isLoading) return <div>Loading....</div>;
  // if (responseInfo.isError) return <div>An error Occured</div>;
  return (
    // <div className="App">
    //   <h1> Redux Toolkit- RTK Query (Get All Data)</h1>
    //   {responseInfo.data.map((post, i) => (
    //     <div key={i}>
    //       <h2>
    //         {post.id} {post.title}
    //       </h2>
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
    //   ))}
    // </div>
    <div className="App">
      <h1>Get Single Data by Id </h1>
      <h2>
        {responseInfo.data.title}
        {responseInfo.data.body}
      </h2>
    </div>
  );
}

export default App;
