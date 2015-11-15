var NavBar = React.createClass({
    render:function(){
        return (
            <nav>
                <div className="nav-wrapper  blue accent-1">
                    <div className="container">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">Sass</a></li>
                            <li><a href="#">a</a></li>
                            <li><a href="#">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

var InfoBox = React.createClass({
    render:function(){
        var items = [];

        var student = {
            name:'ads',
            yuanxi:'asd'
        };
        var high_margin_top = {
            marginTop:'140px'
        };
        var choice_sytle = {
            marginTop:'40px',
            marginBottom:'40px'
        };
        return(
            <div className="container" style={high_margin_top}>
                <div className="row">
                    <StudentInfn student={student}/>
                </div>
                <div className="row">
                    <h2 className="center">加分项目</h2>
                    <hr/>
                    <ItemTable items={items}/>
                </div>
                <div className="row">
                    <div className="row" style={choice_sytle}>
                        <h2 className="center">专业分支选择</h2>
                        <hr/>
                        <BrcnchChoice />
                    </div>
                </div>
            </div>
        );
    }
});


var StudentInfn = React.createClass({
    render:function(){
        return(
            <div className="col s12 l5 m5">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">用户信息</span>
                        <p>用户名称: {this.props.student.username}</p>
                        <p>院系:{this.props.student.yuanxi}</p>
                        <p>当期分流信息:{this.props.student.yuanxi}</p>
                        <p>当前分数排名:{this.props.student.yuanxi}</p>
                    </div>
                </div>
            </div>
        );
    }
});

var AddItemForm = React.createClass({
    render:function(){
        return (
            <div className="input-field">
                <textarea id="textarea1" className="materialize-textarea" value="asd" length="120"></textarea>
                <label for="textarea1">填写新的加分项目</label>
            </div>
            //<div className="input-field">
            //    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            //    <i className="material-icons right">send</i>
            //    </button>
            //    </div>
        );
    }
});


var ItemTable = React.createClass({
    render:function(){
        var items = this.props.items;
        var rows = [];
        items.forEach(function(item){
            rows.push(<ItemTableRow item={item}/>);
        });
        return(
            <table className="hoverable highlight centered">
                <thead>
                <tr>
                    <th data-field="id">加分项目描述</th>
                    <th data-field="name">状态</th>
                    <th data-field="price">加分</th>
                    <th data-field="price">操作</th>
                </tr>
                </thead>

                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var ItemTableRow = React.createClass({
    render:function(){
        return(
            <tr>
                <td>{this.props.item.description}</td>
                <td>{this.props.item.state}</td>
                <td>{this.props.item.score}</td>
                <td>xx</td>
            </tr>
        );
    }
});

var BrcnchChoice = React.createClass({
    render:function(){
        return(
                <div className="row">
                    <div className="col s6 l6 m6">
                        <p className="center">当前选择专业</p>
                    </div>

                    <div className="input-field col s4">
                        <select>
                            <option value="" disabled selected>选择你的兴趣</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>专业分支选择</label>
                    </div>
                    <div className="input-field col s2">
                        <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>submit</a>
                    </div>
                </div>
        );
    }
});

var FooterBar = React.createClass({
    render:function(){
        return(
            <footer className="page-footer  blue accent-1">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }
});

ReactDOM.render(
    (<div>
        <NavBar/>
        <InfoBox/>
        <FooterBar/>
    </div>),
    document.getElementById('container')
);
