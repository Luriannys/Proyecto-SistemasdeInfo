import './form.css'

const CustomInput = ({ ...props }) => {

    return (
        <>
            <div className="input_wrapp">
                {props.label &&
                    <p className="label">
                        {props.label}
                    </p>
                }
                <div className='input_container'>
                    {props.preffixIcon &&
                        <div className="input_icon">
                            {props.preffixIcon}
                        </div>
                    }

                    <input
                        id={props.id}
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name}
                    />

                    {props.suffixIcon &&
                        <div onClick={props.onClick} className="input_icon">
                            {props.suffixIcon}
                        </div>
                    }

                </div>
            </div>
        </>
    )
}


export default CustomInput