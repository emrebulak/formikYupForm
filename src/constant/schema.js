import * as Yup from 'yup';
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&.,*-]).{5,}$';

export const schema = Yup.object().shape({
    email: Yup.string().email("Geçerli bir email adresi giriniz").required("Email alanı zorunludur"),
    age: Yup.number().min(15, "Yaş 15'den büyük olmalıdır").max(100, "Yaş 100'den küçük olmalıdır").required("Yaş alanı zorunludur"),
    password: Yup.string().matches(regex,"Güçlü bir şifre giriniz").min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre alanı zorunludur"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor").required("Şifre onay alanı zorunludur"),
});