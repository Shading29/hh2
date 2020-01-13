import React from "react"

export default class Auth extends React.Component {



    onAuth = event => {
        event.preventDefault()
        this.props.authUser2(this.props.login, this.props.password)
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center', paddingTop: '15px'}}>Авторизация</h1>
                <form>
                    <div className="form-group">
                        <label>Логин</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Логин"
                               value={this.props.login}
                               onChange={event => this.props.setLoginInput(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Пароль"
                               value={this.props.password}
                               onChange={event => this.props.setPasswordInput(event.target.value)}
                        />
                    </div>
                    <button type="button"
                            className="btn btn-primary"
                            onClick={this.onAuth}
                    >
                        Войти
                    </button>
                </form>
            </React.Fragment>
        )
    }
}