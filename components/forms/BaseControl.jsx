import { InputGroup } from 'react-bootstrap';

import { Tooltip } from 'react-tooltip';
import { QuestionCircle } from 'react-bootstrap-icons';

function BaseControl({
    formik,
    required,
    className,
    label,
    children,
    touched,
    error,
    name,
    prepend,
    append,
    after,
    labelTextColor,
    hideErrors,
    tooltip,
    tooltipText,
}) {

    if (formik) {
        /**
         * @type {import('formik').FieldMetaProps}
         */
        const meta = formik.getFieldMeta(name);

        if (meta) {
            touched = meta.touched;
            error = meta.error;
        }
    }
    return (
        <div className={`${className || ''}`}>
            {label && (
                <div className='display:flex; justify-content:center; '>
                    <label
                        className={`tracking-wide text-sm mb-2  capitalize flex items-center ${labelTextColor
                                ? 'text-' + labelTextColor + '-500'
                                : 'text-gray-400'
                            }`}
                    >
                        {label}
                        {required && <span className='text-red-500'>*</span>}

                        {tooltip && (
                            <>
                                <QuestionCircle className='mx-1'
                                    data-tooltip-id='input-tooltip'
                                    data-tooltip-content={tooltipText}
                                />
                                <Tooltip id='input-tooltip' />
                            </>
                        )}
                    </label>
                </div>
            )}

            <InputGroup className='flex border border-gray-2 p-2 rounded-md relative overflow-hidden'>
                {prepend && <div>{prepend}</div>}
                {children}
                {append && (
                    <div className='absolute -right-[23px]   top-0 w-[54px] h-[40px] rounded-full '>
                        {append}
                    </div>
                )}
            </InputGroup>
            {(touched || formik?.submitCount > 0) &&
                error &&
                typeof error == 'string' &&
                !hideErrors && (
                    <p className='text-red-500 italic  mr-0 w-full text-sm  text-left'>
                        {error}
                    </p>
                )}
            {after}
        </div>
    );
}

export default BaseControl;
