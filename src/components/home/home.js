import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersReq } from '../../state/home/home.actions';
import './home.scss';

function Home({ getUsersReq }) {
  const [users, setUsers] = useState([]);

  useEffect((getUsersReq) => {
    console.log('test');
    setUsers(getUsersReq());
  }, []);

  return (
    <div className='login'>
      {users.map((user) => {
        return <div>{user}</div>;
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({ home: state.home });

// const mapDispatchToProps = (dispatch) => ({
//   loginReq: (username, password) => dispatch(loginReq(username, password)),
// });

export default connect(mapStateToProps, { getUsersReq })(Home);
