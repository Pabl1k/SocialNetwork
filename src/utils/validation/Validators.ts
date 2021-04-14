export const required = (value: any) => {
    return value ? undefined : 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    return value.length > maxLength ? `Max length ${maxLength} symbols` : undefined
}