import React from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import {ForgotPasswordForm} from "./forgot-password-form/forgot-password-form";
import {BasicModal} from "../../../common/modals/basic-modal";
import {EmailSendModal, NewPasswordSaveErrorModal, NewPasswordSaveModal} from "../../../common/modals/modal-info";
import {useLocation} from "react-router-dom";
import {ResetPasswordForm} from "./reset-password-form/reset-password-form";

export const ForgotPassword: React.FC = () => {
    const resetPasswordOk = useAppSelector(state => state.auth.resetPasswordOk)
    const forgotPasswordError = useAppSelector(state => state.auth.forgotPasswordError)
    const forgotPasswordOk = useAppSelector(state => state.auth.forgotPasswordOk)

    const location = useLocation();
    const code = location.search.substring(6);

    return (
        <div>
            {!forgotPasswordOk && !code && <ForgotPasswordForm/>}

            {code && !resetPasswordOk && !forgotPasswordError && <ResetPasswordForm code={code}/>}

            {forgotPasswordOk && <BasicModal modalInfo={EmailSendModal}/>}
            {forgotPasswordError && <BasicModal modalInfo={NewPasswordSaveErrorModal}/>}
            {!forgotPasswordError && resetPasswordOk && <BasicModal modalInfo={NewPasswordSaveModal}/>}
        </div>
    );
};

