// Validation input

// --------------  phone mobile must be start with 09

if (
	!/^09[0-9]{9}|٠٩[٠١٢٣٤٥٦٧٨٩]{9}|۰۹[۰۱۲۳۴۵۶۷۸۹]{9}$/i.test(
		values.phonenumber
	)
) {
	errors = 'شماره شما با 09 شروع شود';
}

// ----------------  valid number and string

if (!/\D/.test(inp.value)) {
	console.log('You submitted numbers');
}

// or

// isNan = Not a number
// Valid String
if (isNaN(inpt.value)) {
	console.log('valid');
}
// Valid number
if (!isNaN(inpt.value)) {
	console.log('valid');
}

// --- remove space inpu value

if (/\s/g.test(inp.value)) {
	errors = 'لطفا فاصله اضافی را حذف کنید';
}

//  or

if (inp.value.includes(' ')) {
	inp.value = inp.value.replace(/\s/g, '');
	errors = 'لطفا فاصله اضافی را حذف کنید';
}

// empty value
if (!values.username) {
	errors = 'لطفا فیلد را خالی نزارید';
}
// ---- check length
if (values.phonenumber.length > 11 || values.phonenumber.length < 11) {
	console.log('length is okey');
}

// --- Email valid
let mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
if (inp.value.match(mail)) {
	console.log('Valid email address!');
}

//--- Hard PW

// ^                         Start anchor
// (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
// (?=.*[!@#$&*])            Ensure string has one special case letter.
// (?=.*[0-9].*[0-9])        Ensure string has two digits.
// (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
// .{8}                      Ensure string is of length 8.
// $                         End anchor.

let hardPW =
	/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

if (inp.value.match(hardPW)) {
	console.log('password is good');
} else {
	console.log('password is low');
}
