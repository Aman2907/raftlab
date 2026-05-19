const validateOrder = (req, res, next) => {

const { customer } = req.body;

if (
!customer.fullName ||
!customer.phone ||
!customer.address
) {
return res.status(400).json({
message: "All fields are required",
});
}

next();
};

module.exports = validateOrder;
