import { VERIFICATION_EMAIL_TEMPLATE ,PASSWORD_RESET_REQUEST_TEMPLATE ,PASSWORD_RESET_SUCCESSFUL_TEMPLATE} from "./emailTemplates.js"
import { mailtrapClient ,sender} from "./mailtrap.js"

export const sendVerificationEmail = async (email, verificationToken)=>{
    const recipient = [{email}]


    try {
        
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your Email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{Insert OTP}",verificationToken),
            category:"Email verification"
        })

        console.log("Email sent successfully",response)
    } catch (error) {
        console.error(`Error sending verificaation email: `,error);
        throw new Error(`Error sending verificaation email: ${error}`);
    }
}



export const sendWelcomeEmail = async (email,name) =>{
    const recipient = [{email}]

    try {
        const response =await mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid:"94c53a4a-5e44-49dd-8dbe-9e3a4d1b72a4",
            template_variables:{
                company_info_name:"Web_docs",
                name:name
            }

        })
        console.log("welcome Email sent successfully",response)
    } catch (error) {
        console.error(`Error sending welcome email${error}`)
        throw new Error(`Error sending welcome email${error}`)
    }
}


export const sendPasswordResetEmail = async(email,resetURL) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Reset your password",
            html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Password Reset"
        })
    } catch (error) {
        console.error('Error sending reset email',error)
        throw new Error(`Error sending reset email:${error}`)
    }
}


export const sendResetSuccessfulEmail = async (email)=>{
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject: "Password Reset",
            html:PASSWORD_RESET_SUCCESSFUL_TEMPLATE,

        })
    } catch (error) {
        console.error('Error sending reset successful email',error)
        throw new Error(`Error sending reset successful email:${error}`)
    }
}