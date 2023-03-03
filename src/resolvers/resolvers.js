const stripe = require('stripe')('sk_test_51Mh6waBsZr9i1hrRyfpvs1LuDLisPrNudFbiVHrcxuO5B8lOCVJoERKm2t9XuPNzj1UCDTaLyWJc1b72TO73jCzJ00kLsyiBnB');

const resolvers = {
    Mutation: {
        createStripeCustomer: async (parent, { name, email, description }, context) => {
            try {
                const customer = await stripe.customers.create({
                    name,
                    email,
                    description,
                });

                return {
                    id: customer.id,
                    name: customer.name,
                    email: customer.email,
                    description: customer.description,
                };
            } catch (error) {
                console.error(error);
                throw new Error('Failed to create Stripe customer');
            }
        },
    },
};

module.exports = resolvers;

