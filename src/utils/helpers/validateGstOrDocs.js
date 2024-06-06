export const validateGstOrDocs = (data) => {
  const errors = {};
  const gstValue = data.gst_number;
  const panValue = data.pan_number;
  const aadharValue = data.aadhar_number;
  const panImageUrl = data.pan_image_url;
  const aadharImageUrl = data.aadhar_image_url;

  if (!gstValue) {
    if (!panValue || !aadharValue || !panImageUrl || !aadharImageUrl) {
      errors.panValue =
        "Provide Either Gst No. Or PAN Number and Aadhar Number along with their images";
    }
  }

  return errors;
};
