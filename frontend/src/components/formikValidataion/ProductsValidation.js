import * as Yup from 'yup';

// Yup Validation Schema
export const productsSchema = Yup.object().shape({
    productName: Yup.string().required('Write your product name'),
    price: Yup.number().required('Add product price in $'),
    category: Yup.string().required('category is required'),
    companyName: Yup.string().required('Required'),
    productDetails: Yup.string()
        .min(10, "Product description length must be at least 10")
        .required('Product details is required'),
    imageUrl: Yup.mixed()
        .required('Image is required')
        .test('fileSize', 'Image size must be less than 5MB', (value) => {
            if (value) {
                return value.size <= 1024 * 1024 * 5; // 1MB limit
            }
            return true;
        })
        .test('fileType', 'Only JPEG, PNG, and GIF images are allowed', (value) => {
            if (value) {
                return (
                    value.type === 'image/jpeg' ||
                    value.type === 'image/png' ||
                    value.type === 'image/gif'
                );
            }
            return true;
        })
});

// onSubmit handler function It will call when user will submit form
export const onSubmitProduct = (values, { resetForm }) => {
    // Use the FileReader API to read the uploaded image file and get its URL path
    const reader = new FileReader();
    reader.readAsDataURL(values.imageUrl);
    reader.onload = () => {
        // Add the image URL path to the form data object
        const formData = {
            ...values,
            imageUrl: reader.result
        };
        console.log(formData.imageUrl);
        // Reset the form after submitting it 
        resetForm();
        resetForm({});
    };
};
