import { React, useState } from 'react';
import { connect } from 'react-redux';
import { loginReq } from '../../state/login/login.actions';
import './login.scss';

function Login({ loginReq }) {
  const [datos, setDatos] = useState({
    user: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginReq(datos.user, datos.password);
  };

  return (
    <div className='login'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label className='login-username'>username</label>
        <input placeholder='user' type='text' name='user' onChange={handleInputChange} />
        <label className='login-password'>password</label>
        <input placeholder='password' type='password' name='password' onChange={handleInputChange} />
        <input className='login-submit' type='submit' value='Login' />
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({ login: state.login });

// const mapDispatchToProps = (dispatch) => ({
//   loginReq: (username, password) => dispatch(loginReq(username, password)),
// });

export default connect(mapStateToProps, { loginReq })(Login);
