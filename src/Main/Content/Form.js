import React from 'react'


class Form extends React.Component {
    state = {
        weight: 0,
        fName: ""
    };
    handlehangeWieght = (e) => {
        console.log(e.target.value)
        this.setState(
            { weight: e.target.value }
        )
    }
    render() {
        return (
            <>
                <input type="number" placeholder='Hello ' value={this.state.weight} onChange={this.handlehangeWieght} /> <br />

                <input type="text" placeholder='fname' value={this.state.fName} onChange={(e) => this.setState({ fName: e.target.value })} />

                <p>weight : {this.state.weight === "" ? "Enter Weight" : this.state.weight}</p>


                <p>fName : {this.state.fName === "" ? "Enter Name" : this.state.fName}</p>

            </>
        )
    }
}
 