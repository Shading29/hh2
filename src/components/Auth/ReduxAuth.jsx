import React from "react"
import {Field} from "redux-form";
import {reduxForm} from "redux-form"

class ReduxAuth extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center', paddingTop: '15px'}}>Авторизация</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label>Логин</label>
                        <Field type="text"
                               className="form-control"
                               placeholder="Логин"
                               component={"input"}
                               name={"login"}
                        />
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <Field type="password"
                               className="form-control"
                               placeholder="Пароль"
                               component={"input"}
                               name={"password"}
                        />
                    </div>
                    <button className="btn btn-primary"
                            type="submit"
                            disabled={this.props.submitting}
                    >
                        Войти
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

export default reduxForm({
    form: 'login' // a unique identifier for this form
})(ReduxAuth)