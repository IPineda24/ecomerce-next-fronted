import Link from "next/link";
import styles from "./sing-up.module.scss";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
export default function SignUpPage() {
    return (
        <>
            <JoinLayout>
                <div className={styles.signUp}>
                    <h3>Crear cuenta</h3>
                    <RegisterForm />

                    <div className={styles.actions}>
                        <Link href="/join/sign-in">Atras</Link>
                        

                    </div>
                </div>
            </JoinLayout>
        
        </>
    )
}
