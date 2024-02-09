import './index.css'


const SuggestionItem=props=>{
    const {suggest,chooseSugesstion}=props
    const {id,suggestion}=suggest
    const selectConst=()=>{ 
        chooseSugesstion(id)

    }
    return(
        <li className='lists'>
           <p>{suggestion}</p>
           <button type='button' onClick={selectConst}>
           <img src='https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png' alt='arrow'/>
           </button>
        </li>
    )
}
export default SuggestionItem
