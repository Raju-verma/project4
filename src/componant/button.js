function Button(){
    
    function Addvalue(){
        let setcounter=10;
       let counter=setcounter+1;
        console.log(counter);
    }
    Addvalue();
    return(
        <>
          <button onClick={Addvalue}>Add value</button>
        </>
    );
}
export default Button;