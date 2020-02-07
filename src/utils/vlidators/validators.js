export const required = (value) => {
    if(value) return undefined;
     return 'Fiel is required';
}
export const  maxLengthCreator =(maxLength) => (value) => {
    if( value.length > maxLength) return `Max lenght ${maxLength} symbols`;
    return undefined;
}

export const  minLengthCreator =(minLength) => (value) => {
    if( value.length < minLength) return `Min lenght ${minLength} symbols`;
    return undefined;
}

export const emailCreator = email => {
    if (!email) {
       return `Required`
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return `Invalid email address`
    }
}
export const loginCreator = login => {
    if (login!=="admin") {
        return `Invalid login`
    }
}
export const passwordCreator = password => {
    if (password!=="123") {
        return `Invalid password`
    }
}
