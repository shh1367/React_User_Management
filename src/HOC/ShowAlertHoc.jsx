import { useState } from "react";
import Swal from "sweetalert2";

const ShowAlertHoc = (MainComponent) =>{
        const NewComponent = (props)=>{
            const confirm =(message , username)=>{
                Swal.fire({
                    title: `آیا مطین هستید کاربر ${username} حذف گردد؟ this is HOC`,
                    text: message,
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonText : 'لغو' ,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'بله پاک شود'
                  })
                 
            }

            const Alert =()=>{
               
                    Swal.fire(
                      'حذف گردید',
                      'رکورد مورد نظر حذف گردید',
                      'با موفقیت'
                    )
                  
            }
        

            return (
                <MainComponent {...props}  confirm={confirm} Alert={Alert}/>
            )

        }

        return NewComponent;
}

export default ShowAlertHoc;