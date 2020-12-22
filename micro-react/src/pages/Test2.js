import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Test2 () {
  const { topic } = useParams();
  const links = ['aaa', 'bbb', 'ccc']
  return (
    <>
      <h3>请选择以下子路由</h3>
      {links.map(item => (
          <NavLink
            style={{ width: '80px', display: 'inline-block', textDecorationLine: 'none' }}
            to={`/test2/${item}`}
            key={item}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>路由{item}</NavLink>
      ))}
      <br/>
      <p>{topic || '暂未选择'}</p>
    </>
  )
}
export default Test2;
