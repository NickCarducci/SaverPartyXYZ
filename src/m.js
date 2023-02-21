const sendTo = {
  source: {
    type: "wallet",
    id: walletId,
    destination: {
      type: "wire",
      id: bankId,
      amount: {
        currency: "USD",
        amount: "150.00"
      },
      metadata: { beneficiaryEmail: "john.smith@email.com" }
    }
  }
};

const wireFrom = {
  destination: {
    type: "wire",
    id: bankId,
    amount: {
      currency: "USD",
      amount: "150.00"
    },
    metadata: { beneficiaryEmail: "john.smith@email.com" }
  }
};
