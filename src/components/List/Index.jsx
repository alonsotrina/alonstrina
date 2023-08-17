/* eslint-disable react/prop-types */
import { List } from "./styled";


const Index = ({ data }) => {
  return (
    <List>
      {
        data.map((item, index)=>(
          <li key={index} className="text-body-tertiary">
            <span>{item.key}</span> {item.value ? item.value: 'Sin información'}
          </li>
        ))
      }
  </List>

  )
}

Index.defaultProps = {
  data: [{
    key:'title',
    value: 'description'
  }]
}


export default Index