const React = require('react');


// const userInfo = React.createClass({
//Quando o componente não manipula estado pode apenas se exportar uma função pura do JS
//Como abaixo ao inves de criar uma função render ....

    function userInfo(props) {
        if(props.user){
            return (
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-circle" src={ props.user.avatar_url } alt="avatar" 
                        width="140" height="140" />
                        <h2>{ props.user.login }</h2>
                        <p>{ props.user.name }</p>
                        <p>Followers: { props.user.followers } / 
                            Following: { props.user.following }</p>
                        <p><a className="btn btn-default" href={ props.user.html_url } role="button">
                            View details</a></p>
                    </div>
                </div>
            );
        }
        return null;
    }

    // render: function() {
    //     if(this.props.user){
    //         return (
    //             <div className="row">
    //                 <div className="col-lg-4">
    //                     <img className="img-circle" src={ this.props.user.avatar_url } alt="avatar" 
    //                     width="140" height="140" />
    //                     <h2>{ this.props.user.login }</h2>
    //                     <p>{ this.props.user.name }</p>
    //                     <p>Followers: { this.props.user.followers } / 
    //                         Following: { this.props.user.following }</p>
    //                     <p><a className="btn btn-default" href={ this.props.user.html_url } role="button">
    //                         View details</a></p>
    //                 </div>
    //             </div>
    //         );
    //     }
    //     return null;
    // }
// });

module.exports = userInfo;