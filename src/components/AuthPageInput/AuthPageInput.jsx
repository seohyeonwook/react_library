/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdErrorOutline } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";

function AuthPageInput( { type, name, placeholder, value, onChange, onBlur, ref, message  } ) {
    return (
        <div css={s.inputBox}>
            <input 
                css={s.input}  //여기가 실제인풋 여기가 실제 이벤트 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                onBlur={onBlur}
                ref={ref} 
            />
            
            {
                !!message && 
                <div css={s.inputIcon(message.type)}>
                    {message.type === "error" ? <MdErrorOutline/> : <MdCheckCircleOutline />}
                </div>
            }
            {
                !!message &&
                // 메세지 값이 있을 때 띄워라
                <div css={s.messageBox(message.type)}>
                    { message.text }
                </div>
            }
        </div>
    );
}

export default AuthPageInput;