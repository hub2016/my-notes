/**
 * Created by Hub on 2016/2/28.
 */
var title = "Hello react";
//var title = {"name":"Hub"};
var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return <h1>{this.props.title}</h1>;
    }
});
ReactDOM.render(
    <MyTitle title={title} />,
    document.getElementById('example')
);
/*var WebSite = React.createClass({
    getInitialState: function() {
      return {
          name: "Hello React",
          site: "http://www.baidu.com"
      };
    },
    render: function(){
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        );
    }
});

var Name = React.createClass({
    render: function(){
        return (
            <h1>{this.props.name}</h1>
        );
    }
});

var Link = React.createClass({
    render: function(){
        return (
            <a href={this.props.site}>{this.props.site}</a>
        );
    }
});
ReactDOM.render(
    <WebSite />,
    document.getElementById('example')
);*/

/*
* var LikeButton = React.createClass({
 getInitialState: function(){
 return {liked: false};
 },
 handleClick: function (event) {
 this.setState({liked: !this.state.liked});
 },
 render: function () {
 var text = this.state.liked ? '喜欢' : '不喜欢';
 return (
 <p onClick = {this.handleClick}>
 你<b>{text}</b>我。点我切换状态。
 </p>
 );
 }
 });

 ReactDOM.render(
 <LikeButton />,
 document.getElementById('example')
 );
*
* */