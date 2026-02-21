import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        
        Count : 0,
        Count2 : 2,
    }
  }

  render() {
    const {name} = this.props;
    const {Count, Count2} = this.state;

    return (
      <div>
        <h1>hello this is user info page</h1>
        <h1>hello this is {name}</h1>
        <h1>Count : {Count}</h1>
        <h1>Count2 : {Count2}</h1>
        <button onClick={ () =>{
            this.setState ({
                Count : this.state.Count + 1,
                Count2 : this.state.Count2 + 2,

            })
        }}>
            increase count
        </button>
        <button onClick={() =>{
            
            this.setState(prevState => {
                if(prevState.Count > 0){
                    return {
                        Count: prevState.Count - 1,
                    }
                }
                return null;
            })
        
           

        }}>
            decrease the value
        </button>
      </div>
    );
  }
}

export default UserInfo;
