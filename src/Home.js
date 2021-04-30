import React from 'react';
import Alert from 'react-bootstrap/Alert';


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    handleSuccessfulAuth = (data) => {
        //update parent component 
        this.props.history.push('/users');     //redirect user if successfully login
    }

    render(){

        if(this.props.loggedInStatus !== "unauthorized"){
            return (
                <h2>Welcome To Our Site</h2>
            )
        }else{
            return(
                <Alert variant="danger">
                <Alert.Heading>Unauthorized</Alert.Heading>
                <p>
                    you should login to our site to enjoy our services.
                </p>
                
                </Alert>
            );
        }

    }
}

export default Home;
