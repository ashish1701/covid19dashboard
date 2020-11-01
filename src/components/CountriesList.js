import List from "./table/List";
import config from "../config/country-stats"

 function CountriesList  (props)  {
   const {data} = props
   console.log({config,props})
  return(
    <div>
      Country wise Statistics.
      <List data={data} columns={config} />
    </div>
  )
 }
export default CountriesList
