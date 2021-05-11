/*
 * @Description: 
 * @Author: astar
 * @Date: 2021-01-11 19:43:22
 * @LastEditTime: 2021-05-11 23:47:33
 * @LastEditors: astar
 */
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Test2 (props) {
  const { topic } = useParams();
  const links = ['aaa', 'bbb', 'ccc']
  console.log(props)
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
