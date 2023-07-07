const App = () => {
    const getData = async () => {
        const res = await fetch("api/server/boards");
        console.log(await res.json());
        const res1 = await fetch("api/server/boards/1");
        console.log(await res1.json());
    };
    
    const postData = () => {
        fetch("api/server/boards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ createdAt: Date.now() })
        });
    };

    return (
      <>
        <button onClick={getData}>Get Data</button>
        <button onClick={postData}>Post Data</button>
      </>
    );
};

export default App;
