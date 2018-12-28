import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchField, requestRobots}  from '../action';

const mapStateToProps =(state) =>{
    return {
        // searchField: state.searchField    //if only one property (or reducer) searrchfield
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}//mapStateToProps= what state to listen to and send down as props 

const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), // could be  any name not just  onSearchChange. look at tutorial video
        onRequestRobots: () => dispatch(requestRobots())
    }
}//mapDispatchToProps= what props to listen to that are actions that should be dispatched

class App extends Component{
    // constructor(){
    //     super()
    //     this.state ={
    //                     robots: [],
    //                 }
    // }

    // onSearchChange=(event)=>{
    //     // console.log(event.target.value)

    //     this.setState({searchfield: event.target.value})  //change state 
    // } 

    componentDidMount(){
        // alert("mounted")
        this.props.onRequestRobots();

    }

    render(){
        // const {robots} = this.state; //object detructoring
        const {searchField, onSearchChange, robots, isPending} = this.props;   //object detructoring

        const filteredRobots = robots.filter(robot  =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
   
        return isPending ? <h1>Loading</h1> : (
                                                        <div className='tc'>
                                                        <h1>RoboFriends</h1>
                                                        <SearchBox searchChange={onSearchChange}/>
                                                        <Scroll>
                                                            <ErrorBoundry>
                                                                <CardList robots={filteredRobots} />
                                                            </ErrorBoundry>
                                                        </Scroll>
                                                        </div>
                                                )
                                                
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);