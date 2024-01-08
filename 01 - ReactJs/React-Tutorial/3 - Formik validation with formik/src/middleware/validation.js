export const validate = (values) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/g;
  const phoneRegex = /^09[0-9]{9}|٠٩[٠١٢٣٤٥٦٧٨٩]{9}|۰۹[۰۱۲۳۴۵۶۷۸۹]{9}$/i;
  const { username, email, password, confrimPassword, checkRule, phone } =
    values;
  const errors = {};
  if (!username.trim() || !email.trim()) {
    errors.empty = "فاضله نذارید";
  }
  if ((!username || !email, !password || !confrimPassword, !phone)) {
    errors.trim = "پر کردن فیلد ها الزامی است";
  }
  if (password !== confrimPassword) {
    errors.confrimPassword = "پسورد ها یکی نیستند";
  }
  if (username.length < 3) {
    errors.username = "نام کاربری نمی تواند کوچک تر از 3 باشد";
  }
  if (!checkRule) {
    errors.checkRule = "قوانین را بخوانید  و قبول کنید";
  }
  if (!passwordRegex.test(password)) {
    errors.password = " پسورد شمانیاز هست 8 کاراکتر باشد Test@1a2";
  }
  if (!emailRegex.test(email)) {
    errors.email = "exmapel@gmail.com ایمیل شما معتبر نیست";
  }
  if (!phoneRegex.test(phone)) {
    errors.phone = "شماره تلفن موبایل شما معتبر نیست";
  }
  return errors;
};
