import * as Yup from 'yup';
export const CurrentProjectDetailsSchema=Yup.object({
    employeeId:Yup.number().required("Employee Id Is Reuired").min(0,"Employee Id Can't Be Negative")
})