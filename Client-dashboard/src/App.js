import React, { useEffect, useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import Chart from "./components/Charts/Chart";
import { fetchData } from "./api/fetch";
import Cards from "./components/Cards/Cards";

/* function App() {
  const [fetchedData, setfetchedData] = useState();
  useEffect(() => {
    const resp = fetchData();
    console.log(resp);
    setfetchedData({ data: resp });
  }, []);
  return (
    <div className={styles.container}>
      <Cards data={fetchedData} />
      <Chart />
    </div>
  );
} */





// class App extends React.Component {
//   state = {
//     data: {},
//   };

//   async componentDidMount() {
//     const dataState = await fetchData();
//     this.setState({ data:dataState });

//   }

//   render() {
//     const { data } = this.state;
//     console.log('from App.js',data.results[0]) 

//     return (
//       <div>
//          <h5 className="info-item">{data.name}</h5>
       
//         <Cards data={data} />
//         <Chart data={data} />
//       </div>
//     );
//   }
// }


class App extends React.Component {
  state = {
    loading: true,
    data:{}
  };

  async componentDidMount() {
    const dataState = await fetchData();

    console.log(dataState)

    //this.setState({ data:dataState.data.data[0],loading:false });
    // const url = "https://api.randomuser.me/";
    // const response = await fetch(url);
    // const data = await response.json();
  // this.setState({ person: data.results[0], loading: false });
  this.setState({ data:dataState,loading:false });
  console.log(this.state.data)
  }

  render() {

    if (this.state.loading) {
      return <div>loadingg...</div>;
    }
        const { data } = this.state;
        console.log('from App.js',data)
    
        return (
          <div>
             {/* <h5 className="info-item">{data.name}</h5> */}
            <Cards data={data} />
            <Chart data={data} />
            {/* <h1>{JSON.stringify(data,null,2)}</h1> */}

          </div>
        );
      }
}
export default App;
