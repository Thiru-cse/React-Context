import { CountContext, NameContext } from "./context";
import { useContext } from "react"

function Test1() {
    const context = useContext(CountContext);
    const namecontext = useContext(NameContext);

    return(
                    <>
                    <h4>Test1 Component</h4>
                    <p>Count - {context.count}</p>
                    <p>Name - {namecontext.name}</p>
                    </>
                )
    }


export default Test1;