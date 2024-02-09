import GoogleSuggestion from './GoogleSuggestion/index.js'


const suggestList=[{
  id:1,suggestion:'bala'
  
},
{id:2,suggestion:'yoga'}
,
{
  id:3,suggestion:'pavi'
},
]

const App=()=>{
  return  <GoogleSuggestion suggestList={suggestList}/>
  }


export default App;
