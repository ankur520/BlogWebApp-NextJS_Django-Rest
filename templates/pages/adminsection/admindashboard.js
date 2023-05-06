import Layout from "../../components/layout/layout";
var jwt = require('jsonwebtoken');


function Index(props) {
    console.log("admin dashboard \n \n ")
    console.log("user value = " , props.admintoken.value)

    jwt.verify(props.admintoken.value, 'youhavetochangethissecretinproduction', function(err, decoded) {
        console.log(decoded) 
        console.log(decoded) 
        console.log(decoded) 
        
        console.log("error is -> ", err)
      });

    // var decoded = jwt.verify(props.user.value, 'youhavetochangethissecretinproduction');
    // console.log(decoded) // bar

    return (
        <>
            <Layout>
                <h1>Welcome to Admin Dashboard </h1>
                <h3>{props.admintoken.value && "Welcome"}</h3>
                <h3>{!props.admintoken.value && "user.value null" }</h3>
                <h4>{props.name}</h4>
            </Layout>
        </>
    );
}

export default Index;
