import otpTamplate from "./otpTamplate.js";
import sendEmail from "./sendEmail.js";
const sendOtp = async (code,email) => {
    try {
        const msg = otpTamplate(code);
        await sendEmail({
            email,
            sub: 'verification email from apexresume',
            message: msg
        })
        return {sucess: true, message: "verification code send sucessful"};
    } 
    catch (error) {
        return {sucess: false, message: "verification code failed to send"};
    }
}

export default sendOtp;